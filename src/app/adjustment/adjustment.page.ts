import { Component, OnInit, NgZone, ChangeDetectorRef,OnDestroy  } from '@angular/core';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Network } from '@ionic-native/network/ngx';
import { Platform, LoadingController } from '@ionic/angular';
import { GlobalService } from '../api/global.service';
import { UPCV3 } from '../model/upcv3/upcv3';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

declare var WifiWizard2: any;

@Component({
  selector: 'app-adjustment',
  templateUrl: './adjustment.page.html',
  styleUrls: ['./adjustment.page.scss'],
})
export class AdjustmentPage implements OnInit {
  upc : UPCModbus;
  upc3s : UPCV3[];
  input : number = 0;
  inputref : number = 0; // 2+0.8*(nbpieges-10)/90
  outputcomp : number = 0;
  output : number = 0;
  outputref : number = 0.325;
  resActive : number = 0;
  intensity : number = 0;
  fluxmax : number= 0;
  intensityFlux : number= 0;
  flux : number = 0;
  temp : number= 0;
  fluxref : number= 0;
  modediff : number = 0;
  backgroundPE = false;
  backgroundPS = false;
  backgroundDeb = false;
  bgdebwarning = false;
  bgpswarning = false;
  successB1 = "";
  successB2 = "";
  colordif = "primary";
  textdiff = "Start/Stop";
  colorAct = "light";
  colorDes = "light";
 
  colorB1 = "light";
  colorB2 = "light";
  colorMin = "light";
  colorMax = "light";
  colorAuto = "light";
  PEB1Int1 = 0;
  PEB2Int1 = 0;
  PSB1Int1 = 0;
  PSB2Int1 = 0;
  DebB1Int1 = 0;
  DebB1Int10 = 0;
  DebB2Int1 = 0;
  DebB2Int10 = 0;
  PEB1Int10 = 0;
  PEB2Int10 = 0;
  PSB1Int10 = 0;
  PSB2Int10 = 0; 
  PE = "PE";
  redBackground = false;
  display=false;
  

  constructor(
    private platform : Platform, 
    private loadingCTRL : LoadingController,
    private ngZone : NgZone,
    private network : Network,
    private hotspot : Hotspot,
    private cd: ChangeDetectorRef,
    private global : GlobalService,
    private router : Router,
    private storage : Storage) {
      this.global.checkMode()
     }

  async ngOnInit() {}
  ionViewWillEnter(){
    
    /*affichage bouton suivant*/    
    this.global.checkNextPage().then(res=>{
      if(res == true){
        this.display = true;
      }
    }) 
    
        this.platform.ready().then(res=>{
          if (res == "cordova") {
            
              
           this.global.upcmodbus.client.getStringFromHoldingRegister(40001,10).then(res=>{
            localStorage.setItem("upcname",res);
          }).catch(err=>{
            
            //localStorage.removeItem("isConnected");
            this.redBackground = true;
            localStorage.removeItem("isConnected");
            this.colorB1 = "light";
            this.colorB2 = "light";
            this.colordif = "light";
            this.cd.detectChanges();
            //this.ngOnInit();
          })
        
           this.global.upcmodbus.client.getIntFromHoldingRegister(40015,1).then(res=>{
            
            this.inputref = 2+0.8*(res-10)/90;
          })
           this.global.upcmodbus.client.getFloatFromHoldingRegister(40018).then(async(res)=>{
            this.fluxref = res*5/10; 
            await this.global.upcmodbus.client.setIntInHoldingRegister(40065,1,5).then(async()=>{
              this.intensityFlux = 5;
             
              await this.global.upcmodbus.client.setIntInHoldingRegister(40011,1,0).then(async()=>{
                this.colordif = "primary"
                this.textdiff = "Start";
                this.colorAct = "light";
                this.colorDes = "primary";
                this.modediff = 0;
                await this.global.upcmodbus.client.setIntInHoldingRegister(40150,1,0).then(async ()=>{
                  this.resActive = 0;
                  this.colorB1 = "light";
                  this.colorB2 = "light";
                  this.global.interval = setInterval(async ()=>{
                    await this.global.upcmodbus.client.readHoldingRegisters(40416,100).then(res=>{
                  
                    
                      //40435
                      var iFlux = [res[19],res[20]]
                      this.input = this.global.upcmodbus.client.registerToFloat(iFlux);

                      //40437
                      var out = [res[21],res[22]]
                      this.output = this.global.upcmodbus.client.registerToFloat(out); 

                      //40439
                      var f = [res[23],res[24]];
                      this.flux = this.global.upcmodbus.client.registerToFloat(f);

                      //40451
                      var tmp = [res[35],res[36]];
                      this.temp = this.global.upcmodbus.client.registerToFloat(tmp);

                      //40463
                      var outcomp = [res[47],res[48]];
                      this.outputcomp = this.global.upcmodbus.client.registerToFloat(outcomp);
                      this.redBackground = false;
                      this.cd.detectChanges();
                      

                    }).catch(err=>{
                      this.redBackground = true;
                      this.colorB1 = "danger";
                      this.colorB2 = "danger";
                      this.colordif = "danger";
                      this.cd.detectChanges();

                    })
                    if (this.redBackground) {
                      clearInterval(this.global.interval);
                      this.ngOnInit();
                    }
                  },500)
                  
                })
              })
            })
          })
              
  
              
        
          }
        })
        
        
      
      
  
  }

