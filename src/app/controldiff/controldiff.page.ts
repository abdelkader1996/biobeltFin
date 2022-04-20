import { Component, OnInit, NgZone, ChangeDetectorRef,OnDestroy } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { Hotspot } from '@ionic-native/hotspot/ngx';
import { GlobalService } from '../api/global.service';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { UPCV3 } from '../model/upcv3/upcv3';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';

declare var WifiWizard2: any;

@Component({
  selector: 'app-controldiff',
  templateUrl: './controldiff.page.html',
  styleUrls: ['./controldiff.page.scss'],
})
export class ControldiffPage implements OnInit {
  colordif = "primary";
  textdiff = "Start";
  upc : UPCModbus;
  upc3s : UPCV3[];
  intensity : number = 0;
  temp : number= 0;
  

  fluxref : number = 0;
  fluxref10 : number = 0;
  fluxmax : number=0;
  flux : number  = 0;

  backgroundDebB1Int1  = false;
  backgroundDebB1Int10 = false;
  backgroundDebB2Int1 = false;
  backgroundDebB2Int10 = false;
  bgdebwarningB1Int1 = false;
  bgdebwarningB1Int10 = false;
  bgdebwarningB2Int1 = false;
  bgdebwarningB2Int10 = false;
  backgroundPEB1Int1 = false;
  backgroundPEB1Int10 = false;
  backgroundPEB2Int1 = false;
  backgroundPEB2Int10 = false;
  
  inputref = 0;
  outputref10 = 0.580;
  input = 0;
  output = 0;
  outputref = 0.068;
  backgroundPSB1Int1 = false;
  backgroundPSB1Int10 = false;
  backgroundPSB2Int1 = false;
  backgroundPSB2Int10 = false;
  bgpswarningB1Int1 = false;
  bgpswarningB1Int10 = false;
  bgpswarningB2Int1 = false;
  bgpswarningB2Int10 = false;
  outputcomp = 0;
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
  highlightB1I1 = false;
  highlightB1I10 = false;
  highlightB2I1 = false;
  highlightB2I10 = false;
  intervalva : any;
  intervalB2I1 : any;
  intervalB1I10 : any;
  intervalB2I10 : any;
  int : any;
  redBackground = false;
  display = false;
  
  // Un seul message de succès Ecriture UPC, Ecriture Database 
  // Quantité CO2
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
           
            
             
                    
                //setTimeout(async ()=>{
                  
                  
                      /*this.redBackground = false;
                      this.colordif = "primary";
                      this.cd.detectChanges();
                      this.cd.detectChanges();*/
                   
                  
                    //40015
                    var trapNum = this.global.upcmodbus.general.upcTrapNum
                      this.inputref = 2+0.8*(trapNum-10)/90;
                   
