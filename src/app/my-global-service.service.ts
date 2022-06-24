import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { UPCModbus } from './model/upcv3/upcmodbus';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';

declare var WifiWizard2: any;


@Injectable({
  providedIn: 'root'
})
export class MyGlobalServiceService {

  public upcmodbus: UPCModbus;

  //wifi SSID /Paswword
  ssid="BBAM";
  password="BioBeltService";


 
  constructor(
    public platform : Platform, 
   ) { }


   //connecter a l'UPC:
   connectToUPC(){
    if(this.platform.is("android")){
      alert("Platform Android >> essayer de se connecter au wifi")
        WifiWizard2.connect(this.ssid, this.password).then(()=>{   
            alert("Connexion Wifi reussie ") 
             this.onConnectModbus().then(async ()=>{                                    
            }).catch(err=>{ })                                               
           
          }).catch(()=>{alert("Erreur de Connexion WiFi")})
                      
    }  
  }
  async lecture(){
    try{
      //40001 40015
      var res1 = await this.upcmodbus.client.readHoldingRegisters(40001,15)
      
      //40001 40010                
      var tabname = [];
      for(var i = 0;i<10;i++){
        tabname.push(res1[i]);
      } 
      var nameId = this.upcmodbus.client.registerToString(tabname).replace(/[^a-zA-Z0-9]/g,'');

         
        alert(nameId);



    }catch(err){
      
 alert("erreur de lecture")
    }        
  }

//connection modbus 
onConnectModbus(){
  var d = new Date()
  return new Promise<void>(async (resolve, reject)=>{
    if(this.upcmodbus != undefined){
     
      this.upcmodbus.client.close()
      this.upcmodbus = new UPCModbus(state => { 
          let i = setInterval(()=>{
            if (state == 1) {          
              alert("connexion UPC avce succees ")
              clearInterval(i)          
              resolve()
            }              
            
          },50) 
          
          setTimeout(() => {
       
            if(state == 1){   
              alert("connexion UPC avce succees ")              
              clearInterval(i)          
              resolve()
            }
            else{
              clearInterval(i)
              reject()
            }
          
        }, 1000);
        
    
      })   
      
  
   
   
  }
  else{
    this.upcmodbus = new UPCModbus(state => {
     
        var d = new Date()
        let i = setInterval(()=>{
        
          if (state == 1) {          
            alert("connexion UPC avce succees ")
            clearInterval(i)          
            resolve()
          }
          else{
            return
          }
          
        },50)             
        setTimeout(() => {
       
            if(state == 1){     
              alert("connexion UPC avce succees ")            
              clearInterval(i)          
              resolve()
            }
            else{
              clearInterval(i)
              reject()
            }
          
        }, 1000);
      
    })
  }    
})
}












}



