import { ModbusClient, UPCDiffCo2Program, UPCDiffCo2Sun } from './modbus';
import { Events, LoadingController } from '@ionic/angular';
import { GeneralParameters } from './generalParameters';
import { DiffusionParameters } from './diffusionParameters';
import { CommunicationParameters } from './communicationParameters';
import { AlarmsParameters } from './alarmsParameters';
import { ReservesParameters } from './reservesParameters';
import { CorrespondancesRegistres } from './correspondancesRegistres'; 

export class UPCModbus {
  // Attributes
  host:                     string    = '10.1.1.1';
  port:                     number    = 502;
  stateChangeCallback:      any       = null;
  state:                    UPCState  = UPCState.NULL;
  static litterToKilograms: number    = 0.001974;

  client: ModbusClient = null;
 

  nameId:         string = '';
  mode:           number = 0;
  status:         number = 0;
  trapNum:        number = 0;
  general : GeneralParameters = new GeneralParameters();
  diffusions : DiffusionParameters = new DiffusionParameters();
  alarm : AlarmsParameters = new AlarmsParameters();
  reserves : ReservesParameters = new ReservesParameters();
  co2FlowRefTrap: number = 0;
  co2Res1ActVol:    number = 0;
  co2Res2ActVol:    number = 0;
  diffHourSunrise:    number = 0;
  diffHourSunset:     number = 0;
  diffCo2Program:     UPCDiffCo2Program[] = [
    new UPCDiffCo2Program(),
    new UPCDiffCo2Program(),
    new UPCDiffCo2Program(),
    new UPCDiffCo2Program(),
    new UPCDiffCo2Program(),
    new UPCDiffCo2Program(),
    new UPCDiffCo2Program(),
    new UPCDiffCo2Program(),
    new UPCDiffCo2Program(),
    new UPCDiffCo2Program()
  ];
  communicationParameters: CommunicationParameters = new CommunicationParameters();

  diffCo2Sunrise: UPCDiffCo2Sun = new UPCDiffCo2Sun();
  diffCo2Sunset:  UPCDiffCo2Sun = new UPCDiffCo2Sun();

  modeChoisi; //Intervention sur ceinture ou mouvement de bouteilles ou mode test
  answer: number;
  correspondancesRegistres: CorrespondancesRegistres;
  success: boolean;

  /**
   * Constructor
   */
  constructor(stateChangeCallback) {
    this.stateChangeCallback = stateChangeCallback;
    this.init();
  }
  int2ip (ipInt) {
    return ( (ipInt>>>24) +'.' + (ipInt>>16 & 255) +'.' + (ipInt>>8 & 255) +'.' + (ipInt & 255) );
  }
  toZero4(d) {
    
    return ("0000" + (+d).toString(16)).substr(-4);

  }
  async onReadCyclique(upcNameId:string, mode:string, page:string) { 
    var success;
    var error;
    var correspondanceRegistres = new CorrespondancesRegistres()
    switch(page){
      case "interventionceinture":
        success = true
        break;
      case "namepiege":
        success = true
        break;

      case "cdiff": 
        try{ 
          //40435 40464
          var res = await this.client.readHoldingRegisters(correspondanceRegistres.co2PressInpAvg.adr,29)

          //40435 
          this.diffusions.co2PresInpAvg = this.client.registerToFloat([res[0],res[1]]);
          //40437
          this.diffusions.co2PresOutAvg = this.client.registerToFloat([res[2],res[3]]); 
          //40451  
          this.diffusions.co2TempAvg = this.client.registerToFloat([res[16],res[17]]);
          //40463 
          this.diffusions.co2PressOutComp = this.client.registerToFloat([res[28],res[29]]);
          
          success = true

          break;         
        }
        catch(err){
          success = false
          error = err

          break;
        } 

      case "comunicationparam":
        success = true
        break;

      case "addbottleceint":
        success = true
        break;

      case "synchro":
        success = true
        break;

      case "alarmparam":
        success = true
        break;
    }  
    if(success == true){
      return true;
    } 
    else{
      return error;
    }
  }

