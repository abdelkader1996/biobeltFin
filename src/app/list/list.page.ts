import { Component, OnInit, NgZone } from '@angular/core';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Platform } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { GlobalService } from '../api/global.service';
declare var WifiWizard2: any;

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  upc : UPCModbus;
  pieges = 0;
  uuid = "";
  name = "";
  upcMode = "";
  upcStatus = "";
  date : Date = new Date();
  interval;
  isBBAM = false;
  
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private platform : Platform, private ngZone : NgZone, private network : Network,private global : GlobalService) {
    this.platform.ready().then(()=>{
      if(this.platform.is('ios')){
        WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(res=>{
          this.isBBAM = true;
          this.platform.ready().then(
            readySource => {
              if (readySource == 'cordova') {
                
                this.upc = new UPCModbus(state => {
                  this.ngZone.run(() => {
                    // Force refresh UI
                    
                      
                      //this.readDiffusionParameters();
                    
                  });
                });
                
                this.network.onConnect().subscribe(() => {
                  
                  if (this.network.type === this.network.Connection.WIFI) {
                    this.upc.reconnect();
                   
                    
                  }
                });
              }
            }
          );
        }).catch(err=>{
          alert("La connexion a echoué veuillez vous approcher de l'UPC et réessayer !");
        })
      }
      
    })
    
    
    
  
   
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  ngOnInit() {
   this.interval = setInterval(()=>{
    this.upc.client.connect();
   
    this.readDiffusionParameters();
   },5000)
    
  }
  doRefresh($event) {
    this.interval = setInterval(()=>{
      this.upc.client.connect();
      
      this.readDiffusionParameters();
      $event.target.complete();
     },5000)
  }
  readDiffusionParameters() {
      
      this.upc.client.getIntFromHoldingRegister(40072,2).then(res=>{
        
        this.upc.diffusions.diffCo2Program1.start = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40074,2).then(res=>{
        this.upc.diffusions.diffCo2Program1.end = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40076,1).then(res=>{
        this.upc.diffusions.diffCo2Program1.daysCode = res;

      })
      this.upc.client.getIntFromHoldingRegister(40077,1).then(res=>{
        this.upc.diffusions.diffCo2Program1.intensity = res;
      })
      this.upc.client.getIntFromHoldingRegister(40078,2).then(res=>{
        this.upc.diffusions.diffCo2Program2.start = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40080,2).then(res=>{
        this.upc.diffusions.diffCo2Program2.end = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40082,1).then(res=>{
        this.upc.diffusions.diffCo2Program2.daysCode = res;
      })
      this.upc.client.getIntFromHoldingRegister(40083,1).then(res=>{
        this.upc.diffusions.diffCo2Program2.intensity = res;
      })
      this.upc.client.getIntFromHoldingRegister(40084,2).then(res=>{
        this.upc.diffusions.diffCo2Program3.start = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40086,2).then(res=>{
        this.upc.diffusions.diffCo2Program3.end = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40088,1).then(res=>{
        this.upc.diffusions.diffCo2Program3.daysCode = res;
      })
      this.upc.client.getIntFromHoldingRegister(40089,1).then(res=>{
        this.upc.diffusions.diffCo2Program3.intensity = res;
      })
      this.upc.client.getIntFromHoldingRegister(40090,2).then(res=>{
        this.upc.diffusions.diffCo2Program4.start = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40092,2).then(res=>{
        this.upc.diffusions.diffCo2Program4.end = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40094,1).then(res=>{
        this.upc.diffusions.diffCo2Program4.daysCode = res;
      })
      this.upc.client.getIntFromHoldingRegister(40095,1).then(res=>{
        this.upc.diffusions.diffCo2Program4.intensity = res;
      })
      this.upc.client.getIntFromHoldingRegister(40096,2).then(res=>{
        this.upc.diffusions.diffCo2Program5.start = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40098,2).then(res=>{
        this.upc.diffusions.diffCo2Program5.end = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40100,1).then(res=>{
        this.upc.diffusions.diffCo2Program5.daysCode = res;
      })
      this.upc.client.getIntFromHoldingRegister(40101,1).then(res=>{
        this.upc.diffusions.diffCo2Program5.intensity = res;
      })
      this.upc.client.getIntFromHoldingRegister(40102,2).then(res=>{
        this.upc.diffusions.diffCo2Program6.start = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40104,2).then(res=>{
        this.upc.diffusions.diffCo2Program6.end = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40106,1).then(res=>{
        this.upc.diffusions.diffCo2Program6.daysCode = res;
      })
      this.upc.client.getIntFromHoldingRegister(40107,1).then(res=>{
        this.upc.diffusions.diffCo2Program6.intensity = res;
      })
      this.upc.client.getIntFromHoldingRegister(40108,2).then(res=>{
        this.upc.diffusions.diffCo2Program7.start = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40110,2).then(res=>{
        this.upc.diffusions.diffCo2Program7.end = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40112,1).then(res=>{
        this.upc.diffusions.diffCo2Program7.daysCode = res;
      })
      this.upc.client.getIntFromHoldingRegister(40113,1).then(res=>{
        this.upc.diffusions.diffCo2Program7.intensity = res;
      })
      this.upc.client.getIntFromHoldingRegister(40114,2).then(res=>{
        this.upc.diffusions.diffCo2Program8.start = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40116,2).then(res=>{
        this.upc.diffusions.diffCo2Program8.end = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40118,1).then(res=>{
        this.upc.diffusions.diffCo2Program8.daysCode = res;
      })
      this.upc.client.getIntFromHoldingRegister(40119,1).then(res=>{
        this.upc.diffusions.diffCo2Program8.intensity = res;
      })
      this.upc.client.getIntFromHoldingRegister(40120,2).then(res=>{
        this.upc.diffusions.diffCo2Program9.start = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40122,2).then(res=>{
        this.upc.diffusions.diffCo2Program9.end = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40124,1).then(res=>{
        this.upc.diffusions.diffCo2Program9.daysCode = res;
      })
      this.upc.client.getIntFromHoldingRegister(40125,1).then(res=>{
        this.upc.diffusions.diffCo2Program9.intensity;
      })
      this.upc.client.getIntFromHoldingRegister(40126,2).then(res=>{
        this.upc.diffusions.diffCo2Program10.start = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40128,2).then(res=>{
        this.upc.diffusions.diffCo2Program10.end = this.secondToTimeString(res);
      })
      this.upc.client.getIntFromHoldingRegister(40130,1).then(res=>{
        this.upc.diffusions.diffCo2Program10.daysCode = res;
      })
      this.upc.client.getIntFromHoldingRegister(40131,1).then(res=>{
        this.upc.diffusions.diffCo2Program10.intensity = res;
      })
      

  }
  secondToTimeString(seconds) {
    var date = new Date(0);
    date.setSeconds(seconds); // specify value for SECONDS here
    var timeString = date.toISOString().substr(11, 8);
    return timeString;
  }
  
  async readGeneralParameters() {
    
    this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
        
        this.name = res.replace(/[^a-zA-Z0-9]+/g, "");
    })
    
    
    this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
       
        this.upc.general.upcTrapNum = res;
        this.pieges = res;
    })
    
    this.upc.client.getFloatFromHoldingRegister(40016).then(res=>{
      //alert(res);
      this.upc.general.co2FlowRefTrap = res;
    });
    this.upc.client.getFloatFromHoldingRegister(40020).then(res=>{
      //alert(res)
      this.upc.general.co2FlowRefNom = res;
    })
    this.upc.client.getFloatFromHoldingRegister(40271).then(res=>{
      //alert(res);
      this.upc.general.co2PresOutRef1 = res;
    })
    this.upc.client.getFloatFromHoldingRegister(40273).then(res=>{
      //alert(res);
      this.upc.general.co2PresOutRef2 = res;
    })
    this.upc.client.getFloatFromHoldingRegister(40275).then(res=>{
      //alert(res);
      this.upc.general.co2PresOutRef3 = res;
    })
    this.upc.client.getFloatFromHoldingRegister(40277).then(res=>{
      //alert(res);
      this.upc.general.co2PresOutRef4 = res;
    })
    this.upc.client.getFloatFromHoldingRegister(40279).then(res=>{
      //alert(res);
      this.upc.general.co2PresOutRef5 = res;
    })
    this.upc.client.getFloatFromHoldingRegister(40281).then(res=>{
      //alert(res);
      this.upc.general.co2PresOutRef6 = res;
    })
    this.upc.client.getFloatFromHoldingRegister(40283).then(res=>{
      //alert(res);
      this.upc.general.co2PresOutRef7 = res;
    })
    this.upc.client.getFloatFromHoldingRegister(40285).then(res=>{
      //alert(res);
      this.upc.general.co2PresOutRef8 = res;
    })
    this.upc.client.getFloatFromHoldingRegister(40287).then(res=>{
      //alert(res);
      this.upc.general.co2PresOutRef9 = res;
    })
    this.upc.client.getFloatFromHoldingRegister(40289).then(res=>{
      //alert(res);
      this.upc.general.co2PresOutRef10 = res;
    })
    this.upc.client.getFloatFromHoldingRegister(40461).then(res=>{
      //alert(res);
      this.upc.general.co2PressOutTemp = res;
    })
    this.upc.client.getIntFromHoldingRegister(40401,2).then(res=>{
      //alert(res);
      this.upc.general.upcTimeZone = res;
    })
    //this.upc.client.connect();
    this.upc.client.getIntFromHoldingRegister(40376,1).then(res=>{
      //alert(res);
      this.upc.general.upcStatus = res;
      if (res === 0){
        this.upcStatus = "Diff. Des."
      }
      if (res === 1) {
        this.upcStatus = "Diff. Act.";
      }
      if (res === 2){
        this.upcStatus = "Diff. Adj.";
      }
      if (res === 3){
        this.upcStatus = "Diff. Check.";
      }
      if (res === 4) {
        this.upcStatus = "Offset auto cal."
      }
      if (res === 5) {
        this.upcStatus = "Diff. Check B1 Vide";
      }
      if (res === 6) {
        this.upcStatus = "Diff. Check B2 Vide";
      }
      if(res === 7){
        this.upcStatus = "Diff. Test Réserve Vide";
      }
      if (res === 100 ){
        this.upcStatus = "B1 et B2 vide";
      }
    })
  
    this.upc.client.getIntFromHoldingRegister(40011,1).then(res=>{
      
      this.upc.general.upcMode = res;
      if(res === 4369){
        this.upcMode = "STATE_CLEAR";
      }
      if(res === 0){
        this.upcMode = "DISABLED";
      }
      if(res === 1){
        this.upcMode = "ENABLED";
      }
      if (res === 2) {
        this.upcMode = "ADJUST";
      }
      if(res === 3) {
        this.upcMode = "CHECK"
      }
      if (res=== 4){
        this.upcMode = "AUTO-CAL";
      }
      if (res === 61166){
        this.upcMode = "MEM_WIPE";
      }
      if(res === 65535) {
        this.upcMode = "UPC_RESET";
      }
    })
   
    this.upc.client.getIntFromHoldingRegister(40168,1).then(res=>{
      //alert(res);
      this.upc.general.upcFwVer = res;
    })
    
    this.upc.client.getIntFromHoldingRegister(40012,2).then(res=>{
      this.date = (new Date(res*1000));
      this.upc.general.upcClock = res;
    })
    this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
      //alert(res);
      this.upc.general.co2FlowRefAdj = res;
    })

}
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