  doRefresh(event) {
    this.ngOnInit();
    event.target.complete();
  }
  
  changeResAct(i) {
    if(this.resActive != null){
      
      
      setTimeout(()=>{
        this.global.upcmodbus.client.setIntInHoldingRegister(40151,1,i).then(res=>{
          this.global.upcmodbus.client.setIntInHoldingRegister(40150,1,i).then(res=>{
            this.resActive = i;
            if(this.resActive == 1){
              this.colorB1 = "primary";
              this.colorB2 = "light";
              this.PE = "B1"; 
            } if(this.resActive == 2) {
              this.colorB2 = "primary";
              this.colorB1 = "light";
              this.PE = "B2";
            }// lire plusieurs variables modbus 
            
            this.cd.detectChanges();
          }).catch(async err=>{
            var loading = await this.loadingCTRL.create({
              message : "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
              duration : 10000
            })
            loading.present();
            this.ngOnInit();
          })
        })
        
      },1000)
      
    }
    
  }
  changeInt() {
    if(this.intensity != null){
      clearInterval(this.global.interval);
      setTimeout(()=>{
        this.global.upcmodbus.client.setIntInHoldingRegister(40065,1,this.intensity).then(res=>{
          if(this.intensity == 1){
            this.colorMin = "primary";
            this.colorMax ="light";
          } if(this.intensity == 10){
            this.colorMax = "primary"
            this.colorMin = "light";
          }
          this.global.interval = setInterval(async ()=>{
            await this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res=>{
              this.input = res;
          })
          await this.global.upcmodbus.client.getFloatFromHoldingRegister(40463).then(res=>{
              this.outputcomp = res;
          })
          await this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res=>{
            this.output = res;
          })
          await this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res=>{
            this.flux = res;
            this.cd.detectChanges();
          })
          await this.global.upcmodbus.client.getIntFromHoldingRegister(40416,1).then(res=>{
            this.intensityFlux = res;
            this.cd.detectChanges();
          })
          this.fluxref = this.intensityFlux * this.fluxmax /10;
          },500)
        }).catch(async err=>{
          var loading = await this.loadingCTRL.create({
            message : "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
            duration : 10000
          })
          loading.present();
          this.ngOnInit();
        })
      },1000)
      
    }
    
  }
  minInt() {
    this.global.upcmodbus.client.setIntInHoldingRegister(40065,1,1).then(res=>{
      this.intensity = 1;
      
        this.colorMin = "primary";
        this.colorMax ="light";
      
    }).catch(async err=>{
      var loading = await this.loadingCTRL.create({
        message : "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
        duration : 10000
      })
      loading.present();
      this.ngOnInit();
    })
  }
  maxInt() {
    this.global.upcmodbus.client.setIntInHoldingRegister(40065,1,10).then(res=>{
      this.intensity = 10
      
        this.colorMax = "primary"
        this.colorMin = "light";
      
    }).catch(async err=>{
      var loading = await this.loadingCTRL.create({
        message : "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
        duration : 10000
      })
      loading.present();
      this.ngOnInit();
    })
  }
  async testMinB2() {
    var loading = await this.loadingCTRL.create({
        message : "Calcul des Pressions pour B2 à l'intensité 1 en cours...",
    })
    loading.present();
    this.global.upcmodbus.client.setIntInHoldingRegister(40065,1,1).then(res=>{
      this.intensity = 1;
      this.global.upcmodbus.client.setIntInHoldingRegister(40150,1,2).then(res=>{
        var cpt = 0;
        var intervalB2I1 = setInterval(()=>{
          this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res=>{
            this.PEB1Int1 = res;
          })
          this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res=>{
            this.PSB1Int1 = res;
          })
          this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res=>{
            
            if(Math.abs(((this.DebB1Int1 -res)/res)*100) <10){
                cpt++;
            } 
            this.DebB1Int1 = res;
          })
          
          if(cpt >= 10){
            clearInterval(intervalB2I1);
            
            loading.dismiss();
            
          }
        },500)
      })
    })
  }
  async testMaxB2() {
    var loading = await this.loadingCTRL.create({
      message : "Calcul des Pressions pour B2 à l'intensité 10 en cours ...",
      
    });
    loading.present();

    this.global.upcmodbus.client.setIntInHoldingRegister(40065,1,10).then(res=>{
      this.intensity = 10;
      this.global.upcmodbus.client.setIntInHoldingRegister(40150,1,1).then(res=>{
        var cpt = 0;
        var intervalB2I10 = setInterval(()=>{
          this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res=>{
            this.PEB1Int1 = res;
          })
          this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res=>{
            this.PSB1Int1 = res;
          })
          this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res=>{
            
            if(Math.abs(((this.DebB1Int1 -res)/res)*100) <10){
                cpt++;
            } 
            this.DebB1Int1 = res;
          })
          
          if(cpt >= 10){
            clearInterval(intervalB2I10);
            
            loading.dismiss();
            
          }
        },500)
      })
    })
  }
  async testMaxB1() {
    var loading = await this.loadingCTRL.create({
      message : "Calcul des Pressions pour B1 à l'intensité 10 en cours ...",
      
    });
    loading.present();

    this.global.upcmodbus.client.setIntInHoldingRegister(40065,1,10).then(res=>{
      this.intensity = 10;
      this.global.upcmodbus.client.setIntInHoldingRegister(40150,1,1).then(res=>{
        var cpt = 0;
        var intervalB1I10 = setInterval(()=>{
          this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res=>{
            this.PEB1Int1 = res;
          })
          this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res=>{
            this.PSB1Int1 = res;
          })
          this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res=>{
            
            if(Math.abs(((this.DebB1Int1 -res)/res)*100) <10){
                cpt++;
            } 
            this.DebB1Int1 = res;
          })
          
          if(cpt >= 10){
            clearInterval(intervalB1I10);
            
            loading.dismiss();
            
          }
        },500)
      })
    })
  }
  async testMinB1() {
    var loading = await this.loadingCTRL.create({
      message : "Calcul des Pressions pour B1 à l'intensité 1 en cours ...",
      
    });
    loading.present();
    this.global.upcmodbus.client.setIntInHoldingRegister(40065,1,1).then(res=>{
      this.intensity = 1;
      this.global.upcmodbus.client.setIntInHoldingRegister(40150,1,1).then(res=>{
        var cpt = 0;
        var intervalva = setInterval(()=>{
          
          this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res=>{
            this.PEB1Int1 = res;
          })
          this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res=>{
            this.PSB1Int1 = res;
          })
          this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res=>{
            
            if(Math.abs(((this.DebB1Int1 -res)/res)*100) <10){
                cpt++;
            } 
            this.DebB1Int1 = res;
          })
          
          if(cpt >= 10){
            clearInterval(intervalva);
            
            loading.dismiss();
            
          }
        },500);
        
      }).catch(err=>{
        alert("Erreur lors de l'écriture ModBus !")
        loading.dismiss();
      })
    }).catch(err=>{
      alert("Erreur lors de l'écriture ModBus !")
      loading.dismiss();
    })
  }
  async auto () {
    var loading = await this.loadingCTRL.create({
      message : "Calcul des Pressions en cours...",
      
    });
    loading.present();
    this.global.upcmodbus.client.setIntInHoldingRegister(40065,1,1).then(res=>{
      this.intensity = 1;
      this.global.upcmodbus.client.setIntInHoldingRegister(40150,1,1).then(res=>{
        var interval = setInterval(()=>{
          
          this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res=>{
            this.PEB1Int1 = res;
          })
          this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res=>{
            this.PSB1Int1 = res;
          })
          this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res=>{
            if(Math.abs(this.DebB2Int1 -res)>0.01){
             
              //alert("Seuil Atteind !"); Fichier Excel dispo par URL
            }
            this.DebB1Int1 = res;
          })
        },500)
        setTimeout(()=>{
          clearInterval(interval);

          this.global.upcmodbus.client.setIntInHoldingRegister(40150,1,2).then(res=>{
            
            var interval2 = setInterval(()=>{
              this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res=>{
                this.PEB2Int1 = res;
              })
              this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res=>{
                this.PSB2Int1 = res;
              })
              this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res=>{
                if(Math.abs(this.DebB2Int1 -res) > 0.1){
                    clearInterval(interval2);
                }
                this.DebB2Int1 = res;
              })
            },500)
            setTimeout(()=>{
              clearInterval(interval2);
              this.global.upcmodbus.client.setIntInHoldingRegister(40065,1,10).then(res=>{
                this.intensity = 10;
                var interval3 = setInterval(()=>{
                  this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res=>{
                    this.PEB2Int10 = res;
                  })
                  this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res=>{
                    this.PSB2Int10 = res;
                  })
                  this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res=>{
                    this.DebB2Int10 = res;
                  })
                },500)
                setTimeout(()=>{
                  clearInterval(interval3);
                  this.global.upcmodbus.client.setIntInHoldingRegister(40150,1,1).then(res=>{
                    var interval4 = setInterval(()=>{
                      this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res=>{
                        this.PEB1Int10 = res;
                      })
                      this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res=>{
                        this.PSB1Int10 = res;
                      })
                      this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res=>{
                        this.DebB1Int10 = res;
                      })
                    },500)
                    setTimeout(()=>{
                      clearInterval(interval4);
                      alert("Test Auto Réalisé !");
                      loading.dismiss();
                    },40000)
                  })
                },30000)
              })
            },20000)
          })
        },10000)  
      })
    })
  }
  startstop() {
    if(this.colordif == "primary"){
      this.onChangeDiff();
    } else {
      this.onDisableDiff();
    }
  }
  onChangeDiff() {
    this.global.upcmodbus.client.setIntInHoldingRegister(40011,1,2).then(res=>{
      
      this.textdiff = "Stop";
      this.colordif = "danger";
      this.colorAct = "primary";
      this.colorDes ="light";
      this.modediff = 2;
      this.cd.detectChanges();
    })
  }
  onDisableDiff() {
    this.global.upcmodbus.client.setIntInHoldingRegister(40011,1,0).then(res=>{
      this.textdiff = "Start";
      this.colordif = "primary";
      this.colorAct = "light";
      this.colorDes ="primary";
      this.modediff = 0;
      this.cd.detectChanges();
    })
  }
  changeFluxMax() {
    if(this.fluxmax != null) {
      this.global.upcmodbus.client.setFloatInHoldingRegister(40018,this.fluxmax).then(res=>{
        alert(this.fluxmax);
      }).catch(async err=>{
        var loading = await this.loadingCTRL.create({
          message : "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
          duration : 10000
        })
        loading.present();
        this.ngOnInit();
      })
    }
   
  }

  goToNextPage(){    
    this.storage.get("nexturl").then(res=>{  
      this.router.navigate([res]);
    })  
  }
}

