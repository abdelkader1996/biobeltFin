import { Component, OnInit, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';
import {GlobalService} from '../api/global.service';
import {Upcv3serviceService} from '../api/upcv3service.service';
import { UPCV3 } from '../model/upcv3/upcv3';
import {Router} from '@angular/router';
import { Platform } from '@ionic/angular';
import { UPCModbus, UPCState } from '../model/upcv3/upcmodbus';
import { Network } from '@ionic-native/network/ngx';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-instalpieges',
  templateUrl: './instalpieges.page.html',
  styleUrls: ['./instalpieges.page.scss'],
})
export class InstalpiegesPage implements OnInit {
  upc3:UPCV3;
  upc : UPCModbus;
  nbpiege:number;
  token:string;
  UPCModbus : UPCModbus;
  upcStatus : number;
  isBBAM = false;
  constructor(private storage:Storage,
              private global:GlobalService,
              private upcv3service:Upcv3serviceService,
              private router:Router,
              private platform : Platform, private ngZone: NgZone,private network : Network,private hospot : Hotspot) { 

                // Init UPC
    if(this.platform.is("android")){
      this.hospot.connectToWifi("BBAM","BioBeltService").then(res=>{
        this.isBBAM = true;
        this.platform.ready().then(
          readySource => {
            if (readySource == 'cordova') {
              alert("Yes");
              this.upc = new UPCModbus(state => {
                this.ngZone.run(() => {
                  // Force refresh UI
                });
              });
              
              this.network.onConnect().subscribe(() => {
                alert(this.network.type);
                if (this.network.type === this.network.Connection.WIFI) {
                  this.upc.reconnect();
                 
                  
                }
              });
            }
          }
        );
      }).catch(error=>{
        alert(JSON.stringify(error));
      })   
    } else {
      
      this.platform.ready().then(
        readySource => {
          if (readySource == 'cordova') {
            alert("Yes");
            this.upc = new UPCModbus(state => {
              this.ngZone.run(() => {
                // Force refresh UI
                
              });
            });
            setTimeout(()=>{
                this.upc.client.connect();
            },5000)
            setTimeout(()=>{
              
              this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                this.upc3.upcNameId = res;
                alert(res);
              }).catch(error=>{
                alert(JSON.stringify(error));
              })
            },10000);
            setTimeout(()=>{
              this.upc.client.getStringFromHoldingRegister(40015,1).then(res=>{
                this.nbpiege = res;
                alert(res);
              }).catch(error=>{
                alert(JSON.stringify(error));
              })
            },10000)
            
            
            
            this.network.onConnect().subscribe(() => {
              if (this.network.type === this.network.Connection.WIFI) {
                this.upc.reconnect();
                
              }
            });
            
          }
        }
      );
    }           
          
    
    }

  ngOnInit() {
    this.upc3 = this.global.upc3;
    
	
  this.nbpiege = this.global.upc3.generalParameters.upcTrapNum;
    this.storage.get("token").then(val=>{
      this.token = val
    });
  }
  async onEdit(){
    
    //this.upc.editTrap();
    
    if(this.platform.is("android")){
      var value = Math.round(this.nbpiege*this.upc3.generalParameters.co2FlowRefTrap*10.0)/10.0;
      alert(JSON.stringify(this.upc));
      await this.upc.client.setIntInHoldingRegister(40015,1,this.nbpiege).then(data=>{
        alert(JSON.stringify(data));
      }).catch(err=>{
        alert(JSON.stringify(err));
      });
      
      await this.upc.client.setFloatInHoldingRegister(40018,value).then(data=>{
        alert(JSON.stringify(data));
      }).catch(err=>{
        alert(JSON.stringify(err));
      });;
      await this.upc.client.setFloatInHoldingRegister(40020,value).then(data=>{
        alert(JSON.stringify(data));
      }).catch(err=>{
        alert(JSON.stringify(err));
      });
      this.router.navigate(['bottles']);
    } /*else {
      var value = Math.round(this.nbpiege*this.upc3.generalParameters.co2FlowRefTrap*10.0)/10.0;
      alert(JSON.stringify(this.upc));
      await this.upc.client.setIntInHoldingRegister(40015,1,this.nbpiege).then(data=>{
        alert(JSON.stringify(data));
      }).catch(err=>{
        alert(JSON.stringify(err));
      });
      await this.upc.client.setFloatInHoldingRegister(40018,value).then(data=>{
        alert(JSON.stringify(data));
      }).catch(err=>{
        alert(JSON.stringify(err));
      });;
      await this.upc.client.setFloatInHoldingRegister(40020,value).then(data=>{
        alert(JSON.stringify(data));
      }).catch(err=>{
        alert(JSON.stringify(err));
      });
      /*this.upcv3service.editTrap(this.upc3.id,this.nbpiege,this.token).subscribe(res=>{
        this.router.navigate(['bottles']);
      })*/
    /*}*/
    setTimeout(async res=>{
          await this.upc.client.connect();
    },5000);
    var value = Math.round(this.nbpiege*this.upc3.generalParameters.co2FlowRefTrap*10.0)/10.0;
      setTimeout( async item=>{
        this.upc.getAllVars();
        this.upc.readGeneralParameters()
        alert(JSON.stringify(this.upc.trapNum));
        await this.upc.client.setIntInHoldingRegister(40015,1,this.nbpiege).then(data=>{
          alert(JSON.stringify(data));
        }).catch(err=>{
          alert(JSON.stringify(err));
        });
      },10000);
      setTimeout(async res=>{
        await this.upc.client.connect();
      },5000);
      setTimeout(async item=>{
        await this.upc.client.setFloatInHoldingRegister(40018,value).then(data=>{
          alert(JSON.stringify(data));
        }).catch(err=>{
          alert(JSON.stringify(err));
        });
      },10000);
      setTimeout(async res=>{
        await this.upc.client.connect();
        },5000);
      setTimeout(async item =>{
        await this.upc.client.setFloatInHoldingRegister(40020,value).then(data=>{
          alert(JSON.stringify(data));
        }).catch(err=>{
          alert(JSON.stringify(err));
        });
      },10000);
      
    
    
    /*this.upcv3service.editTrap(this.upc3.id,this.nbpiege,this.token).subscribe(res=>{
      this.router.navigate(['bottles']);
    })*/
  }
  onContinue(){
    this.router.navigate(['bottles']);
  }

}