  async onReadStatique(upcNameId:string, mode:string, page:string){
    var success;
    var error;
    this.correspondancesRegistres = new CorrespondancesRegistres()
    var correspondanceRegistres = new CorrespondancesRegistres()
    const opt = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric',
    minute: 'numeric',
    dayPeriod: 'short' }; 
    switch(page){
      case "synchro": 
      try{
        console.log("page programmation lire varibale modbus ")
        var res1 = await this.client.readHoldingRegisters(correspondanceRegistres.diffHourSunRise.adr,77)
          //40068 40069
        this.diffHourSunrise = this.client.registerToUint32([res1[0],res1[1]]);
        console.log(this.diffHourSunrise)
        /*alert(res1[0])
        alert(res1[1])
        alert("diff sunrise :"+this.diffHourSunrise)*/
        //40070 40071
        this.diffHourSunset = this.client.registerToUint32([res1[2],res1[3]]);
        console.log(this.diffHourSunset)
        /*alert(res1[2])
        alert(res1[3])
        alert("diff sunset :"+this.diffCo2Sunset)*/
  
        //40072 40073
        this.diffCo2Program[0].start = this.client.registerToUint32([res1[4],res1[5]]);
        //40074 40075
        this.diffCo2Program[0].stop = this.client.registerToUint32([res1[6],res1[7]]);
        //40076
        this.diffCo2Program[0].mode = this.client.registerToUint32([res1[8]]);
        //40077
        this.diffCo2Program[0].intensity = this.client.registerToUint32([res1[9]]);
  
        //40078 40079
        this.diffCo2Program[1].start = this.client.registerToUint32([res1[10],res1[11]]);
        //40080 40081
        this.diffCo2Program[1].stop = this.client.registerToUint32([res1[12],res1[13]]);
        // 40082
        this.diffCo2Program[1].mode = this.client.registerToUint32([res1[14]]);
        //40083
        this.diffCo2Program[1].intensity = this.client.registerToUint32([res1[15]]);
  
        //40084 40085
        this.diffCo2Program[2].start = this.client.registerToUint32([res1[16],res1[17]]);
        //40086 40087
        this.diffCo2Program[2].stop = this.client.registerToUint32([res1[18],res1[19]]);
        //40088
        this.diffCo2Program[2].mode = this.client.registerToUint32([res1[20]]);
        //40089
        this.diffCo2Program[2].intensity = this.client.registerToUint32([res1[21]]);
  
        //40090 40091
        this.diffCo2Program[3].start = this.client.registerToUint32([res1[22],res1[23]]);
        //40092 40093
        this.diffCo2Program[3].stop = this.client.registerToUint32([res1[24],res1[25]]);
        //40094 
        this.diffCo2Program[3].mode = this.client.registerToUint32([res1[26]]);
        //40095
        this.diffCo2Program[3].intensity = this.client.registerToUint32(res1[27]);
  
        //40096 40097
        this.diffCo2Program[4].start = this.client.registerToUint32([res1[28],res1[29]]);
        //40098 40099
        this.diffCo2Program[4].stop = this.client.registerToUint32([res1[30],res1[31]]);
        //40100
        this.diffCo2Program[4].mode = this.client.registerToUint32([res1[32]]);
        //40101
        this.diffCo2Program[4].intensity = this.client.registerToUint32(res1[33]);
  
        //40102 40103
        this.diffCo2Program[5].start = this.client.registerToUint32([res1[34],res1[35]]);
        //40104 40105
        this.diffCo2Program[5].stop = this.client.registerToUint32([res1[36],res1[37]]);
        //40106
        this.diffCo2Program[5].mode = this.client.registerToUint32([res1[38]]);
        //40107
        this.diffCo2Program[5].intensity = this.client.registerToUint32([res1[39]]);
  
        //40108 40109
        this.diffCo2Program[6].start = this.client.registerToUint32([res1[40],res1[41]]);
        //40110 40111
        this.diffCo2Program[6].stop = this.client.registerToUint32([res1[42],res1[43]]);
        //40112 
        this.diffCo2Program[6].mode = this.client.registerToUint32([res1[44]]);
        //40113
        this.diffCo2Program[6].intensity = this.client.registerToUint32([res1[45]]);
  
        //40114 40115
        this.diffCo2Program[7].start = this.client.registerToUint32([res1[46],res1[47]]);
        //40116 40117
        this.diffCo2Program[7].stop = this.client.registerToUint32([res1[48],res1[49]]);
        //40118 
        this.diffCo2Program[7].mode = this.client.registerToUint32([res1[50]]);
        //40119
        this.diffCo2Program[7].intensity = this.client.registerToUint32([res1[51]]);
  
        //40120 40121
        this.diffCo2Program[8].start = this.client.registerToUint32([res1[52],res1[53]]);          
        //40122 40123
        this.diffCo2Program[8].stop = this.client.registerToUint32([res1[54],res1[55]]);
        //40124 
        this.diffCo2Program[8].mode = this.client.registerToUint32([res1[56]]);
        //40125
        this.diffCo2Program[8].intensity = this.client.registerToUint32([res1[57]]);
  
        //40126 40127
        this.diffCo2Program[9].start = this.client.registerToUint32([res1[58],res1[59]]);
        //40128 40129
        this.diffCo2Program[9].stop = this.client.registerToUint32([res1[60],res1[61]]);
        //40130
        this.diffCo2Program[9].mode = this.client.registerToUint32([res1[62]]);
        //40131
        this.diffCo2Program[9].intensity = this.client.registerToUint32(res1[63]);
  
        //40132 40133
        this.diffCo2Sunrise.offset = this.client.registerToUint32([res1[64],res1[65]]);
        //40134 40135
        this.diffCo2Sunrise.duration = this.client.registerToUint32([res1[66],res1[67]]);
        //40137
        this.diffCo2Sunrise.intensity = this.client.registerToUint32([res1[69]]);
  
        //40138 40139
        this.diffCo2Sunset.offset = this.client.registerToUint32([res1[70],res1[71]]);
        //40140 40141
        this.diffCo2Sunset.duration = this.client.registerToUint32([res1[72],res1[73]]);
        //40143
        this.diffCo2Sunset.intensity = this.client.registerToUint32([res1[75]]);
        console.log("intesityyyyyyyyyyyyyyyyyyyy==============="+this.diffCo2Sunset.intensity)

        

        var res2 = await this.client.readHoldingRegisters(correspondanceRegistres.upcMode.adr,1)
        console.log(":::::::::::::::::::UPC MODE :::::::::::::::::::::::::::::::::::::::")
        console.log(res2)
        var res2 = await this.client.readHoldingRegisters(correspondanceRegistres.upcStatus.adr,1)
        console.log(":::::::::::::::::::UPC Statu :::::::::::::::::::::::::::::::::::::::")
        console.log(res2)
        

        this.general.upcStatus = this.client.registerToUint32([res2[0]]);
        //alert("success")

        this.success = true

        break; 

      }
      catch(err){
        alert("catch lecture statique  page programmation")
        success = false
        error = err

        break;
      }

      case "interventionceinture":
        try{
          //40001 40015
          var res1 = await this.client.readHoldingRegisters(this.correspondancesRegistres.upcNameId.adr,15)
          
          //40001 40010                
          var tabname = [];
          for(var i = 0;i<10;i++){
            tabname.push(res1[i]);
          } 
          var nameId = this.client.registerToString(tabname).replace(/[^a-zA-Z0-9]/g,'');

          if(mode != "modeTest"){ //on n'est pas en mode test   

            if(nameId != upcNameId){ //changement d'UPC

              
              if(window.confirm("Une intervention est en cours sur l'upc "+upcNameId+". Voulez-vous néanmoins continuer sur l'upc "+nameId+"?")) {            
                if (window.confirm("Voulez-vous terminer l'intervention ? (OK) ou l'abandonner ? (Annuler)")) {              
                  return {success: true, object:"Terminer l'intervention en cours"};                                       
                }
                else{
                  var res = await this.readInterventionCeintureParameters()  
                  this.success = true;                                
    
                  break; 
                }                                  
              }
              else{
                alert("Rapprochez-vous de l'upc "+upcNameId+" puis appuyez sur 'OK'.")
                return {success: true, object:"Se rapprocher de l'upc"};
              }
            }
            else{           
              this.nameId = nameId;
  
              //40011
              this.general.upcMode = res1[10];
  
              //40015
              this.general.upcTrapNum = res1[14];
  
              var res = await this.readInterventionCeintureParameters()  
              this.success = true;    
              
  
              break; 
  
            }
          }
          else{           
            this.nameId = nameId;

            //40011
            this.general.upcMode = res1[10];

            //40015
            this.general.upcTrapNum = res1[14];

            var res = await this.readInterventionCeintureParameters()  
            this.success = true;    
            

            break; 

          }
    
        }catch(err){
          this.success = false
          error = err

          break;
        }        
      case "namepiege":
        console.log("mod bus name piege ")
        try{
          //40001 40015
          var res1 = await this.client.readHoldingRegisters(this.correspondancesRegistres.upcNameId.adr,15)
          //alert("res1 : "+res1)
          //40001 40010                
          var tabname = [];
          for(var i = 0;i<10;i++){
            tabname.push(res1[i]);
          } 
          var nameId = this.client.registerToString(tabname).replace(/[^a-zA-Z0-9]/g,'');

          if(mode != "modeTest"){ //on n'est pas en mode test   

            if(false){ //changement d'UPC
              

              if(window.confirm("Une intervention est en cours sur l'upc "+upcNameId+". Voulez-vous néanmoins continuer sur l'upc "+nameId+"?")) {            
                if (window.confirm("Voulez-vous terminer l'intervention ? (OK) ou l'abandonner ? (Annuler)")) {              
                  return {success: true, object:"Terminer l'intervention en cours"};                                       
                }
                else{
                  var res = await this.readGeneralParameters()  
                  this.success = true;                                
    
                  break; 
                }                                  
              }
              else{
                alert("Rapprochez-vous de l'upc "+upcNameId+" puis appuyez sur 'OK'.")
                return {success: true, object:"Se rapprocher de l'upc"};
              }                
            }
            else{
              
              this.nameId = nameId;

              //40012 40013                  
              this.general.upcClock = new Date(this.client.registerToUint32([res1[11],res1[12]])*1000).toLocaleDateString("fr-FR",opt); 

              //40015
              this.general.upcTrapNum = res1[14];
             

              var res = await this.readGeneralParameters()  
              this.success = true;    
              

              break; 

              
            }
          }
          else{
            this.nameId = nameId;

            //40012 40013                  
            this.general.upcClock = new Date(this.client.registerToUint32([res1[11],res1[12]])*1000).toLocaleDateString("fr-FR",opt); 

            //40015
            this.general.upcTrapNum = res1[14];

            var res = await this.readGeneralParameters()  
            this.success = true;   

            break; 
          }

        }
        catch(err){
          this.success = false
          error = err

          break;
        } 
      case "cdiff": 
        try{ 
          //40001 40065
          var res1 = await this.client.readHoldingRegisters(this.correspondancesRegistres.upcNameId.adr,65)

          //40001 40010                
          var tabname = [];
          for(var i = 0;i<10;i++){
            tabname.push(res1[i]);
          }
          
          var nameId = this.client.registerToString(tabname).replace(/[^a-zA-Z0-9]/g,'');

          if(mode != "modeTest"){ //on n'est pas en mode test   

            if(nameId != upcNameId){ //changement d'UPC
              

              if (window.confirm("Une intervention est en cours sur l'upc "+upcNameId+". Voulez-vous néanmoins continuer sur l'upc "+nameId+"?")) {            
                if (window.confirm("Voulez-vous terminer l'intervention ? (OK) ou l'abandonner ? (Annuler)")) {              
                  return {success: true, object:"Terminer l'intervention en cours"};                                       
                }
                else{
                  return {success: true, object:"Abandonner l'intervention en cours"};
                }                                  
              }
              else{
                alert("Rapprochez-vous de l'upc "+upcNameId+" puis appuyez sur 'OK'.")
                return {success: true, object:"Se rapprocher de l'upc"};
              }                
            }
            else{

              this.general.co2FlowRefAdj = this.client.registerToFloat([res1[17],res1[18]]);

              this.diffusions.upcDiffLvlAdj = res1[64]

              //40150
              var res2 = await this.client.readHoldingRegisters(this.correspondancesRegistres.co2ResActAdj.adr,1)
              this.reserves.co2ResActAdj = res2[0]

              //40376 40464
              var res3 = await this.client.readHoldingRegisters(this.correspondancesRegistres.upcStatus.adr,89)

              //40376
              this.general.upcStatus = res3[0]
              //40435 
              this.diffusions.co2PresInpAvg = this.client.registerToFloat([res3[58],res3[59]]);
              //40437
              this.diffusions.co2PresOutAvg = this.client.registerToFloat([res3[60],res3[61]]); 

              //40439 40440               
              this.diffusions.co2FlowAvg = this.client.registerToFloat([res3[62],res3[63]]);

              //40451  
              this.diffusions.co2TempAvg = this.client.registerToFloat([res3[75],res3[76]]);

              //40455 40456
              this.diffusions.co2PressInpOffs = this.client.registerToFloat([res3[79],res3[80]]);
              
              //40457 40458
              this.diffusions.co2PressOutOffs = this.client.registerToFloat([res3[81],res3[82]]);

              //40459 40460
              this.diffusions.co2FlowOffs = this.client.registerToFloat([res3[83],res3[84]]);

              //40463 
              this.diffusions.co2PressOutComp = this.client.registerToFloat([res3[87],res3[88]]);
              
              this.success = true

              break;         
            }
          }
          else{ //on est en mode test
            this.general.co2FlowRefAdj = this.client.registerToFloat([res1[17],res1[18]]);

              this.diffusions.upcDiffLvlAdj = res1[64]

              //40150
              var res2 = await this.client.readHoldingRegisters(this.correspondancesRegistres.co2ResActAdj.adr,1)
              this.reserves.co2ResActAdj = res2[0]

              //40376 40464
              var res3 = await this.client.readHoldingRegisters(this.correspondancesRegistres.upcStatus.adr,89)

              //40376
              this.general.upcStatus = res3[0]
              //40435 
              this.diffusions.co2PresInpAvg = this.client.registerToFloat([res3[58],res3[59]]);
              //40437
              this.diffusions.co2PresOutAvg = this.client.registerToFloat([res3[60],res3[61]]); 

              //40439 40440               
              this.diffusions.co2FlowAvg = this.client.registerToFloat([res3[63],res3[64]]);

              //40451  
              this.diffusions.co2TempAvg = this.client.registerToFloat([res3[75],res3[76]]);

              //40455 40456
              this.diffusions.co2PressInpOffs = this.client.registerToFloat([res3[79],res3[80]]);
              
              //40457 40458
              this.diffusions.co2PressOutOffs = this.client.registerToFloat([res3[81],res3[82]]);

              //40459 40460
              this.diffusions.co2FlowOffs = this.client.registerToFloat([res3[83],res3[84]]);

              //40463 
              this.diffusions.co2PressOutComp = this.client.registerToFloat([res3[87],res3[88]]);
              
              
              this.success = true

              break;         
          }
        }
        catch(err){
          this.success = false
          error = err

          break;
        }
      case "comunicationparam":
        try{

          //40001 40064
          var res1 = await this.client.readHoldingRegisters(this.correspondancesRegistres.upcNameId.adr, 64)

          //40001 40010                
          var tabname = [];
          for(var i = 0;i<10;i++){
            tabname.push(res1[i]);
          }

          var nameId = this.client.registerToString(tabname).replace(/[^a-zA-Z0-9]/g,'');

          if(mode != "modeTest"){ //on n'est pas en mode test   

            if(nameId != upcNameId && false){ //changement d'UPC
              

              if (window.confirm("Une intervention est en cours sur l'upc "+upcNameId+". Voulez-vous néanmoins continuer sur l'upc "+nameId+"?")) {            
                if (window.confirm("Voulez-vous terminer l'intervention ? (OK) ou l'abandonner ? (Annuler)")) {              
                  return {success: true, object:"Terminer l'intervention en cours"};                                       
                }
                else{
                  return {success: true, object:"Abandonner l'intervention en cours"};
                }                                  
              }
              else{
                alert("Rapprochez-vous de l'upc "+upcNameId+" puis appuyez sur 'OK'.")
                return {success: true, object:"Se rapprocher de l'upc"};
              }                
            }
            else{
              
              //40022 40023
              this.communicationParameters.comGsmIpAdr = this.int2ip(this.client.registerToUint32([res1[21],res1[22]]));

              //40024 40033
              var tabMdmName = [];
              for (var i = 23;i<33;i++){
              tabMdmName.push(res1[i]);
              }
              console.log("comMdm name :")
              console.log(tabMdmName)
              console.log(this.client.registerToString(tabMdmName))
              this.communicationParameters.comMdmName = this.client.registerToString(tabMdmName).replace(/[^a-zA-Z0-9-.-]/g,'')

              //40034 40043
              var tabMdmPass = [];
              for(var i =33;i<43;i++){
                tabMdmPass.push(res1[i]);
              }
              this.communicationParameters.comGsmPass = this.client.registerToString(tabMdmPass).replace(/[^a-zA-Z0-9-.-]/g,'')

              //40045 40053
              var tabssid = [];
              for (var i =44;i<54;i++){
                tabssid.push(res1[i]);
              }
              this.communicationParameters.comGsmName = this.client.registerToString(tabssid).replace(/[^a-zA-Z0-9-.-]/g,'')

              //40055 40064
              var tabpassword = [];
              for(var i = 54;i<64;i++){
                tabpassword.push(res1[i]);
              }
              this.communicationParameters.comWiFiPass = this.client.registerToString(tabpassword).replace(/[^a-zA-Z0-9-.-]/g,'');

              var res2 = await this.client.readHoldingRegisters(this.correspondancesRegistres.comWebSrvUrl.adr,46)

              //40295 40310
              var taburl = [];
              for(var i =0;i<14;i++){
                taburl.push(res2[i]);
              }
              this.communicationParameters.comWebSrvUrl = this.client.registerToString(taburl).replace(/[^a-zA-Z0-9-.-]/g,'');
              
              //40320 40329
              var tabapnuser = [];
              for (var i = 24;i<34;i++){
                tabapnuser.push(res2[i]);
              }
              this.communicationParameters.comMdmApnUser = this.client.registerToString(tabapnuser).replace(/[^a-zA-Z0-9]/g,'');

              //40330 40339
              var tabapnpass = [];
              for(var i = 34;i<44;i++){
                tabapnpass.push(res2[i]);
              }
              this.communicationParameters.comMdmApnPass = this.client.registerToString(tabapnpass).replace(/[^a-zA-Z0-9]/g,'');

              //40340 
              this.communicationParameters.comWifiApCh = this.client.registerToUint32([res2[45]])

              var res3 = await this.client.readHoldingRegisters(this.correspondancesRegistres.comMdmApnId2.adr,51)

              //40467 40517 0 50 
              var tabapn2 = [];
              for(var i =0;i<50;i++){
                tabapn2.push(res3[i]);
              }
              this.communicationParameters.comMdmApnId2 = this.client.registerToString(tabapn2).replace(/[^a-zA-Z0-9-.-]/g,'');
              
              this.success = true

              break;         
            }
          }
          else{ //on est en mode test

            //40022 40023
            this.communicationParameters.comGsmIpAdr = this.int2ip(this.client.registerToUint32([res1[21],res1[22]]));

            //40024 40033
            var tabMdmName = [];
            for (var i = 23;i<33;i++){
            tabMdmName.push(res1[i]);
            }
            this.communicationParameters.comMdmName = this.client.registerToString(tabMdmName)

            //40034 40043
            var tabMdmPass = [];
            for(var i =33;i<43;i++){
              tabMdmPass.push(res1[i]);
            }
            this.communicationParameters.comGsmPass = this.client.registerToString(tabMdmPass)

            //40045 40053
            var tabssid = [];
            for (var i =44;i<54;i++){
              tabssid.push(res1[i]);
            }
            this.communicationParameters.comGsmName = this.client.registerToString(tabssid)

            //40055 40064
            var tabpassword = [];
            for(var i = 54;i<64;i++){
              tabpassword.push(res1[i]);
            }
            this.communicationParameters.comWiFiPass = this.client.registerToString(tabpassword).replace(/[^a-zA-Z0-9-.-]/g,'');

            var res2 = await this.client.readHoldingRegisters(this.correspondancesRegistres.comWebSrvUrl.adr,46)

            //40295 40310
            var taburl = [];
            for(var i =0;i<14;i++){
              taburl.push(res2[i]);
            }
            this.communicationParameters.comWebSrvUrl = this.client.registerToString(taburl).replace(/[^a-zA-Z0-9-.-]/g,'');
            
            //40320 40329
            var tabapnuser = [];
            for (var i = 24;i<34;i++){
              tabapnuser.push(res2[i]);
            }
            this.communicationParameters.comMdmApnUser = this.client.registerToString(tabapnuser).replace(/[^a-zA-Z0-9]/g,'');

            //40330 40339
            var tabapnpass = [];
            for(var i = 34;i<44;i++){
              tabapnpass.push(res2[i]);
            }
            this.communicationParameters.comMdmApnPass = this.client.registerToString(tabapnpass).replace(/[^a-zA-Z0-9]/g,'');

            //40340 
            this.communicationParameters.comWifiApCh = this.client.registerToUint32([res2[45]])

            var res3 = await this.client.readHoldingRegisters(this.correspondancesRegistres.comMdmApnId2.adr,51)

            //40467 40517 0 50 
            var tabapn2 = [];
            for(var i =0;i<50;i++){
              tabapn2.push(res3[i]);
            }
            this.communicationParameters.comMdmApnId2 = this.client.registerToString(tabapn2).replace(/[^a-zA-Z0-9-.-]/g,'');
            
            this.success = true

            break;         
          }
        } 
        catch(err){
          this.success = false
          error = err

          break;
        } 
        
      case "addbottleceint":
        try{
          var res1 = await this.client.readHoldingRegisters(this.correspondancesRegistres.upcNameId.adr, 10)
          
           //40001 40010                
           var tabname = [];
           for(var i = 0;i<10;i++){
             tabname.push(res1[i]);
           }
 
           var nameId = this.client.registerToString(tabname).replace(/[^a-zA-Z0-9]/g,'');
 
           if(mode != "modeTest"){ //on n'est pas en mode test   
 
             if(nameId != upcNameId && false){ //changement d'UPC
               
 
               if (window.confirm("Une intervention est en cours sur l'upc "+upcNameId+". Voulez-vous néanmoins continuer sur l'upc "+nameId+"?")) {            
                 if (window.confirm("Voulez-vous terminer l'intervention ? (OK) ou l'abandonner ? (Annuler)")) {              
                   return {success: true, object:"Terminer l'intervention en cours"};                                       
                 }
                 else{
                   return {success: true, object:"Abandonner l'intervention en cours"};
                 }                                  
               }
               else{
                 alert("Rapprochez-vous de l'upc "+upcNameId+" puis appuyez sur 'OK'.")
                 return {success: true, object:"Se rapprocher de l'upc"};
               }                
             }
             else{
              this.reserves.bottlesB1 = [];
              this.reserves.bottlesB2 = [];
              var res2 = await this.client.readHoldingRegisters(this.correspondancesRegistres.co2ResActive.adr,16)

              //40151
              this.reserves.co2ResActive = this.client.registerToUint32([res2[0]]);

              //40157 40158              
              this.reserves.co2Res1ActVol =  Math.round((this.client.registerToFloat([res2[6],res2[7]])* 0.001974) * 100) / 100 ;
              
              
              //40165 40166
              this.reserves.co2Res2ActVol = Math.round((this.client.registerToFloat([res2[14],res2[15]])* 0.001974) * 100) / 100 ;

                   
              //40376 40450
              var res3 = await this.client.readHoldingRegisters(this.correspondancesRegistres.upcStatus.adr,75)

              //40376
              this.general.upcStatus = res3[0]
              
                
              //40381
              this.reserves.co2Res1Status = this.client.registerToUint32([res3[5]]);

              //40383
              this.reserves.co2Res2Status = this.client.registerToUint32([res3[6]]);

              //40421 40422 
              this.reserves.co2Res1StartVol = Math.round((this.client.registerToFloat([res3[45],res3[46]])* 0.001974) * 100) / 100;

              //40449 40450  Math.round((this.client.registerToFloat([res[87],res[88]])* 0.001974) * 100) / 100
              this.reserves.co2Res2StartVol = Math.round((this.client.registerToFloat([res3[73],res3[74]])* 0.001974) * 100) / 100;
              var res4 = await this.client.readHoldingRegisters(this.correspondancesRegistres.xCo2Res1CodesBarres.adr,90)
              //alert("all bar codes registers : "+res4) 

              //41124 41128
              var tabB11 = [];
              for(var i =0; i<5;i++){
                tabB11.push(res4[i]);
              }              
              this.reserves.bottlesB1.push(this.client.registerToString(tabB11));
              //41129 41133
              var tabB12 = [];
              for (var i = 5;i<10;i++){
                tabB12.push(res4[i]);
              }
              this.reserves.bottlesB1.push(this.client.registerToString(tabB12));
              //41134 41138
              var tabB13 = [];
              for (var i = 10;i<15;i++){
                tabB13.push(res4[i]);
              }
              this.reserves.bottlesB1.push(this.client.registerToString(tabB13));
              //41139 41143
              var tabB14 = [];
              for (var i = 15;i<20;i++){
                tabB14.push(res4[i]);
              }             
              this.reserves.bottlesB1.push(this.client.registerToString(tabB14));
              //41144 41148
              var tabB15 = [];
              for (var i = 20;i<25;i++){
                tabB15.push(res4[i]);
              }
              this.reserves.bottlesB1.push(this.client.registerToString(tabB15));
              //41149 41153
              var tabB16 = [];
              for(var i = 25;i<30;i++){
                tabB16.push(res4[i]);
              }
              this.reserves.bottlesB1.push(this.client.registerToString(tabB16));
              //41154 41158
              var tabB17 = [];
              for (var i = 30;i<35;i++){
                tabB17.push(res4[i]);
              }
              this.reserves.bottlesB1.push(this.client.registerToString(tabB17));
              //41159 41163
              var tabB18 = [];
              for(var i = 35;i<40;i++){
                tabB18.push(res4[i]);
              }
              this.reserves.bottlesB1.push(this.client.registerToString(tabB18));
              //41164 41168
              var tabB19 = [];
              for(var i = 40;i<45;i++){
                tabB19.push(res4[i]);
              }
              this.reserves.bottlesB1.push(this.client.registerToString(tabB19));
              //41169 41173
              var tabB21 = [];
              for(var i = 45;i<50;i++){
                tabB21.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB21));
              
              //41174 41178
              var tabB22 = [];
              for(var i = 50;i<55;i++){
                tabB22.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB22));
              //41179 41183
              var tabB23 = [];
              for(var i = 55;i<60;i++){
                tabB23.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB23));
              //41184 41188
              var tabB24 = [];
              for(var i=60;i<65;i++){
                tabB24.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB24));
              //41189 41193
              var tabB25 = [];
              for(var i = 65;i<70;i++){
                tabB25.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB25));
              //41194 41198
              var tabB26 = [];
              for(var i = 70;i<75;i++){
                tabB26.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB26));
              //41199 41203
              var tabB27 = [];
              for(var i = 75;i<80;i++){
                tabB27.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB27));
              
              //41204 41208
              var tabB28 = [];
              for(var i = 80;i<85;i++){
                tabB28.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB28));
              //41209 41213
              var tabB29 = [];
              for(var i = 85;i<90;i++){
                tabB29.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB29));

              this.success = true

              break;  
            }
          }
          else{ //on est en mode test

            this.reserves.bottlesB1 = [];
              this.reserves.bottlesB2 = [];
            var res2 = await this.client.readHoldingRegisters(this.correspondancesRegistres.co2ResActive.adr,16)

            //40151
            this.reserves.co2ResActive = this.client.registerToUint32([res2[0]]);

            //40157 40158
            this.reserves.co2Res1ActVol =  Math.round((this.client.registerToFloat([res2[6],res2[7]])* 0.001974) * 100) / 100 ;
            
            //40165 40166
            this.reserves.co2Res2ActVol = Math.round((this.client.registerToFloat([res2[14],res2[15]])* 0.001974) * 100) / 100 ;
            
            //40376 40450
            var res3 = await this.client.readHoldingRegisters(this.correspondancesRegistres.upcStatus.adr,75)

            //40376
            this.general.upcStatus = res3[0]
          
            
            //40381
            this.reserves.co2Res1Status = this.client.registerToUint32([res3[5]]);

            //40383
            this.reserves.co2Res2Status = this.client.registerToUint32([res3[6]]);

            //40421 40422 
            this.reserves.co2Res1StartVol = Math.round((this.client.registerToFloat([res3[45],res3[46]])* 0.001974) * 100) / 100;

            //40449 40450  Math.round((this.client.registerToFloat([res[87],res[88]])* 0.001974) * 100) / 100
            this.reserves.co2Res2StartVol = Math.round((this.client.registerToFloat([res3[73],res3[74]])* 0.001974) * 100) / 100;
            
            var res4 = await this.client.readHoldingRegisters(this.correspondancesRegistres.xCo2Res1CodesBarres.adr,90)

            
              //41124 41128
              var tabB11 = [];
              for(var i =0; i<5;i++){
                tabB11.push(res4[i]);
              }
              this.reserves.bottlesB1.push(this.client.registerToString(tabB11));
              //41129 41133
              var tabB12 = [];
              for (var i = 5;i<10;i++){
                tabB12.push(res4[i]);
              }
              this.reserves.bottlesB1.push(this.client.registerToString(tabB12));
              //41134 41138
              var tabB13 = [];
              for (var i = 10;i<15;i++){
                tabB13.push(res4[i]);
              }
              this.reserves.bottlesB1.push(this.client.registerToString(tabB13));
              //41139 41143
              var tabB14 = [];
              for (var i = 15;i<20;i++){
                tabB14.push(res4[i]);
              }
              this.reserves.bottlesB1.push(this.client.registerToString(tabB14));
              //41144 41148
              var tabB15 = [];
              for (var i = 20;i<25;i++){
                tabB15.push(res4[i]);
              }
              this.reserves.bottlesB1.push(this.client.registerToString(tabB15));
              //41149 41153
              var tabB16 = [];
              for(var i = 25;i<30;i++){
                tabB16.push(res4[i]);
              }
              this.reserves.bottlesB1.push(this.client.registerToString(tabB16));
              //41154 41158
              var tabB17 = [];
              for (var i = 30;i<35;i++){
                tabB17.push(res4[i]);
              }
              this.reserves.bottlesB1.push(this.client.registerToString(tabB17));
              //41159 41163
              var tabB18 = [];
              for(var i = 35;i<40;i++){
                tabB18.push(res4[i]);
              }
              this.reserves.bottlesB1.push(this.client.registerToString(tabB18));
              //41164 41168
              var tabB19 = [];
              for(var i = 40;i<45;i++){
                tabB19.push(res4[i]);
              }
              this.reserves.bottlesB1.push(this.client.registerToString(tabB19));
              //41169 41173
              var tabB21 = [];
              for(var i = 45;i<50;i++){
                tabB21.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB21));
              
              //41174 41178
              var tabB22 = [];
              for(var i = 50;i<55;i++){
                tabB22.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB22));
              //41179 41183
              var tabB23 = [];
              for(var i = 55;i<60;i++){
                tabB23.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB23));
              //41184 41188
              var tabB24 = [];
              for(var i=60;i<65;i++){
                tabB24.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB24));
              //41189 41193
              var tabB25 = [];
              for(var i = 65;i<70;i++){
                tabB25.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB25));
              //41194 41198
              var tabB26 = [];
              for(var i = 70;i<75;i++){
                tabB26.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB26));
              //41199 41203
              var tabB27 = [];
              for(var i = 75;i<80;i++){
                tabB27.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB27));
              
              //41204 41208
              var tabB28 = [];
              for(var i = 80;i<85;i++){
                tabB28.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB28));
              //41209 41213
              var tabB29 = [];
              for(var i = 85;i<90;i++){
                tabB29.push(res4[i]);
              }
              this.reserves.bottlesB2.push(this.client.registerToString(tabB29));

            this.success = true

            break; 
          
            
          }   
          
        }
        catch(err){
          this.success = false
          error = err

          break;
        } 

      case "alarmparam":
        
          try{
          
            //40001 40015
            var res1 = await this.client.readHoldingRegisters(this.correspondancesRegistres.upcNameId.adr,66)
           
            //alert("res1 : "+res1)
            //40001 40010                
            var tabname = [];
            for(var i = 0;i<10;i++){
              tabname.push(res1[i]);
            } 
            var nameId = this.client.registerToString(tabname).replace(/[^a-zA-Z0-9]/g,'');
  
            if(mode != "modeTest"){ //on n'est pas en mode test   
  
              if(nameId != upcNameId && false ){ //changement d'UPC
                
  
                if(window.confirm("Une intervention est en cours sur l'upc "+upcNameId+". Voulez-vous néanmoins continuer sur l'upc "+nameId+"?")) {            
                  if (window.confirm("Voulez-vous terminer l'intervention ? (OK) ou l'abandonner ? (Annuler)")) {              
                    return {success: true, object:"Terminer l'intervention en cours"};                                       
                  }
                  else{

                    this.alarm.alrResLowEn = this.client.registerToUint32(res1[65])
                    console.log("65 ::> "+res1[65])
                    console.log("64 ::"+res1[64])
                    console.log("66 ::"+res1[64])

                    var res = await this.readAlarmParameters()  
                    this.success = true;                                
      
                    break; 
                  }                                  
                }
                else{
                  alert("Rapprochez-vous de l'upc "+upcNameId+" puis appuyez sur 'OK'.")
                  return {success: true, object:"Se rapprocher de l'upc"};
                }                
              }
              else{
                
                this.nameId = nameId;
  
                this.alarm.alrResLowEn =res1[65]
  
                var res = await this.readAlarmParameters()  
                this.success = true;    
                
  
                break; 
  
                
              }
            }
            else{
              
              this.nameId = nameId;
  
              this.alarm.alrResLowEn = this.client.registerToUint32(res1[65])              
  
              var res = await this.readAlarmParameters()  
              this.success = true;   
  
              break; 
            }
  
          }
          catch(err){
            this.success = false
            error = err
  
            break;
          } 
    } 
    //alert(this.success)
    if(this.success == true){
      return true;
    } 
    else{
      return error;
    }
  }
  async readInterventionCeintureParameters(){
    return new Promise(async (resolve, reject)=>{  
      //40168
      var res2 = await this.client.readHoldingRegisters(this.correspondancesRegistres.upcFwVer.adr,1)
      
      //40168
      this.general.upcFwVer = this.client.registerToUint32([res2[0]]);
      
      //40401 40449 
      var res3 = await this.client.readHoldingRegisters(this.correspondancesRegistres.comMdmMode.adr,2)

      this.communicationParameters.comMdmMode = this.client.registerToUint32([res3[0]]);

      this.communicationParameters.comGsmLevel = this.client.registerToUint32([res3[1]]);

      resolve("true");
    })
  }

  async readGeneralParameters(){
    return new Promise(async (resolve, reject)=>{  
      
      //40168
      var res2 = await this.client.readHoldingRegisters(this.correspondancesRegistres.upcFwVer.adr,1)
     
      //40168      
      this.general.upcFwVer = this.client.registerToUint32([res2[0]]);

      //40401 40449 
      var res3 = await this.client.readHoldingRegisters(this.correspondancesRegistres.upcTimeZone.adr,48)
      
      //40401 40402
      this.general.upcTimeZone = this.client.registerToUint32([res3[0],res3[1]]);

      //40441 40449 48 56
      var tabuuid = "";
      for(var i = 0;i<8;i++){        
        tabuuid += this.hexaToDecimal(res3[i])
      }
      this.general.upcMcuUid = tabuuid;

      resolve("true");
    })
    
  }

  readAlarmParameters(){
    return new Promise(async (resolve, reject)=>{ 
      
      //40169 40294
      var res2 = await this.client.readHoldingRegisters(this.correspondancesRegistres.alrResEmptyEn.adr,126)
      console.log("regitres ===========================================")
      console.log(res2)

      //40169
      this.alarm.alrResEmptyEn = res2[0]

      //40170
      this.alarm.alrPresInpEn = res2[1]

      //40171
      this.alarm.alrPresOutEn= res2[2]

      //40172
      this.alarm.alrFlowAvgEn = res2[3]

      //40173
      this.alarm.alrPowDownEn = res2[4]

      //40174
      this.alarm.alrPowBackEn = res2[5]
      

      //40225
      this.alarm.alrResEmptyFlow = this.client.registerToFloat([res2[56],res2[57]])

      //40227
      this.alarm.alrResLowLevel = this.client.registerToFloat([res2[58],res2[59]])

      //40269
      this.alarm.alrPresInpTol = this.client.registerToFloat([res2[100],res2[101]])
      
     //40291
      this.alarm.alrPresOutTol = this.client.registerToFloat([res2[122],res2[123]])

      //40293
      this.alarm.alrFlowSetTol = this.client.registerToFloat([res2[124],res2[125]])


      console.log( "this.alarm.alrFlowSetTol  => "+this.alarm.alrFlowSetTol)
      

      resolve("true");
     
    })
  }

  hexaToDecimal(hexa){     
    var decimal = parseInt(hexa,16);

    return decimal;    
  }

  decimalToHexa(decimal){
    var hexa = (decimal-0).toString(16)

    return hexa;
  }

  async readDiffusionParams(){
    return new Promise(async (resolve, reject)=>{  
      
    })
  }

  async readAllRegOld(upcNameId:string, mode:string, page:string) {  
    
    var repBloc1 = await this.readBloc1(upcNameId, mode)
    if(repBloc1.success == true){      
        return true;
        if(repBloc1.object == "Terminer l'intervention en cours"){
          return "Terminer l'intervention en cours"
        }
        else{
          if(repBloc1.object == "Abandonner l'intervention en cours"){
            return "Abandonner l'intervention en cours"
          }
          else{
            if(repBloc1.object == "Se rapprocher de l'upc"){
              return "Se rapprocher de l'upc"
            }
            else{              
              var repBloc2 = await this.readBloc2()
              if(repBloc2.success == true){                
                var repBloc3 = await this.readBloc3()
                if(repBloc3.success == true){                  
                  var repBloc4 = await this.readBloc4()
                  if(repBloc4.success == true){                    
                    var repBloc5 = await this.readBloc5()
                    if(repBloc5.success == true){                      
                      var repBloc6 = await this.readBloc6()
                      if(repBloc6.success == true){
                        return true;
                      }
                      else{
                        return repBloc6; //retourne l'erreur du bloc 6
                      }
                    }
                    else{
                      return repBloc5; //retourne l'erreur du bloc 5
                    }
                  }
                  else{
                    return repBloc4; //retourne l'erreur du bloc 4
                  }
                }
                else{
                  return repBloc3; //retourne l'erreur du bloc 3
                }
              }
              else{
                return repBloc2; //retourne l'erreur du bloc 2
              }      
            }
          }
        }
               
    }
    else{ 
      return repBloc1; //retourne l'erreur du bloc 1
    }
    
        
      
    
      
      
      
     



 
      
     
      
      
      
      /*this.client.readHoldingRegisters(40600,120).then(res=>{
        //0 to 99 sms not necessary
        //100 to 120 not necessary
      }).catch(err=>{
        alert(JSON.stringify(err));
      })*/
      /*this.client.readHoldingRegisters(40720,120).then(res=>{
        //0 to 19 not necessary
        //20 to 39 not necessary
        //40 to 69 not necessary
        //70 to 99 not necessary
        //100 to 119 nothing 
        // 120 not necessary
      }).catch(err=>{
        alert(JSON.stringify(err));
      })*/
      /*this.client.readHoldingRegisters(40840,120).then(res=>{
        // 0 to 29 not necessary
  
        alert(JSON.stringify(res));
      }).catch(err=>{
        alert(JSON.stringify(err));
      })*/
      /*this.client.readHoldingRegisters(40961,120).then(res=>{
        alert(JSON.stringify(res));
  
      }).catch(err=>{
        alert(JSON.stringify(err));
      })*/
      /*this.client.readHoldingRegisters(41081,120).then(res=>{
        alert(JSON.stringify(res));
      }).catch(err=>{
        alert(JSON.stringify(err));
      })*/
      

      //if(bool1 && bool2 && bool3 && bool4 && bool5 && bool6 ){
        //var itm = await this.readAllReg();
      
      //}
      
      
  
    
  }

  onConfirm(buttonIndex) {
    if(buttonIndex == 0){
      this.answer = 0;
    }
    if(buttonIndex==1){
      this.answer = 1;
    }
    if(buttonIndex==2){
      this.answer = 2;
    }
    if(buttonIndex==3){
      this.answer = 3;
    }
    
}

  async readBloc1(upcNameId, mode){
    const opt = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric',
    minute: 'numeric',
    dayPeriod: 'short' }; 
    try{ 
      var res = await this.client.readHoldingRegisters(40168,1)
      
      //40001 40010
      
      var tabname = [];
      for(var i = 0;i<10;i++){
        tabname.push(res[i]);
      }
      
      var nameId = this.client.registerToString(tabname).replace(/[^a-zA-Z0-9]/g,'');

      if(mode != "modeTest"){ //on n'est pas en mode test   

        if(nameId != upcNameId){ //changement d'UPC
         

          if (window.confirm("Une intervention est en cours sur l'upc "+upcNameId+". Voulez-vous néanmoins continuer sur l'upc "+nameId+"?")) {            
            if (window.confirm("Voulez-vous terminer l'intervention ? (OK) ou l'abandonner ? (Annuler)")) {              
              return {success: true, object:"Terminer l'intervention en cours"};                                       
            }
            else{
              return {success: true, object:"Abandonner l'intervention en cours"};
            }                                  
          }
          else{
            alert("Rapprochez-vous de l'upc "+upcNameId+" puis appuyez sur 'OK'.")
            return {success: true, object:"Se rapprocher de l'upc"};
          }                
        }
        else{
          this.nameId = nameId;
          //40011
          this.general.upcMode = this.client.registerToUint32(res[10]);
          //40012 40013
                  
          this.general.upcClock = new Date(this.client.registerToUint32([res[11],res[12]])*1000).toLocaleDateString("fr-FR",opt); 
          
          //40014
          this.general.upcLanguage = this.client.registerToUint32(res[13]);
          //40015
          this.general.upcTrapNum = res[14];
          //40016 40017
          this.general.co2FlowRefTrap = this.client.registerToFloat([res[15],res[16]]);
          //40018 40019
          this.general.co2FlowRefAdj = this.client.registerToFloat([res[17],res[18]]);
          //40020 40021
          this.general.co2FlowRefNom = this.client.registerToFloat([res[19],res[20]]);
          //40022 40023
          this.communicationParameters.comGsmIpAdr = this.int2ip(this.client.registerToUint32([res[21],res[22]]));
          //40024 40033
          var tabMdmName = [];
          for (var i = 23;i<33;i++){
          tabMdmName.push(res[i]);
          }
          this.communicationParameters.comMdmName = this.client.registerToString(tabMdmName)
          //40034 40043
          var tabMdmPass = [];
          for(var i =33;i<43;i++){
            tabMdmPass.push(res[i]);
          }
          this.communicationParameters.comGsmPass = this.client.registerToString(tabMdmPass)
      
          //43 ne pas lire 40044
          //40045 40053
          var tabssid = [];
          for (var i =44;i<54;i++){
            tabssid.push(res[i]);
          }
          this.communicationParameters.comGsmName = this.client.registerToString(tabssid)
          //40055 40064
          var tabpassword = [];
          for(var i = 54;i<64;i++){
            tabpassword.push(res[i]);
          }
          this.communicationParameters.comWiFiPass = this.client.registerToString(tabpassword).replace(/[^a-zA-Z0-9-.-]/g,'');
          //40065
          this.diffusions.upcDiffLvlAdj = res[64];
          //40066
          this.alarm.alrResLowEn = res[65] == 1;

          //66 à ne pas lire 40067
          //40068 40069
          this.diffHourSunrise = this.client.registerToUint32([res[67],res[68]]);
          //40070 40071
          this.diffHourSunset = this.client.registerToUint32([res[69],res[70]]);
      
          //40072 40073
          this.diffCo2Program[0].start = this.client.registerToUint32([res[71],res[72]]);
          //40074 40075
          this.diffCo2Program[0].stop = this.client.registerToUint32([res[73],res[74]]);
          //40076
          this.diffCo2Program[0].mode = this.client.registerToUint32([res[75]]);
          //40077
          this.diffCo2Program[0].intensity = this.client.registerToUint32([res[76]]);
      
          //40078 40079
          this.diffCo2Program[1].start = this.client.registerToUint32([res[77],res[78]]);
          //40080 40081
          this.diffCo2Program[1].stop = this.client.registerToUint32([res[79],res[80]]);
          // 40082
          this.diffCo2Program[1].mode = this.client.registerToUint32([res[81]]);
          //40083
          this.diffCo2Program[1].intensity = this.client.registerToUint32([res[82]]);
      
          //40084 40085
          this.diffCo2Program[2].start = this.client.registerToUint32([res[83],res[84]]);
          //40086 40087
          this.diffCo2Program[2].stop = this.client.registerToUint32([res[85],res[86]]);
          //40088
          this.diffCo2Program[2].mode = this.client.registerToUint32([res[87]]);
          //40089
          this.diffCo2Program[2].intensity = this.client.registerToUint32([res[88]]);
      
          //40090 40091
          this.diffCo2Program[3].start = this.client.registerToUint32([res[89],res[90]]);
          //40092 40093
          this.diffCo2Program[3].stop = this.client.registerToUint32([res[91],res[92]]);
          //40094 
          this.diffCo2Program[3].mode = this.client.registerToUint32([res[93]]);
          //40095
          this.diffCo2Program[3].intensity = this.client.registerToUint32(res[94]);
      
          //40096 40097
          this.diffCo2Program[4].start = this.client.registerToUint32([res[95],res[96]]);
          //40098 40099
          this.diffCo2Program[4].stop = this.client.registerToUint32([res[97],res[98]]);
          //40100
          this.diffCo2Program[4].mode = this.client.registerToUint32([res[99]]);
          //40101
          this.diffCo2Program[4].intensity = this.client.registerToUint32(res[100]);
      
          //40102 40103
          this.diffCo2Program[5].start = this.client.registerToUint32([res[101],res[102]]);
          //40104 40105
          this.diffCo2Program[5].stop = this.client.registerToUint32([res[103],res[104]]);
          //40106
          this.diffCo2Program[5].mode = this.client.registerToUint32([res[105]]);
          //40107
          this.diffCo2Program[5].intensity = this.client.registerToUint32([res[106]]);
      
          //40108 40109
          this.diffCo2Program[6].start = this.client.registerToUint32([res[107],res[108]]);
          //40110 40111
          this.diffCo2Program[6].stop = this.client.registerToUint32([res[109],res[110]]);
          //40112 
          this.diffCo2Program[6].mode = this.client.registerToUint32([res[111]]);
          //40113
          this.diffCo2Program[6].intensity = this.client.registerToUint32([res[112]]);
      
          //40114 40115
          this.diffCo2Program[7].start = this.client.registerToUint32([res[113],res[114]]);
          //40116 40117
          this.diffCo2Program[7].stop = this.client.registerToUint32([res[115],res[116]]);
          //40118 
          this.diffCo2Program[7].mode = this.client.registerToUint32([res[117]]);
          //40119
          this.diffCo2Program[7].intensity = this.client.registerToUint32([res[118]]);
      
          //40120 40121
          this.diffCo2Program[8].start = this.client.registerToUint32([res[119],res[120]]);

          return {success:true,object:res};       
          
        }
      }
      else{ //on est en mode test
        this.nameId = nameId;
        //40011
        this.general.upcMode = this.client.registerToUint32(res[10]);
        //40012 40013
        this.general.upcClock = new Date(this.client.registerToUint32([res[11],res[12]])*1000).toLocaleDateString("fr-FR",opt);
        //40014
        this.general.upcLanguage = this.client.registerToUint32(res[13]);
        //40015
        this.general.upcTrapNum = res[14];
        //40016 40017
        this.general.co2FlowRefTrap = this.client.registerToFloat([res[15],res[16]]);
        //40018 40019
        this.general.co2FlowRefAdj = this.client.registerToFloat([res[17],res[18]]);
        //40020 40021
        this.general.co2FlowRefNom = this.client.registerToFloat([res[19],res[20]]);
        //40022 40023
        this.communicationParameters.comGsmIpAdr = this.int2ip(this.client.registerToUint32([res[21],res[22]]));
        //40024 40033
        var tabMdmName = [];
        for (var i = 23;i<33;i++){
        tabMdmName.push(res[i]);
        }
        this.communicationParameters.comMdmName = this.client.registerToString(tabMdmName);
        //40034 40043
        var tabMdmPass = [];
        for(var i =33;i<43;i++){
          tabMdmPass.push(res[i]);
        }
        this.communicationParameters.comGsmPass = this.client.registerToString(tabMdmPass);
    
        //43 ne pas lire 40044
        //40045 40053
        var tabssid = [];
        for (var i =44;i<54;i++){
          tabssid.push(res[i]);
        }
        this.communicationParameters.comGsmName = this.client.registerToString(tabssid);
        //40055 40064
        var tabpassword = [];
        for(var i = 54;i<64;i++){
          tabpassword.push(res[i]);
        }
        this.communicationParameters.comWiFiPass = this.client.registerToString(tabpassword);
        //40065
        this.diffusions.upcDiffLvlAdj = res[64];
        //40066
        this.alarm.alrResLowEn = res[65] == 1;

        //66 à ne pas lire 40067
        //40068 40069
        this.diffHourSunrise = this.client.registerToUint32([res[67],res[68]]);
        //40070 40071
        this.diffHourSunset = this.client.registerToUint32([res[69],res[70]]);
    
        //40072 40073
        this.diffCo2Program[0].start = this.client.registerToUint32([res[71],res[72]]);
        //40074 40075
        this.diffCo2Program[0].stop = this.client.registerToUint32([res[73],res[74]]);
        //40076
        this.diffCo2Program[0].mode = this.client.registerToUint32([res[75]]);
        //40077
        this.diffCo2Program[0].intensity = this.client.registerToUint32([res[76]]);
    
        //40078 40079
        this.diffCo2Program[1].start = this.client.registerToUint32([res[77],res[78]]);
        //40080 40081
        this.diffCo2Program[1].stop = this.client.registerToUint32([res[79],res[80]]);
        // 40082
        this.diffCo2Program[1].mode = this.client.registerToUint32([res[81]]);
        //40083
        this.diffCo2Program[1].intensity = this.client.registerToUint32([res[82]]);
    
        //40084 40085
        this.diffCo2Program[2].start = this.client.registerToUint32([res[83],res[84]]);
        //40086 40087
        this.diffCo2Program[2].stop = this.client.registerToUint32([res[85],res[86]]);
        //40088
        this.diffCo2Program[2].mode = this.client.registerToUint32([res[87]]);
        //40089
        this.diffCo2Program[2].intensity = this.client.registerToUint32([res[88]]);
    
        //40090 40091
        this.diffCo2Program[3].start = this.client.registerToUint32([res[89],res[90]]);
        //40092 40093
        this.diffCo2Program[3].stop = this.client.registerToUint32([res[91],res[92]]);
        //40094 
        this.diffCo2Program[3].mode = this.client.registerToUint32([res[93]]);
        //40095
        this.diffCo2Program[3].intensity = this.client.registerToUint32(res[94]);
    
        //40096 40097
        this.diffCo2Program[4].start = this.client.registerToUint32([res[95],res[96]]);
        //40098 40099
        this.diffCo2Program[4].stop = this.client.registerToUint32([res[97],res[98]]);
        //40100
        this.diffCo2Program[4].mode = this.client.registerToUint32([res[99]]);
        //40101
        this.diffCo2Program[4].intensity = this.client.registerToUint32(res[100]);
    
        //40102 40103
        this.diffCo2Program[5].start = this.client.registerToUint32([res[101],res[102]]);
        //40104 40105
        this.diffCo2Program[5].stop = this.client.registerToUint32([res[103],res[104]]);
        //40106
        this.diffCo2Program[5].mode = this.client.registerToUint32([res[105]]);
        //40107
        this.diffCo2Program[5].intensity = this.client.registerToUint32([res[106]]);
    
        //40108 40109
        this.diffCo2Program[6].start = this.client.registerToUint32([res[107],res[108]]);
        //40110 40111
        this.diffCo2Program[6].stop = this.client.registerToUint32([res[109],res[110]]);
        //40112 
        this.diffCo2Program[6].mode = this.client.registerToUint32([res[111]]);
        //40113
        this.diffCo2Program[6].intensity = this.client.registerToUint32([res[112]]);
    
        //40114 40115
        this.diffCo2Program[7].start = this.client.registerToUint32([res[113],res[114]]);
        //40116 40117
        this.diffCo2Program[7].stop = this.client.registerToUint32([res[115],res[116]]);
        //40118 
        this.diffCo2Program[7].mode = this.client.registerToUint32([res[117]]);
        //40119
        this.diffCo2Program[7].intensity = this.client.registerToUint32([res[118]]);
    
        //40120 40121
        this.diffCo2Program[8].start = this.client.registerToUint32([res[119],res[120]]);
        

        var d = new Date()
        var t = d.getTime()

        return {success:true,object:res,bloc:1, time: t};       
        
      
      }
    }catch(err){
      return {success:false,object:err,bloc:1};
    } 
  }

  async readBloc2(){
    var res = await this.client.readHoldingRegisters(40122,120)
    try{
      //40122 40123
      this.diffCo2Program[8].stop = this.client.registerToUint32([res[0],res[1]]);
      //40124 
      this.diffCo2Program[8].mode = this.client.registerToUint32([res[2]]);
      //40125
      this.diffCo2Program[8].intensity = this.client.registerToUint32([res[3]]);

      //40126 40127
      this.diffCo2Program[9].start = this.client.registerToUint32([res[4],res[5]]);
      //40128 40129
      this.diffCo2Program[9].stop = this.client.registerToUint32([res[6],res[7]]);
      //40130
      this.diffCo2Program[9].mode = this.client.registerToUint32([res[8]]);
      //40131
      this.diffCo2Program[9].intensity = this.client.registerToUint32(res[9]);

      //40132 40133
      this.diffCo2Sunrise.offset = this.client.registerToUint32([res[10],res[11]]);
      //40134 40135
      this.diffCo2Sunrise.duration = this.client.registerToUint32([res[12],res[13]]);
      //40137
      this.diffCo2Sunrise.intensity = this.client.registerToUint32([res[15]]);

      //40138 40139
      this.diffCo2Sunset.offset = this.client.registerToUint32([res[16],res[17]]);
      //40140 40141
      this.diffCo2Sunset.duration = this.client.registerToUint32([res[18],res[19]]);
      //40143
      this.diffCo2Sunset.intensity = this.client.registerToUint32([res[21]]);

      //40144 40145
      this.diffusions.diffCo2Instant.delay = this.client.registerToUint32([res[22],res[23]]);
      //40146 40147
      this.diffusions.diffCo2Instant.duration = this.client.registerToUint32([res[24],res[25]]);
      //40149
      this.diffusions.diffCo2Instant.intensity = this.client.registerToUint32([res[27]]);
      
      //40150
      this.reserves.co2ResActAdj = this.client.registerToUint32([res[28]]);
      //40151
      this.reserves.co2ResActive = this.client.registerToUint32([res[29]]);

      //30 Non utilisé 40152
      
      //40153 40154
      this.reserves.co2Res1FillVol = this.client.registerToFloat([res[31],res[32]]);
      //40155 40156
      this.reserves.co2Res1FillTime = this.client.registerToUint32([res[33],res[34]]);
      //40157 40158
      this.reserves.co2Res1ActVol =  Math.round((this.client.registerToFloat([res[35],res[36]])* 0.001974) * 100) / 100 ;
      //40159
      this.reserves.co2Res1ActDur = this.client.registerToUint32([res[37]]);
      //40160 libre 38

      //40161 40162
      this.reserves.co2Res2FillVol = this.client.registerToFloat([res[39],res[40]]);
      //40163 40164
      this.reserves.co2Res2FillTime = this.client.registerToUint32([res[41],res[42]]);
      //40165 40166
      this.reserves.co2Res2ActVol = Math.round((this.client.registerToFloat([res[43],res[44]])* 0.001974) * 100) / 100 ;
      //40167
      this.reserves.co2Res2ActDur = this.client.registerToUint32([res[45]]);

      //40168
      this.general.upcFwVer = this.client.registerToUint32([res[46]]);
      
      //40169
      this.alarm.alrResEmptyEn = res[47] == 1;
      //40170
      this.alarm.alrPresInpEn = res[48] == 1;
      //40171
      this.alarm.alrPresOutEn = res[49] == 1;
      //40172
      this.alarm.alrFlowAvgEn = res[50] == 1;
      //40173
      this.alarm.alrPowDownEn = res[51] == 1;
      //40174
      this.alarm.alrPowBackEn = res[52] == 1;

      // 53-102 SMS non necessaire 40175 40224

      //40225 40226
      this.alarm.alrResEmptyFlow = this.client.registerToFloat([res[103],res[104]]);
      //40227 40228
      this.alarm.alrResLowLevel = this.client.registerToFloat([res[105],res[106]]);
      
      //40229 40230
      this.alarm.alrPressInpSet1_1 = this.client.registerToFloat([res[107],res[108]]);
      //40231 40232
      this.alarm.alrPressInpSet1_2 = this.client.registerToFloat([res[109],res[110]]);
      //40233 40234
      this.alarm.alrPressInpSet1_3 = this.client.registerToFloat([res[111],res[112]]);
      //40235 40236
      this.alarm.alrPressInpSet1_4 = this.client.registerToFloat([res[113],res[114]]);
      //40237 40238
      this.alarm.alrPressInpSet1_5 = this.client.registerToFloat([res[115],res[116]]);
      //40239 40240
      this.alarm.alrPressInpSet1_6 = this.client.registerToFloat([res[117],res[118]]);

      return {success: true, object: res,bloc:2}
    }catch(err){  
      return {success: false, object: err,bloc:2}
    }
    
  }

  async readBloc3(){
    try{
      var res = await this.client.readHoldingRegisters(40241,120)
      //40241 40242
      this.alarm.alrPressInpSet1_7 = this.client.registerToFloat([res[0],res[1]]);
      //40243 40244
      this.alarm.alrPressInpSet1_8 = this.client.registerToFloat([res[2],res[3]]);
      //40245 40246
      this.alarm.alrPressInpSet1_9 = this.client.registerToFloat([res[4],res[5]]);
      //40247 40248
      this.alarm.alrPressInpSet1_10 = this.client.registerToFloat([res[6],res[7]]);

      //40249 40250
      this.alarm.alrPressInpSet2_1 = this.client.registerToFloat([res[8],res[9]]);
      //40251 40252
      this.alarm.alrPressInpSet2_2 = this.client.registerToFloat([res[10],res[11]]);
      //40253 40254
      this.alarm.alrPressInpSet2_3 = this.client.registerToFloat([res[12],res[13]]);
      //40255 40256
      this.alarm.alrPressInpSet2_4 = this.client.registerToFloat([res[14],res[15]]);
      //40257 40258
      this.alarm.alrPressInpSet2_5 = this.client.registerToFloat([res[16],res[17]]);
      //40259 40260
      this.alarm.alrPressInpSet2_6 = this.client.registerToFloat([res[18],res[19]]);
      //40261 40262
      this.alarm.alrPressInpSet2_7 = this.client.registerToFloat([res[20],res[21]]);
      //40263 40264
      this.alarm.alrPressInpSet2_8 = this.client.registerToFloat([res[22],res[23]]);
      //40265 40266
      this.alarm.alrPressInpSet2_9 = this.client.registerToFloat([res[24],res[25]]);
      //40267 40268
      this.alarm.alrPressInpSet2_10 = this.client.registerToFloat([res[26],res[27]]);

      //40269 40270
      this.alarm.alrPresInpTol = this.client.registerToFloat([res[28],res[29]]);

      //40271 40272
      this.general.co2PresOutRef1 = this.client.registerToFloat([res[30],res[31]]);
      //40273 40274
      this.general.co2PresOutRef2 = this.client.registerToFloat([res[32],res[33]]);
      //40275 40276
      this.general.co2PresOutRef3 = this.client.registerToFloat([res[34],res[35]]);
      //40277 40278
      this.general.co2PresOutRef4 = this.client.registerToFloat([res[36],res[37]]);
      //40279 40280
      this.general.co2PresOutRef5 = this.client.registerToFloat([res[38],res[39]]);
      //40281 40282
      this.general.co2PresOutRef6 = this.client.registerToFloat([res[40],res[41]]);
      //40283 40284
      this.general.co2PresOutRef7 = this.client.registerToFloat([res[42],res[43]]);
      //40285 40286
      this.general.co2PresOutRef8 = this.client.registerToFloat([res[44],res[45]]);
      //40287 40288
      this.general.co2PresOutRef9 = this.client.registerToFloat([res[46],res[47]]);
      //40289 40290
      this.general.co2PresOutRef10 = this.client.registerToFloat([res[48],res[49]]);

      //40291 40292
      this.alarm.alrPresOutTol = this.client.registerToFloat([res[50],res[51]]);

      //40293 40294
      this.alarm.alrFlowSetTol = this.client.registerToFloat([res[52],res[53]]);

      //40295 40310
      var taburl = [];
      for(var i =54;i<69;i++){
        taburl.push(res[i]);
      }
      this.communicationParameters.comWebSrvUrl = this.client.registerToString(taburl).replace(/[^a-zA-Z0-9-.-]/g,'');

      //40320
      var tabapnuser = [];
      for (var i = 79;i<89;i++){
        tabapnuser.push(res[i]);
      }
      this.communicationParameters.comMdmApnUser = this.client.registerToString(tabapnuser).replace(/[^a-zA-Z0-9]/g,'');

      //40330 40339
      var tabapnpass = [];
      for(var i = 89;i<99;i++){
        tabapnpass.push(res[i]);
      }
      this.communicationParameters.comMdmApnPass = this.client.registerToString(tabapnpass).replace(/[^a-zA-Z0-9]/g,'');

      //40340 
      this.communicationParameters.comWifiApCh = this.client.registerToUint32([res[99]])

      //40341 Non utilisé 100

      //40342 40346
      var tabResBottles = [];
      for(var i = 101;i<106;i++){
        tabResBottles.push(res[i]);
      }
      this.reserves.co2Res1Bottle = this.client.registerToUint32(tabResBottles);

      //40347 40348
      this.reserves.co2Res1AuxVol = this.client.registerToFloat([res[106],res[107]]);

      //40349 40353
      var tabResBottles2 = [];
      for(var i = 107;i<112;i++){
        tabResBottles2.push(res[i]);
      }
      this.reserves.co2Res2Bottle = this.client.registerToUint32(tabResBottles2);

      //40354 40355
      this.reserves.co2Res2AuxVol = this.client.registerToFloat([res[112],res[113]]);

      //40356 40357
      this.alarm.alrPressOutSet_1 = this.client.registerToFloat([res[114],res[115]]);
      //40358 40359
      this.alarm.alrPressOutSet_2 = this.client.registerToFloat([res[116],res[117]]);
      //40360 40361
      this.alarm.alrPressOutSet_3 = this.client.registerToFloat([res[118],res[119]]);

      return {success: true, object: res,bloc:3};


    }catch(err){      
      return {success: false, object: err,bloc:3};
    }
  }

  async readBloc4(){
    try{
      var res = await this.client.readHoldingRegisters(40362,105)
        //40362 40263
        this.alarm.alrPressOutSet_4 = this.client.registerToFloat([res[0],res[1]]);
        //40364 402365
        this.alarm.alrPressOutSet_5 = this.client.registerToFloat([res[2],res[3]]);
        //40366 40367
        this.alarm.alrPressOutSet_6 = this.client.registerToFloat([res[4],res[5]]);
        //40368 40369
        this.alarm.alrPressOutSet_7 = this.client.registerToFloat([res[6],res[7]]);
        //40370 40371
        this.alarm.alrPressOutSet_8 = this.client.registerToFloat([res[8],res[9]]);
        //40372 40373
        this.alarm.alrPressOutSet_9 = this.client.registerToFloat([res[10],res[11]]);
        //40374 40375
        this.alarm.alrPressOutSet_10 = this.client.registerToFloat([res[12],res[13]]);
  
        //40376
        this.general.upcStatus = this.client.registerToUint32([res[14]]);
        //40377 40378
        this.general.upcCo2PidInteg = this.client.registerToFloat([res[15],res[16]]);
        //40379 40380
        this.general.upcCo2PidDiff = this.client.registerToFloat([res[17],res[18]]);
        
        //40381
        this.reserves.co2Res1Status = this.client.registerToUint32([res[19]]);
        //40382
        this.reserves.co2ResType = this.client.registerToUint32([res[20]]);
        //40383
        this.reserves.co2Res2Status = this.client.registerToUint32([res[21]]);
        //40384 40385
        this.reserves.co2Res1FillNew = this.client.registerToFloat([res[22],res[23]]);
        //40386 40387
        this.reserves.co2Res2FillNew = this.client.registerToFloat([res[24],res[25]]);
  
        //40388 40389
        this.alarm.alrResEmptyTest = this.client.registerToUint32([res[26],res[27]]);
  
        //40390 40391
        this.diffusions.co2FlowGain = this.client.registerToFloat([res[28],res[29]]);
  
        //40392 40400 non alloué 30 38
  
        //40401 40402
        this.general.upcTimeZone = this.client.registerToUint32([res[39],res[40]]);
  
        //40403 40414 event 40 51
        
        //40414
        this.communicationParameters.comMdmMode = this.client.registerToUint32([res[52]]);
        //40415
        this.communicationParameters.comGsmLevel = this.client.registerToUint32([res[53]]);
        //40416
        this.diffusions.upcCo2DiffLvl = this.client.registerToUint32([res[54]]);
        
        //40417 40418
        this.reserves.co2ResActPrev = this.client.registerToUint32([res[55],res[56]]);
        //40419 40420
        this.reserves.co2ResInactPrev = this.client.registerToUint32([res[57],res[58]]);
        //40421 40422 
        this.reserves.co2Res1StartVol = Math.round((this.client.registerToFloat([res[59],res[60]])* 0.001974) * 100) / 100;
        
        //40423 40424
        this.general.upcBattChrg = this.client.registerToFloat([res[61],res[62]]);
        //40425 40426
        this.general.upcBattTemp = this.client.registerToFloat([res[63],res[64]]);
  
        //40427 40428
        this.diffusions.co2PresInpMeas1 = this.client.registerToFloat([res[65],res[66]]);
        //40429 40430
        this.diffusions.co2PresInpMeas2 = this.client.registerToFloat([res[67],res[68]]);
        //40431 40432
        this.diffusions.co2PresOutMeas = this.client.registerToFloat([res[69],res[70]]);
        //40433 40434
        this.diffusions.co2FlowMeas = this.client.registerToFloat([res[71],res[72]]);
        //40435 40436
        this.diffusions.co2PresInpAvg = this.client.registerToFloat([res[73],res[74]]);
        //40437 40438
        this.diffusions.co2PresOutAvg = this.client.registerToFloat([res[75],res[76]]);
        //40439 40440
        this.diffusions.co2FlowAvg = this.client.registerToFloat([res[77],res[78]]);
  
        //40441 40449 79 87
        var tabuuid = "";
        for(var i = 79;i<87;i++){
          tabuuid += this.toZero4(res[i])
        }
        this.general.upcMcuUid = tabuuid;
  
        //40449 40450  Math.round((this.client.registerToFloat([res[87],res[88]])* 0.001974) * 100) / 100
        this.reserves.co2Res2StartVol = Math.round((this.client.registerToFloat([res[87],res[88]])* 0.001974) * 100) / 100;
        
        //40451 40452
        this.diffusions.co2TempAvg = this.client.registerToFloat([res[89],res[90]]);
  
        //40453 40454
        this.general.upcCo2PidProp = this.client.registerToFloat([res[91],res[92]]);
  
        //40455 40456
        this.diffusions.co2PressInpOffs = this.client.registerToFloat([res[93],res[94]]);
        //40457 40458
        this.diffusions.co2PressOutOffs = this.client.registerToFloat([res[95],res[96]]);
        //40459 40460
        this.diffusions.co2FlowOffs = this.client.registerToFloat([res[97],res[98]]);
        //40461 40462
        this.general.co2PressOutTemp = this.client.registerToFloat([res[99],res[100]]);
        //40463 40464
        this.diffusions.co2PressOutComp = this.client.registerToFloat([res[101],res[102]]);
  
        //40465 40466
        this.alarm.alrPressSetTemp = this.client.registerToFloat([res[103],res[104]]);
        
        return {success: true, object: res,bloc:4};

    }catch(err){
      return {success: false, object: err,bloc:4};
    }
  }

  async readBloc5(){
    try{
      var res = await this.client.readHoldingRegisters(40467,120)
        //40467 40517 0 50 
        var tabapn2 = [];
        for(var i =0;i<50;i++){
          tabapn2.push(res[i]);
        }
        this.communicationParameters.comMdmApnId2 = this.client.registerToString(tabapn2).replace(/[^a-zA-Z0-9]/g,'');
        
        return {success: true, object:res,bloc:5};        
      
    }catch(err){
      return {success: false, object: err,bloc:5};
    }
  }

  async readBloc6(){
    try{
      var res = await this.client.readHoldingRegisters(41124,120)
        //41124 41128
        var tabB11 = [];
        for(var i =0; i<5;i++){
           tabB11.push(res[i]);
        }
        this.reserves.bottlesB1.push(this.client.registerToString(tabB11));
        //41129 41133
        var tabB12 = [];
        for (var i = 5;i<10;i++){
          tabB12.push(res[i]);
        }
        this.reserves.bottlesB1.push(this.client.registerToString(tabB12));
        //41134 41138
        var tabB13 = [];
        for (var i = 10;i<15;i++){
          tabB13.push(res[i]);
        }
        this.reserves.bottlesB1.push(this.client.registerToString(tabB13));
        //41139 41143
        var tabB14 = [];
        for (var i = 15;i<20;i++){
          tabB14.push(res[i]);
        }
        this.reserves.bottlesB1.push(this.client.registerToString(tabB14));
        //41144 41148
        var tabB15 = [];
        for (var i = 20;i<25;i++){
          tabB15.push(res[i]);
        }
        this.reserves.bottlesB1.push(this.client.registerToString(tabB15));
        //41149 41153
        var tabB16 = [];
        for(var i = 25;i<30;i++){
          tabB16.push(res[i]);
        }
        this.reserves.bottlesB1.push(this.client.registerToString(tabB16));
        //41154 41158
        var tabB17 = [];
        for (var i = 30;i<35;i++){
          tabB17.push(res[i]);
        }
        this.reserves.bottlesB1.push(this.client.registerToString(tabB17));
        //41159 41163
        var tabB18 = [];
        for(var i = 35;i<40;i++){
          tabB18.push(res[i]);
        }
        this.reserves.bottlesB1.push(this.client.registerToString(tabB18));
        //41164 41168
        var tabB19 = [];
        for(var i = 40;i<45;i++){
          tabB19.push(res[i]);
        }
        this.reserves.bottlesB1.push(this.client.registerToString(tabB19));
        //41169 41173
        var tabB21 = [];
        for(var i = 45;i<50;i++){
          tabB21.push(res[i]);
        }
        this.reserves.bottlesB2.push(this.client.registerToString(tabB21));
        
        //41174 41178
        var tabB22 = [];
        for(var i = 50;i<55;i++){
          tabB22.push(res[i]);
        }
        this.reserves.bottlesB2.push(this.client.registerToString(tabB22));
        //41179 41183
        var tabB23 = [];
        for(var i = 55;i<60;i++){
          tabB23.push(res[i]);
        }
        this.reserves.bottlesB2.push(this.client.registerToString(tabB23));
        //41184 41188
        var tabB24 = [];
        for(var i=60;i<65;i++){
          tabB24.push(res[i]);
        }
        this.reserves.bottlesB2.push(this.client.registerToString(tabB24));
        //41189 41193
        var tabB25 = [];
        for(var i = 65;i<70;i++){
          tabB25.push(res[i]);
        }
        this.reserves.bottlesB2.push(this.client.registerToString(tabB25));
        //41194 41198
        var tabB26 = [];
        for(var i = 70;i<75;i++){
          tabB26.push(res[i]);
        }
        this.reserves.bottlesB2.push(this.client.registerToString(tabB26));
        //41199 41203
        var tabB27 = [];
        for(var i = 75;i<80;i++){
          tabB27.push(res[i]);
        }
        this.reserves.bottlesB2.push(this.client.registerToString(tabB27));
        
        //41204 41208
        var tabB28 = [];
        for(var i = 80;i<85;i++){
          tabB28.push(res[i]);
        }
        this.reserves.bottlesB2.push(this.client.registerToString(tabB28));
        //41209 41213
        var tabB29 = [];
        for(var i = 85;i<90;i++){
          tabB29.push(res[i]);
        }
        this.reserves.bottlesB2.push(this.client.registerToString(tabB29));
 
        //41214 41219 90 95
        //41219
       this.communicationParameters.xComMdmRssuMoyen2G = this.client.registerToFloat([res[95],res[96]]);
       //41221
       this.communicationParameters.xComMdmRssuMoyen3G = this.client.registerToFloat([res[97],res[98]]);
       //41223
       this.communicationParameters.xComMdmRssuMoyen4G = this.client.registerToFloat([res[99],res[100]]);
 
        //41225
        this.communicationParameters.xComMdmQualMoyen2GGPRS = this.client.registerToFloat([res[101],res[102]]);
        //41227
        this.communicationParameters.xComMdmQualMoyen2GEDGE = this.client.registerToFloat([res[103],res[104]]);
        //41229
        this.communicationParameters.xComMdmQualMoyen3G = this.client.registerToFloat([res[105],res[106]]);
        //41231
        this.communicationParameters.xComMdmQualMoyen4G = this.client.registerToFloat([res[107],res[108]]);
        
        //41233
        this.communicationParameters.xComMdmRatioTimeIn2G = this.client.registerToFloat([res[109],res[110]]);
        //41235
        this.communicationParameters.xComMdmRatioTimeIn3G = this.client.registerToFloat([res[111],res[112]]);
        //41237
        this.communicationParameters.xComMdmRatioTimeIn4G = this.client.registerToFloat([res[113],res[114]]);
        //41239
        this.communicationParameters.xComMdmRatioTimeOffline = this.client.registerToFloat([res[115],res[116]]);
        

        return {success: true, object:res,bloc:6};
    
    }catch(err){
      return {success: false, object: err,bloc:6};
    }
  }

  readGeneralParametersOld() {
      
      this.client.getIntFromHoldingRegister(40015,1).then(res=>{
          alert(res);
          this.general.upcTrapNum = res;
      });
      this.client.getStringFromHoldingRegister(40441,8).then(res=>{
        //alert(res);
        this.general.upcMcuUid = res;
      });
      this.client.getFloatFromHoldingRegister(40016).then(res=>{
        //alert(res);
        this.general.co2FlowRefTrap = res;
      });
      this.client.getFloatFromHoldingRegister(40020).then(res=>{
        //alert(res)
        this.general.co2FlowRefNom = res;
      })
      this.client.getFloatFromHoldingRegister(40271).then(res=>{
        //alert(res);
        this.general.co2PresOutRef1 = res;
      })
      this.client.getFloatFromHoldingRegister(40273).then(res=>{
        //alert(res);
        this.general.co2PresOutRef2 = res;
      })
      this.client.getFloatFromHoldingRegister(40275).then(res=>{
        //alert(res);
        this.general.co2PresOutRef3 = res;
      })
      this.client.getFloatFromHoldingRegister(40277).then(res=>{
        //alert(res);
        this.general.co2PresOutRef4 = res;
      })
      this.client.getFloatFromHoldingRegister(40279).then(res=>{
        //alert(res);
        this.general.co2PresOutRef5 = res;
      })
      this.client.getFloatFromHoldingRegister(40281).then(res=>{
        //alert(res);
        this.general.co2PresOutRef6 = res;
      })
      this.client.getFloatFromHoldingRegister(40283).then(res=>{
        //alert(res);
        this.general.co2PresOutRef7 = res;
      })
      this.client.getFloatFromHoldingRegister(40285).then(res=>{
        //alert(res);
        this.general.co2PresOutRef8 = res;
      })
      this.client.getFloatFromHoldingRegister(40287).then(res=>{
        //alert(res);
        this.general.co2PresOutRef9 = res;
      })
      this.client.getFloatFromHoldingRegister(40289).then(res=>{
        //alert(res);
        this.general.co2PresOutRef10 = res;
      })
      this.client.getFloatFromHoldingRegister(40461).then(res=>{
        //alert(res);
        this.general.co2PressOutTemp = res;
      })
      this.client.getIntFromHoldingRegister(40401,2).then(res=>{
        //alert(res);
        this.general.upcTimeZone = res;
      })
      this.client.getIntFromHoldingRegister(40376,1).then(res=>{
        //alert(res);
        this.general.upcStatus = res;
      })
      this.client.getIntFromHoldingRegister(40011,1).then(res=>{
        //alert(res);
        this.general.upcMode = res;
      })
      this.client.getIntFromHoldingRegister(40168,1).then(res=>{
        //alert(res);
        this.general.upcFwVer = res;
      })
      this.general.co2FlowRefAdj
      this.client.getIntFromHoldingRegister(40012,2).then(res=>{
        //alert(res);
        this.general.upcClock = res;
      })
      this.client.getFloatFromHoldingRegister(40018).then(res=>{
        //alert(res);
        this.general.co2FlowRefAdj = res;
      })

  }
  init() {
    // Init Client
    
    this.client = new ModbusClient(32000, false);
    this.client.on('reconnecting', function () {
      this.state = UPCState.RECONNECTING;
     
      this.stateChangeCallback(this.state);
    }.bind(this));
    this.client.on('offline', function () {
      this.state = UPCState.OFFLINE;
      
      this.stateChangeCallback(this.state);
    }.bind(this));
    this.client.on('online', function () {
      this.state = UPCState.ONLINE;
      
      this.stateChangeCallback(this.state);
    }.bind(this));
    this.client.on('error', function () {
      this.state = UPCState.ERROR;
     
      this.stateChangeCallback(this.state);
    }.bind(this));
    //this.client.createSocket().then(res=>{
      /*setTimeout(()=>{
        this.client.setHost(this.host);
        this.client.setPort(this.port);
        this.client.connect();
        //this.client.reconnect();
      },1000)*/
      
      //this.client.reconnect();
    //})
    
    //setTimeout(()=>{
      
    //},1000)
    
  }
  
  
  disconnect() {
    // Modbus client
    this.client.disconnect();
  }
  
  reconnect() {
    // Modbus client
    this.client.disconnect();
    this.init();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



  /**
   * Methods
   */
  async flashFW(file: string, loading: LoadingController) {
    var lines: string[] = file.split('\n');
    for (var i = 0; i < lines.length; i++) {

      // Write line
      var l = lines[i].trim() + '\0';
      var length = l.length;
      if (length % 2 != 0) {
        l = l + '\0';
        length++;
      }
      await this.client.setStringInHoldingRegister(41000, l);

      const load = await loading.create({
        duration: 2000,
        message : 'Updating firmware : ' + (i / lines.length * 100).toFixed(1) + ' %'
      })
      await load.present();
    }
  }
  async editTrapNum(nbpieges : number,value : number) {
      await this.client.setIntInHoldingRegister(40015,1,this.client.getIntFromHoldingRegister(nbpieges,1)).then(data=>{
        alert(JSON.stringify(data));
      }).catch(err=>{
        alert(JSON.stringify(err));
      });
      await this.client.setFloatInHoldingRegister(40018,this.client.getFloatFromHoldingRegister(value)).then(data=>{
        alert(JSON.stringify(data));
      }).catch(err=>{
        alert(JSON.stringify(err));
      });;
      await this.client.setFloatInHoldingRegister(40020,this.client.getFloatFromHoldingRegister(value)).then(data=>{
        alert(JSON.stringify(data));
      }).catch(err=>{
        alert(JSON.stringify(err));
      });
      await this.client.setFloatInHoldingRegister(40016,0.17).then(data=>{
        alert(JSON.stringify(data));
      }).catch(err=>{
        alert(JSON.stringify(err));
      });
  }

  getAllVars(): any {
    // TODO
    return Promise.all(
      [

        // General parameters
        this.client.getStringFromHoldingRegister(40441, 8),   // TODO: upcMcuUid
        this.client.getIntFromHoldingRegister(40168, 1),      // upcFwVer
        this.client.getStringFromHoldingRegister(40001, 10),  // upcNameId
        this.client.getIntFromHoldingRegister(40011, 1),      // upcMode
        this.client.getIntFromHoldingRegister(40376, 1),      // upcStatus
        this.client.getIntFromHoldingRegister(40012, 2),      // upcClock
        this.client.getIntFromHoldingRegister(40401, 2),      // upcTimeZone
        this.client.getIntFromHoldingRegister(40014, 1),      // upcLanguage
        this.client.getIntFromHoldingRegister(40044, 1),      // upcEventNum
        this.client.getIntFromHoldingRegister(40015, 1),      // upcTrapNum
        this.client.getFloatFromHoldingRegister(40016),       // co2FlowRefTrap
        this.client.getFloatFromHoldingRegister(40020),       // co2FlowRefNom
        this.client.getFloatFromHoldingRegister(40018),       // co2FlowRefAdj
        this.client.getFloatFromHoldingRegister(40271),       // co2PressOutRef_1
        this.client.getFloatFromHoldingRegister(40273),       // co2PressOutRef_2
        this.client.getFloatFromHoldingRegister(40275),       // co2PressOutRef_3
        this.client.getFloatFromHoldingRegister(40277),       // co2PressOutRef_4
        this.client.getFloatFromHoldingRegister(40279),       // co2PressOutRef_5
        this.client.getFloatFromHoldingRegister(40281),       // co2PressOutRef_6
        this.client.getFloatFromHoldingRegister(40283),       // co2PressOutRef_7
        this.client.getFloatFromHoldingRegister(40285),       // co2PressOutRef_8
        this.client.getFloatFromHoldingRegister(40287),       // co2PressOutRef_9
        this.client.getFloatFromHoldingRegister(40289),       // co2PressOutRef_10
        this.client.getFloatFromHoldingRegister(40461),       // co2PressOutTemp

        // Comunication
        this.client.getStringFromHoldingRegister(40024, 10),  // comMdmName
        this.client.getStringFromHoldingRegister(40034, 10),  // comMdmPass
        this.client.getIntFromHoldingRegister(40022, 2),      // comMdmIpAdr
        this.client.getIntFromHoldingRegister(40414, 1),      // comMdmMode
        this.client.getIntFromHoldingRegister(40415, 1),      // comMdmLevel
        this.client.getStringFromHoldingRegister(40045, 10),  // comWifiSsid
        this.client.getStringFromHoldingRegister(40055, 10),  // comWifiPass
        this.client.getIntFromHoldingRegister(40340, 1),      // comWifiApCh

        // CO2 diffusion
        this.client.getIntFromHoldingRegister(40068, 2),            // diffHourSunRise
        this.client.getIntFromHoldingRegister(40070, 2),            // diffHourSunSet
        this.client.getDiffusionProgramFromHoldingRegister(40072),  // diffCo2Program_1
        this.client.getDiffusionProgramFromHoldingRegister(40078),  // diffCo2Program_2
        this.client.getDiffusionProgramFromHoldingRegister(40084),  // diffCo2Program_3
        this.client.getDiffusionProgramFromHoldingRegister(40090),  // diffCo2Program_4
        this.client.getDiffusionProgramFromHoldingRegister(40096),  // diffCo2Program_5
        this.client.getDiffusionProgramFromHoldingRegister(40102),  // diffCo2Program_6
        this.client.getDiffusionProgramFromHoldingRegister(40108),  // diffCo2Program_7
        this.client.getDiffusionProgramFromHoldingRegister(40114),  // diffCo2Program_8
        this.client.getDiffusionProgramFromHoldingRegister(40120),  // diffCo2Program_9
        this.client.getDiffusionProgramFromHoldingRegister(40126),  // diffCo2Program_10
        this.client.getDiffusionSunFromHoldingRegister(40132),      // diffCo2Sunrise
        this.client.getDiffusionSunFromHoldingRegister(40138),      // diffCo2Sunset
        this.client.getFloatFromHoldingRegister(40427),             // co2PressInpMeas1
        this.client.getFloatFromHoldingRegister(40429),             // co2PressInpMeas2
        this.client.getFloatFromHoldingRegister(40431),             // co2PressOutMeas
        this.client.getFloatFromHoldingRegister(40433),             // co2FlowMeas
        this.client.getFloatFromHoldingRegister(40435),             // co2PressInpAvg
        this.client.getFloatFromHoldingRegister(40455),             // co2PressInpOffs
        this.client.getFloatFromHoldingRegister(40437),             // co2PressOutAvg
        this.client.getFloatFromHoldingRegister(40457),             // co2PressoutOffs
        this.client.getFloatFromHoldingRegister(40463),             // co2PressOutComp
        this.client.getFloatFromHoldingRegister(40439),             // co2FlowAvg
        this.client.getFloatFromHoldingRegister(40459),             // co2FlowOffs
        this.client.getFloatFromHoldingRegister(40390),             // co2FlowGain
        this.client.getIntFromHoldingRegister(40416, 1),            // upcCo2DiffLvl
        this.client.getIntFromHoldingRegister(40065, 1),            // upcDiffLvlAdj
        this.client.getFloatFromHoldingRegister(40451),             // co2TempAvg

        // CO2 reserves
        this.client.getIntFromHoldingRegister(40151, 1),  // co2ResActive
        this.client.getIntFromHoldingRegister(40150, 1),  // co2ResActAdj
        this.client.getIntFromHoldingRegister(40417, 2),  // co2ResActPrev
        this.client.getIntFromHoldingRegister(40419, 2),  // co2ResInactPrev
        this.client.getIntFromHoldingRegister(40382, 1),  // co2ResType
        this.client.getIntFromHoldingRegister(40381, 1),  // co2Res1Status
        this.client.getFloatFromHoldingRegister(40384),   // co2Res1FillNew
        this.client.getFloatFromHoldingRegister(40153),   // co2Res1FillVol
        this.client.getIntFromHoldingRegister(40155, 2),  // co2Res1FillTime
        this.client.getFloatFromHoldingRegister(40157),   // co2Res1ActVol
        this.client.getIntFromHoldingRegister(40159, 1),  // co2Res1ActDur
        this.client.getFloatFromHoldingRegister(40421),   // co2Res1StartVol
        this.client.getFloatFromHoldingRegister(40347),   // co2Res1AuxVol
        this.client.getIntFromHoldingRegister(40383, 1),  // co2Res2Status
        this.client.getFloatFromHoldingRegister(40386),   // co2Res2FillNew
        this.client.getFloatFromHoldingRegister(40161),   // co2Res2FillVol
        this.client.getIntFromHoldingRegister(40163, 2),  // co2Res2FillTime
        this.client.getFloatFromHoldingRegister(40165),   // co2Res2ActVol
        this.client.getIntFromHoldingRegister(40167, 1),  // co2Res2ActDur
        this.client.getFloatFromHoldingRegister(40449),   // co2Res2StartVol
        this.client.getFloatFromHoldingRegister(40354),   // co2Res2AuxVol

        // Alarms setup
        this.client.getIntFromHoldingRegister(40388, 2),      // alrResEmptyTest
        this.client.getIntFromHoldingRegister(40066, 1),      // alrResLowEn
        this.client.getIntFromHoldingRegister(40169, 1),      // alrResEmptyEn
        this.client.getIntFromHoldingRegister(40170, 1),      // alrPressInpEn
        this.client.getIntFromHoldingRegister(40171, 1),      // alrPressOutEn
        this.client.getIntFromHoldingRegister(40172, 1),      // alrFlowAvgEn
        this.client.getIntFromHoldingRegister(40173, 1),      // alrPowDownEn
        this.client.getIntFromHoldingRegister(40174, 1),      // alrPowBackEn
        this.client.getStringFromHoldingRegister(40175, 10),  // alrSmsNum_1
        this.client.getStringFromHoldingRegister(40185, 10),  // alrSmsNum_2
        this.client.getStringFromHoldingRegister(40195, 10),  // alrSmsNum_3
        this.client.getStringFromHoldingRegister(40205, 10),  // alrSmsNum_4
        this.client.getStringFromHoldingRegister(40215, 10),  // alrSmsNum_5
        this.client.getFloatFromHoldingRegister(40227),       // alrResLowLevel
        this.client.getFloatFromHoldingRegister(40225),       // alrResEmptyFlow
        this.client.getFloatFromHoldingRegister(40269),       // alrPressInpTol
        this.client.getFloatFromHoldingRegister(40291),       // alrPressOutTol
        this.client.getFloatFromHoldingRegister(40293),       // alrFlowSetTol
        this.client.getFloatFromHoldingRegister(40229),       // alrPressInpSet1_1
        this.client.getFloatFromHoldingRegister(40231),       // alrPressInpSet1_2
        this.client.getFloatFromHoldingRegister(40233),       // alrPressInpSet1_3
        this.client.getFloatFromHoldingRegister(40235),       // alrPressInpSet1_4
        this.client.getFloatFromHoldingRegister(40237),       // alrPressInpSet1_5
        this.client.getFloatFromHoldingRegister(40239),       // alrPressInpSet1_6
        this.client.getFloatFromHoldingRegister(40241),       // alrPressInpSet1_7
        this.client.getFloatFromHoldingRegister(40243),       // alrPressInpSet1_8
        this.client.getFloatFromHoldingRegister(40245),       // alrPressInpSet1_9
        this.client.getFloatFromHoldingRegister(40247),       // alrPressInpSet1_10
        this.client.getFloatFromHoldingRegister(40249),       // alrPressInpSet2_1
        this.client.getFloatFromHoldingRegister(40251),       // alrPressInpSet2_2
        this.client.getFloatFromHoldingRegister(40253),       // alrPressInpSet2_3
        this.client.getFloatFromHoldingRegister(40255),       // alrPressInpSet2_4
        this.client.getFloatFromHoldingRegister(40257),       // alrPressInpSet2_5
        this.client.getFloatFromHoldingRegister(40259),       // alrPressInpSet2_6
        this.client.getFloatFromHoldingRegister(40261),       // alrPressInpSet2_7
        this.client.getFloatFromHoldingRegister(40263),       // alrPressInpSet2_8
        this.client.getFloatFromHoldingRegister(40265),       // alrPressInpSet2_9
        this.client.getFloatFromHoldingRegister(40267),       // alrPressInpSet2_10
        this.client.getFloatFromHoldingRegister(40356),       // alrPressOutSet_1
        this.client.getFloatFromHoldingRegister(40358),       // alrPressOutSet_2
        this.client.getFloatFromHoldingRegister(40360),       // alrPressOutSet_3
        this.client.getFloatFromHoldingRegister(40362),       // alrPressOutSet_4
        this.client.getFloatFromHoldingRegister(40364),       // alrPressOutSet_5
        this.client.getFloatFromHoldingRegister(40366),       // alrPressOutSet_6
        this.client.getFloatFromHoldingRegister(40368),       // alrPressOutSet_7
        this.client.getFloatFromHoldingRegister(40370),       // alrPressOutSet_8
        this.client.getFloatFromHoldingRegister(40372),       // alrPressOutSet_9
        this.client.getFloatFromHoldingRegister(40374),       // alrPressOutSet_10
        this.client.getFloatFromHoldingRegister(40465),       // alrPressSetTemp

        // Auxiliary parameters
        this.client.getStringFromHoldingRegister(40295, 15),  // comWebSrvUrl
        this.client.getStringFromHoldingRegister(40310, 10),  // comMdmApnId
        this.client.getStringFromHoldingRegister(40320, 10),  // comMdmApnUser
        this.client.getStringFromHoldingRegister(40330, 10),  // comMdmApnPass
        this.client.getFloatFromHoldingRegister(40453),       // upcCo2PidProp
        this.client.getFloatFromHoldingRegister(40377),       // upcCo2PidInteg
        this.client.getFloatFromHoldingRegister(40379),       // upcCo2PidDiff
        this.client.getFloatFromHoldingRegister(40423),       // upcBattChrg
        this.client.getFloatFromHoldingRegister(40425)        // upcBattTemp

      ]
    ).then(results => {
      return {

        // General parameters
        general: {
          upcMcuUid: results[0], upcFwVer: results[1], upcNameId: results[2], upcMode: results[3], upcStatus: results[4], upcClock: results[5], upcTimeZone: results[6],
          upcLanguage: results[7], upcEventNum: results[8], upcTrapNum: results[9], co2FlowRefTrap: results[10], co2FlowRefNom: results[11], co2FlowRefAdj: results[12],
          co2PressOutRef: [ results[13], results[14], results[15], results[16], results[17], results[18], results[19], results[20], results[21], results[22] ],
          co2PressOutTemp: results[23]
        },

        // Comunication
        comunication: {
          comMdmName: results[24], comMdmPass: results[25], comMdmIpAdr: results[26], comMdmMode: results[27],
          comMdmLevel: results[28], comWifiSsid: results[29], comWifiPass: results[30], comWifiApCh: results[31]
        },

        // CO2 diffusion
        co2Diffusion: {
          diffHourSunRise: results[32], diffHourSunSet: results[33],
          diffCo2Program: [ results[34], results[35], results[36], results[37], results[38], results[39], results[40], results[41], results[42], results[43] ],
          diffCo2Sunrise: results[44], diffCo2Sunset: results[45], co2PressInpMeas1: results[46], co2PressInpMeas2: results[47], co2PressOutMeas: results[48],
          co2FlowMeas: results[49], co2PressInpAvg: results[50], co2PressInpOffs: results[51], co2PressOutAvg: results[52], co2PressoutOffs: results[53],
          co2PressOutComp: results[54], co2FlowAvg: results[55], co2FlowOffs: results[56], co2FlowGain: results[57], upcCo2DiffLvl: results[58],
          upcDiffLvlAdj: results[59], co2TempAvg: results[60]
        },

        // CO2 reserves
        co2Reserves: {
          co2ResActive: results[61], co2ResActAdj: results[62], co2ResActPrev: results[63], co2ResInactPrev: results[64], co2ResType: results[65],
          co2Res1Status: results[66], co2Res1FillNew: results[67], co2Res1FillVol: results[68], co2Res1FillTime: results[69], co2Res1ActVol: results[70],
          co2Res1ActDur: results[71], co2Res1StartVol: results[72], co2Res1AuxVol: results[73], co2Res2Status: results[74], co2Res2FillNew: results[75],
          co2Res2FillVol: results[76], co2Res2FillTime: results[77], co2Res2ActVol: results[78], co2Res2ActDur: results[79], co2Res2StartVol: results[80],
          co2Res2AuxVol: results[81]
        },

        // Alarms setup
        alarms: {
          alrResEmptyTest: results[82], alrResLowEn: results[83], alrResEmptyEn: results[84], alrPressInpEn: results[85], alrPressOutEn: results[86], alrFlowAvgEn: results[87],
          alrPowDownEn: results[88], alrPowBackEn: results[89], alrSmsNum: [ results[90], results[91], results[92], results[93], results[94] ], alrResLowLevel: results[95],
          alrResEmptyFlow: results[96], alrPressInpTol: results[97], alrPressOutTol: results[98], alrFlowSetTol: results[99],
          alrPressInpSet1: [ results[100], results[101], results[102], results[103], results[104], results[105], results[106], results[107], results[108], results[109] ],
          alrPressInpSet2: [ results[110], results[111], results[112], results[113], results[114], results[115], results[116], results[117], results[118], results[119] ],
          alrPressOutSet: [ results[120], results[121], results[122], results[123], results[124], results[125], results[126], results[127], results[128], results[129] ],
          alrPressSetTemp: results[130]
        },

        // Auxiliary parameters
        auxiliary: {
          comWebSrvUrl: results[131], comMdmApnId: results[132], comMdmApnUser: results[133], comMdmApnPass: results[134], upcCo2PidProp: results[135],
          upcCo2PidInteg: results[136],upcCo2PidDiff: results[137],upcBattChrg: results[138], upcBattTemp: results[139]
        }

      };
    });
  }
  
  reset() {
    return Promise.all([ this.client.setIntInHoldingRegister(40011, 1, 0xffff) ]);
  }
  wipe() {
    return Promise.all([ this.client.setIntInHoldingRegister(40011, 1, 0xeeee) ]);
  }
}

export enum UPCState {
  RECONNECTING  = 0,
  ONLINE        = 1,
  OFFLINE       = 2,
  ERROR         = 3,
  NULL          = 4
}