                    //40018
                      this.fluxmax = this.global.upcmodbus.general.co2FlowRefAdj;
                      this.fluxref = this.fluxmax/10;
                      this.fluxref10 = this.fluxmax;
                      /*await this.global.upcmodbus.client.setIntInHoldingRegister(40065,1,1).then(async res=>{
                        this.intensity = 1;
                        await this.global.upcmodbus.client.getFloatFromHoldingRegister(40451).then(res=>{
                          this.temp = res;
                        })
                       
                       
                      })*/
                 
                    
                      /*this.global.upcmodbus.client.getIntFromHoldingRegister(40168,1).then(res=>{
                          this.redBackground = false;
                          this.cd.detectChanges();
                      }).catch(err=>{
                        this.redBackground = true;
                        this.colordif = "danger";
                        this.cd.detectChanges();
                      })
                      if(this.redBackground) {
                        clearInterval(this.global.interval);
                        this.ngOnInit();
                      }*/
                  
                     
                     
              
                //},2000)
              
                
              
           
        
  }//+-2%

  async startstop() {
    if(this.textdiff == "Start"){
      this.textdiff = "Stop";
      this.colordif = "danger";
      clearInterval(this.global.interval);
      await this.global.upcmodbus.client.setIntInHoldingRegister(40011,1,2).then(async ()=>{
        await this.testMinB1().then(async ()=>{
          await this.testMinB2().then(async()=>{
            await this.testMaxB1().then(async()=>{
              await this.testMaxB2().then(async()=>{
                this.onDisableDiff();
                alert("Test Min/Max terminé !");
              });
            });
          });
        });
      }).catch(err=>{
        
        
      })
    } else {
      this.onDisableDiff();
    }
    
   
    
    
    
  }
  readParams (loading) {
    
     
        
        //40018
          this.fluxmax = this.global.upcmodbus.general.co2FlowRefAdj;
          this.fluxref = this.fluxmax/10;
          this.fluxref10 = this.fluxmax;
          /*await this.global.upcmodbus.client.setIntInHoldingRegister(40065,1,1).then(async res=>{
            this.intensity = 1;
            await this.global.upcmodbus.client.getFloatFromHoldingRegister(40451).then(res=>{
              this.temp = res;
              loading.dismiss();
            })
           
           
          })*/
        
       
         
          
  
    
  }
  async testMinB1() {
    return new Promise<void>(async (resolve, reject)=>{
      
      this.highlightB1I1 = true;
        
        this.global.upcmodbus.client.setIntInHoldingRegister(40065,1,1).then(res=>{
          this.intensity = 1;
          this.global.upcmodbus.client.setIntInHoldingRegister(40150,1,1).then(res=>{
            this.global.upcmodbus.client.setIntInHoldingRegister(40011,1,2).then(res=>{
              var DebB1 = 0;
              var cpt = 0;
              this.intervalva = setInterval(()=>{
                
                this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res=>{
                  this.PEB1Int1 = res;

                  if(Math.abs(this.PEB1Int1 -this.inputref)/this.inputref < 0.1) {
                      this.backgroundPEB1Int1 = true;
                  } else {
                    this.backgroundPEB1Int1 = false;
                  
                  }
                  this.cd.detectChanges();
                }).catch(err=>{
                  
                  clearInterval(this.intervalva);
                    
                  this.highlightB1I1 = false; 
                 
                })
                this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res=>{
                  this.PSB1Int1 = res;
                  if(Math.abs((this.PSB1Int1-this.outputref)/this.outputref)*100 <5){
                    this.backgroundPSB1Int1 = true;
                    this.bgpswarningB1Int1 = false;
                  } else if(Math.abs((this.PSB1Int1-this.outputref)/this.outputref)*100 <10){
                    this.bgpswarningB1Int1 = true;
                  } else {
                    this.backgroundPSB1Int1 = false;
                    this.bgpswarningB1Int1 = false;
                  }
                  this.cd.detectChanges();
                })
                this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res=>{
                  
                  if(cpt == 0){
                      DebB1 = res;
                      

                  }
                  this.DebB1Int1 = res;
                  if(Math.abs(((this.DebB1Int1-this.fluxref)/this.fluxref)*100) <5){
                    this.backgroundDebB1Int1 = true;
                    this.bgdebwarningB1Int1 = false;
                  } else if(Math.abs(((this.DebB1Int1-this.fluxref)/this.fluxref)*100)<10) {
                    
                    this.bgdebwarningB1Int1 = true;
                  } else {
                    this.backgroundDebB1Int1 = false;
                    this.bgdebwarningB1Int1 = false;
                  }
                  cpt++;
                  
                  this.cd.detectChanges();
                })
                
                
                if(cpt >= 20) {
                  if(Math.abs(DebB1 -this.DebB1Int1) < 0.02){
                    clearInterval(this.intervalva);
                    this.highlightB1I1 = false; 
                    resolve();
                  }
                  DebB1 = this.DebB1Int1;
                  this.cd.detectChanges();
                  cpt = 0;
                }
                
              },500);
            })
            
            
          }).catch(err=>{
            alert("Erreur lors de l'écriture ModBus !")
            this.highlightB1I1 = false; 
          })
        }).catch(err=>{
          alert("Erreur lors de l'écriture ModBus !")
          this.highlightB1I1 = false; 
        })
      
      
    })
    
  }
  async testMinB2() {
    return new Promise<void>(async (resolve, reject)=>{
      
    this.highlightB2I1 = true;
      this.global.upcmodbus.client.setIntInHoldingRegister(40065,1,1).then(res=>{
        this.intensity = 1;
        this.global.upcmodbus.client.setIntInHoldingRegister(40150,1,2).then(res=>{
          var cpt = 0;
          var debB2 = 0;
          var pscomp = 0;
          var cptpscomp = 0;
          this.intervalB2I1 = setInterval(()=>{
            this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res=>{
              this.PEB2Int1 = res;
              if(Math.abs(this.PEB2Int1 -this.inputref)/this.inputref < 0.1) {
                this.backgroundPEB2Int1 = true;
            } else {
              this.backgroundPEB2Int1 = false;
            
            }
              this.cd.detectChanges();
            }).catch(err=>{
             
              clearInterval(this.intervalB2I1);
                
              this.highlightB2I1 = false; 
              
            })
            this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res=>{
              if(cptpscomp == 0){
                pscomp = res;
              }
              cptpscomp++;
              this.PSB2Int1 = res;
              if(Math.abs((this.PSB2Int1-this.outputref)/this.outputref)*100 <5){
                this.backgroundPSB2Int1 = true;
                this.bgpswarningB2Int1 = false;
              } else if(Math.abs((this.PSB2Int1-this.outputref)/this.outputref)*100 <10){
                this.bgpswarningB2Int1 = true;
              } else {
                this.backgroundPSB2Int1 = false;
                this.bgpswarningB2Int1 = false;
              }
              this.cd.detectChanges();
            })
            this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res=>{
              
              if(cpt == 0){
                  debB2 = res;
                  
              } 
              cpt++;
              this.DebB2Int1 = res;
              if(Math.abs(((this.DebB2Int1-this.fluxref)/this.fluxref)*100) <5){
                this.backgroundDebB2Int1 = true;
                this.bgdebwarningB2Int1 = false;
              } else if(Math.abs(((this.DebB2Int1-this.fluxref)/this.fluxref)*100)<10) {
                
                this.bgdebwarningB2Int1 = true;
              } else {
                this.backgroundDebB2Int1 = false;
                this.bgdebwarningB2Int1 = false;
              }
              this.cd.detectChanges();
            })
            
            if(cpt >= 20){
              if (Math.abs(debB2-this.DebB2Int1) < 0.02 && Math.abs(pscomp-this.PSB2Int1)<0.02){
                clearInterval(this.intervalB2I1);
                
                this.highlightB2I1 = false; 
                resolve();
              }
              debB2 = this.DebB2Int1;
              cptpscomp = this.PSB2Int1;
              this.cd.detectChanges();
              cpt = 0;
              cptpscomp = 0;
            }
            
          },500)
        })
        })
    
    
    })
    
  }
  doRefresh(event) {
      this.ngOnInit();
      event.target.complete();

  }
  
  async testMaxB1() {
    return new Promise<void>(async (resolve, reject)=>{
      
      this.highlightB1I10 = true;
        this.global.upcmodbus.client.setIntInHoldingRegister(40065,1,10).then(res=>{
          this.intensity = 10;
          this.global.upcmodbus.client.setIntInHoldingRegister(40150,1,1).then(res=>{
            var cpt = 0;
            var debB1 = 0;
            this.intervalB1I10 = setInterval(()=>{
              this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res=>{
                this.PEB1Int10 = res;
                if(Math.abs(this.PEB1Int10 -this.inputref)/this.inputref < 0.1) {
                  this.backgroundPEB1Int10 = true;
              } else {
                this.backgroundPEB1Int10 = false;
              
              }
                this.cd.detectChanges();
              }).catch(err=>{
                
                clearInterval(this.intervalB1I10);
               
                this.highlightB1I10 = false;
                
              })
              this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res=>{
                this.PSB1Int10 = res;
                if(Math.abs((this.PSB1Int10-this.outputref10)/this.outputref10)*100 <5){
                  this.backgroundPSB1Int10 = true;
                  this.bgpswarningB1Int10 = false;
                } else if(Math.abs((this.PSB1Int10-this.outputref10)/this.outputref10)*100 <10){
                  this.bgpswarningB1Int10 = true;
                } else {
                  this.backgroundPSB1Int10 = false;
                  this.bgpswarningB1Int10 = false;
                }
                this.cd.detectChanges();
              })
              this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res=>{
                
                if(cpt == 0){
                    debB1 =res;
                    
                } 
                cpt++;
                this.DebB1Int10 = res;
                if(Math.abs(((this.DebB1Int10-this.fluxref10)/this.fluxref10)*100) <5){
                  this.backgroundDebB1Int10 = true;
                  this.bgdebwarningB1Int10 = false;
                } else if(Math.abs(((this.DebB1Int10-this.fluxref10)/this.fluxref10)*100)<10) {
                  
                  this.bgdebwarningB1Int10 = true;
                } else {
                  this.backgroundDebB1Int10 = false;
                  this.bgdebwarningB1Int10 = false;
                }
                this.cd.detectChanges();
              })
              
              if(cpt >= 20){
                if(Math.abs(debB1 -this.DebB1Int10) <0.02){
                  clearInterval(this.intervalB1I10);
               
                  this.highlightB1I10 = false;
                  resolve();
                }
                debB1 = this.DebB1Int10;
                this.cd.detectChanges();
                cpt = 0;
                
              }
              
            },500)
          })
        })
       
      
    })
    
  }
  async testMaxB2() {
    return new Promise<void>(async(resolve, reject)=>{
     
      this.highlightB2I10 = true;
        this.global.upcmodbus.client.setIntInHoldingRegister(40065,1,10).then(res=>{
          this.intensity = 10;
          this.global.upcmodbus.client.setIntInHoldingRegister(40150,1,2).then(res=>{
            var cpt = 0;
            var debB2 = 0;
            this.intervalB2I10 = setInterval(()=>{
              this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res=>{
                this.PEB2Int10 = res;
                if(Math.abs(this.PEB2Int10 -this.inputref)/this.inputref < 0.1) {
                  this.backgroundPEB2Int10 = true;
              } else {
                this.backgroundPEB2Int10 = false;
              
              }
                this.cd.detectChanges();
              }).catch(err=>{
                
                clearInterval(this.intervalB2I10);
                clearInterval(this.int);
                this.highlightB2I10 = false;
                
              })
              this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res=>{
                this.PSB2Int10 = res;
                if(Math.abs((this.PSB2Int10-this.outputref10)/this.outputref10)*100 <5){
                  this.backgroundPSB2Int10 = true;
                  this.bgpswarningB2Int10 = false;
                } else if(Math.abs((this.PSB2Int10-this.outputref10)/this.outputref10)*100 <10){
                  this.bgpswarningB2Int10 = true;
                } else {
                  this.backgroundPSB2Int10 = false;
                  this.bgpswarningB2Int10 = false;
                }
                this.cd.detectChanges();
              })
              this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res=>{
                
                if(cpt == 0){
                    debB2 = res;
                    
                } 
                cpt++;
                this.DebB2Int10 = res;
                if(Math.abs(((this.DebB2Int10-this.fluxref10)/this.fluxref10)*100) <5){
                  this.backgroundDebB2Int10 = true;
                  this.bgdebwarningB2Int10 = false;
                } else if(Math.abs(((this.DebB2Int10-this.fluxref10)/this.fluxref10)*100)<10) {
                  
                  this.bgdebwarningB2Int10 = true;
                } else {
                  this.backgroundDebB2Int10 = false;
                  this.bgdebwarningB2Int10 = false;
                }
                this.cd.detectChanges();
              })
              
              if(cpt >= 20){
                if(Math.abs(debB2 - this.DebB2Int10) < 0.02){
                  clearInterval(this.intervalB2I10);
                  clearInterval(this.int);
                  this.highlightB2I10 = false;
                  resolve();
                }
                debB2 = this.DebB2Int10;
                this.cd.detectChanges();
                cpt = 0;
                
              }
             
            },500)
          })
        })
      
      
    })
    
  }
  onChangeDiff() {
    this.global.upcmodbus.client.setIntInHoldingRegister(40011,1,2).then(res=>{
      this.textdiff = "Stop";
      this.colordif = "danger";
      
      
      
    })
  }
  onDisableDiff() {
    this.global.upcmodbus.client.setIntInHoldingRegister(40011,1,0).then(res=>{
      this.textdiff = "Start";
      this.colordif = "primary";
      this.highlightB1I10 = false;
      this.highlightB2I1 = false;
      this.highlightB2I10 = false;
      this.highlightB1I1 = false;
      clearInterval(this.intervalB1I10);
      clearInterval(this.intervalB2I1);
      clearInterval(this.intervalva);
      clearInterval(this.intervalB2I10);
      this.cd.detectChanges();
      
    })
  }

  goToNextPage(){    
    this.storage.get("nexturl").then(res=>{  
      this.router.navigate([res]);
    })  
  }
  

}
