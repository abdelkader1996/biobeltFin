import * as tslib_1 from "tslib";
import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { Hotspot } from '@ionic-native/hotspot/ngx';
import { GlobalService } from '../api/global.service';
import { UPCModbus } from '../model/upcv3/upcmodbus';
let ControldiffPage = class ControldiffPage {
    // Un seul message de succès Ecriture UPC, Ecriture Database 
    // Quantité CO2
    constructor(platform, loadingCTRL, ngZone, network, hotspot, cd, global) {
        this.platform = platform;
        this.loadingCTRL = loadingCTRL;
        this.ngZone = ngZone;
        this.network = network;
        this.hotspot = hotspot;
        this.cd = cd;
        this.global = global;
        this.colordif = "primary";
        this.textdiff = "Start";
        this.intensity = 0;
        this.temp = 0;
        this.fluxref = 0;
        this.fluxref10 = 0;
        this.fluxmax = 0;
        this.flux = 0;
        this.backgroundDebB1Int1 = false;
        this.backgroundDebB1Int10 = false;
        this.backgroundDebB2Int1 = false;
        this.backgroundDebB2Int10 = false;
        this.bgdebwarningB1Int1 = false;
        this.bgdebwarningB1Int10 = false;
        this.bgdebwarningB2Int1 = false;
        this.bgdebwarningB2Int10 = false;
        this.backgroundPEB1Int1 = false;
        this.backgroundPEB1Int10 = false;
        this.backgroundPEB2Int1 = false;
        this.backgroundPEB2Int10 = false;
        this.inputref = 0;
        this.outputref10 = 0;
        this.input = 0;
        this.output = 0;
        this.outputref = 0;
        this.backgroundPSB1Int1 = false;
        this.backgroundPSB1Int10 = false;
        this.backgroundPSB2Int1 = false;
        this.backgroundPSB2Int10 = false;
        this.bgpswarningB1Int1 = false;
        this.bgpswarningB1Int10 = false;
        this.bgpswarningB2Int1 = false;
        this.bgpswarningB2Int10 = false;
        this.outputcomp = 0;
        this.PEB1Int1 = 0;
        this.PEB2Int1 = 0;
        this.PSB1Int1 = 0;
        this.PSB2Int1 = 0;
        this.DebB1Int1 = 0;
        this.DebB1Int10 = 0;
        this.DebB2Int1 = 0;
        this.DebB2Int10 = 0;
        this.PEB1Int10 = 0;
        this.PEB2Int10 = 0;
        this.PSB1Int10 = 0;
        this.PSB2Int10 = 0;
        this.highlightB1I1 = false;
        this.highlightB1I10 = false;
        this.highlightB2I1 = false;
        this.highlightB2I10 = false;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.upc3s = JSON.parse(localStorage.getItem("upc3"));
            this.upc3s.forEach(item => {
                //if(item.upcNameId == "Test4G1"){
                this.inputref = 2 + 0.8 * (item.generalParameters.upcTrapNum - 10) / 90;
                //this.fluxref = 0.2;
                //this.fluxref10 = 2;
                this.outputref = item.generalParameters.co2PresOutRef1 / 1000;
                this.outputref10 = item.generalParameters.co2PresOutRef10 / 1000;
                //}
            });
            /*if(this.platform.is('ios')){
              this.platform.ready().then(async ()=>{
                if(localStorage.getItem("BBAM") != "true"){
                  WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(async res=>{
                    var loading = await this.loadingCTRL.create({
                      message : "Connection à l'UPC en cours...",
                      duration : 10000
                    })
                    loading.present();
                    this.global.isBBAM = true;
                    this.global.ssid = "BBAM";
                    localStorage.setItem("BBAM",""+true);
                    this.platform.ready().then(async readySource => {
                        if(readySource == "cordova"){
                          this.upc = new UPCModbus(state => {
                            this.ngZone.run(() => {
                              // Force refresh UI
                              
                                
                                //this.readDiffusionParameters();
                              
                            });
                          });
                          await this.upc.client.connect();
                          this.readParams(loading);
                        }
                    })
                    
                  })
                } else {
                  this.upc = new UPCModbus(state => {
                    this.ngZone.run(() => {
                      // Force refresh UI
                      
                        
                        //this.readDiffusionParameters();
                      
                    });
                  });
                  //await this.upc.client.connect();
                  setTimeout(async ()=>{
                    //this.ngZone.run(async ()=>{
                    await this.upc.client.getFloatFromHoldingRegister(40018).then(async res =>{
                      this.global.isBBAM = true;
                      this.global.ssid = "BBAM";
                      this.fluxmax = res;
                      this.fluxref = this.fluxmax/10;
                      this.fluxref10 = this.fluxmax;
                      await this.upc.client.setIntInHoldingRegister(40065,1,1).then(async res=>{
                        this.intensity = 1;
                        await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                          this.temp = res;
                          
                        })
                       /*this.global.interval = setInterval(async ()=>{
                         await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
                           //40435
                           var iFlux = [res[19],res[20]]
                           this.input = this.upc.client.registerToFloat(iFlux);
                           
                           //40437
                           var out = [res[21],res[22]]
                           this.output = this.upc.client.registerToFloat(out);
           
                           //40439
                           var f = [res[23],res[24]];
                           this.flux = this.upc.client.registerToFloat(f);
           
                           //40451
                           var tmp = [res[35],res[36]];
                           this.temp = this.upc.client.registerToFloat(tmp);
                           
                           //40463
                           var outcomp = [res[47],res[48]];
                           this.outputcomp = this.upc.client.registerToFloat(outcomp);
         
                           this.global.ssid = "BBAM";
                           this.global.isBBAM = true;
           
                           this.cd.detectChanges();
                           //loading.dismiss();
                         }).catch(err=>{
                           this.ngOnInit();
                         })
                       },2000)*/
            /*}).catch(async err=>{
             await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
               //40435
               var iFlux = [res[19],res[20]]
               this.input = this.upc.client.registerToFloat(iFlux);
               
               //40437
               var out = [res[21],res[22]]
               this.output = this.upc.client.registerToFloat(out);

               //40439
               var f = [res[23],res[24]];
               this.flux = this.upc.client.registerToFloat(f);

               //40451
               var tmp = [res[35],res[36]];
               this.temp = this.upc.client.registerToFloat(tmp);
               
               //40463
               var outcomp = [res[47],res[48]];
               this.outputcomp = this.upc.client.registerToFloat(outcomp);

               this.cd.detectChanges();
               //loading.dismiss();
             }).catch(err=>{
               
             })
            })
          })*/
            /*await this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
              this.inputref = 2+0.8*(res-10)/90;
              this.fluxref = 0.017*res;
              this.fluxref10 = 0.17*res;
              this.cd.detectChanges();
    })*/
            /*await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
              this.input = res;
              this.cd.detectChanges();
            }).catch(err=>{
              
            })*/
            /*await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
              this.temp = res;
            })*/
            /*await this.upc.client.setFloatInHoldingRegister(40018,1).then(res=>{
              this.fluxmax = 1;
              this.cd.detectChanges();
            })
            await this.upc.client.setIntInHoldingRegister(40065,1,1).then(res=>{
                this.intensity = 1;
                this.cd.detectChanges();
            })*/
            /*await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
              this.outputcomp = res;
              this.cd.detectChanges();
            })*/
            /*this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
              this.global.ssid = res;
            })*/
            /*await this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
              //var upc = res.replace(/[^a-zA-Z0-9]/g,'');
              var upc = "Test4G1";
              this.upc3s.forEach(item=>{
                if(item.upcNameId == upc){
                  this.outputref = item.generalParameters.co2PresOutRef1/1000;
                  this.outputref10 = item.generalParameters.co2PresOutRef10/1000;
                }
              })
              this.cd.detectChanges();
            })*/
            /*await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
              this.output = res;
              this.cd.detectChanges();
            })*/
            /*await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
              this.flux = res;
              this.cd.detectChanges();
            })*/
            //})
            /*},2000)
          }
          
        })
        
      }*/ //else if(this.platform.is("android")){
            //this.hotspot.connectToWifi("BBAM","BioBeltService").then(async()=>{
            /*var loading = await this.loadingCTRL.create({
              message : "Connection à l'UPC en cours...",
              duration : 10000
            })
            loading.present();*/
            this.global.isBBAM = true;
            this.global.ssid = "BBAM";
            this.platform.ready().then((readySource) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (readySource == 'cordova') {
                    this.upc = new UPCModbus(state => {
                        this.ngZone.run(() => {
                            // Force refresh UI
                            //this.readDiffusionParameters();
                        });
                    });
                    yield this.upc.client.connect();
                    //this.readParams(loading);
                    setTimeout(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        //this.ngZone.run(async ()=>{
                        yield this.upc.client.getFloatFromHoldingRegister(40018).then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                            this.fluxmax = res;
                            this.fluxref = this.fluxmax / 10;
                            this.fluxref10 = this.fluxmax;
                            yield this.upc.client.setIntInHoldingRegister(40065, 1, 1).then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                                this.intensity = 1;
                                yield this.upc.client.getFloatFromHoldingRegister(40451).then(res => {
                                    this.temp = res;
                                    //loading.dismiss();
                                });
                                /*this.global.interval = setInterval(async ()=>{
                                  await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
                                    //40435
                                    var iFlux = [res[19],res[20]]
                                    this.input = this.upc.client.registerToFloat(iFlux);
                                    
                                    //40437
                                    var out = [res[21],res[22]]
                                    this.output = this.upc.client.registerToFloat(out);
                     
                                    //40439
                                    var f = [res[23],res[24]];
                                    this.flux = this.upc.client.registerToFloat(f);
                     
                                    //40451
                                    var tmp = [res[35],res[36]];
                                    this.temp = this.upc.client.registerToFloat(tmp);
                                    
                                    //40463
                                    var outcomp = [res[47],res[48]];
                                    this.outputcomp = this.upc.client.registerToFloat(outcomp);
                     
                                    this.global.ssid = "BBAM";
                     
                                    this.cd.detectChanges();
                                    loading.dismiss();
                                  }).catch(err=>{
                                    this.ngOnInit();
                                  })
                                },2000) */
                            })); /*.catch(async err=>{
                             await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
                               //40435
                               var iFlux = [res[19],res[20]]
                               this.input = this.upc.client.registerToFloat(iFlux);
                               
                               //40437
                               var out = [res[21],res[22]]
                               this.output = this.upc.client.registerToFloat(out);
                  
                               //40439
                               var f = [res[23],res[24]];
                               this.flux = this.upc.client.registerToFloat(f);
                  
                               //40451
                               var tmp = [res[35],res[36]];
                               this.temp = this.upc.client.registerToFloat(tmp);
                               
                               //40463
                               var outcomp = [res[47],res[48]];
                               this.outputcomp = this.upc.client.registerToFloat(outcomp);
                  
                               this.cd.detectChanges();
                               loading.dismiss();
                             }).catch(err=>{
                               
                             })
                            })*/
                        })).catch(err => {
                            alert("Veuillez vous connecter à BBAM !");
                            this.global.ssid = "ADMIN";
                            this.global.isBBAM = false;
                        });
                        /*await this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
                          this.inputref = 2+0.8*(res-10)/90;
                          this.fluxref = 0.017*res;
                          this.fluxref10 = 0.17*res;
                          this.cd.detectChanges();
                })*/
                        /*await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                          this.input = res;
                          this.cd.detectChanges();
                        }).catch(err=>{
                          
                        })*/
                        /*await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                          this.temp = res;
                        })*/
                        /*await this.upc.client.setFloatInHoldingRegister(40018,1).then(res=>{
                          this.fluxmax = 1;
                          this.cd.detectChanges();
                        })
                        await this.upc.client.setIntInHoldingRegister(40065,1,1).then(res=>{
                            this.intensity = 1;
                            this.cd.detectChanges();
                        })*/
                        /*await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                          this.outputcomp = res;
                          this.cd.detectChanges();
                        })*/
                        /*this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                          this.global.ssid = res;
                        })*/
                        /*await this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                          //var upc = res.replace(/[^a-zA-Z0-9]/g,'');
                          var upc = "Test4G1";
                          this.upc3s.forEach(item=>{
                            if(item.upcNameId == upc){
                              this.outputref = item.generalParameters.co2PresOutRef1/1000;
                              this.outputref10 = item.generalParameters.co2PresOutRef10/1000;
                            }
                          })
                          this.cd.detectChanges();
                        })*/
                        /*await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                          this.output = res;
                          this.cd.detectChanges();
                        })*/
                        /*await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                          this.flux = res;
                          this.cd.detectChanges();
                        })*/
                        //})
                    }), 1000);
                }
            }));
            //})
            //}
        });
    } //+-2%
    startstop() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.textdiff == "Start") {
                this.textdiff = "Stop";
                this.colordif = "danger";
                clearInterval(this.global.interval);
                yield this.upc.client.setIntInHoldingRegister(40011, 1, 2).then(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    yield this.testMinB1().then(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        yield this.testMinB2().then(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                            yield this.testMaxB1().then(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                                yield this.testMaxB2().then(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                                    this.onDisableDiff();
                                    alert("Test Min/Max terminé !");
                                }));
                            }));
                        }));
                    }));
                })).catch(err => {
                    alert("Veuillez vous connecter à BBAM !");
                    this.global.ssid = "ADMIN";
                    this.global.isBBAM = false;
                });
            }
            else {
                this.onDisableDiff();
            }
        });
    }
    readParams(loading) {
        setTimeout(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            //this.ngZone.run(async ()=>{
            yield this.upc.client.getFloatFromHoldingRegister(40018).then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.fluxmax = res;
                this.fluxref = this.fluxmax / 10;
                this.fluxref10 = this.fluxmax;
                yield this.upc.client.setIntInHoldingRegister(40065, 1, 1).then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    this.intensity = 1;
                    yield this.upc.client.getFloatFromHoldingRegister(40451).then(res => {
                        this.temp = res;
                        loading.dismiss();
                    });
                    /*this.global.interval = setInterval(async ()=>{
                      await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
                        //40435
                        var iFlux = [res[19],res[20]]
                        this.input = this.upc.client.registerToFloat(iFlux);
                        
                        //40437
                        var out = [res[21],res[22]]
                        this.output = this.upc.client.registerToFloat(out);
         
                        //40439
                        var f = [res[23],res[24]];
                        this.flux = this.upc.client.registerToFloat(f);
         
                        //40451
                        var tmp = [res[35],res[36]];
                        this.temp = this.upc.client.registerToFloat(tmp);
                        
                        //40463
                        var outcomp = [res[47],res[48]];
                        this.outputcomp = this.upc.client.registerToFloat(outcomp);
         
                        this.global.ssid = "BBAM";
         
                        this.cd.detectChanges();
                        loading.dismiss();
                      }).catch(err=>{
                        this.ngOnInit();
                      })
                    },2000) */
                })); /*.catch(async err=>{
                 await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
                   //40435
                   var iFlux = [res[19],res[20]]
                   this.input = this.upc.client.registerToFloat(iFlux);
                   
                   //40437
                   var out = [res[21],res[22]]
                   this.output = this.upc.client.registerToFloat(out);
      
                   //40439
                   var f = [res[23],res[24]];
                   this.flux = this.upc.client.registerToFloat(f);
      
                   //40451
                   var tmp = [res[35],res[36]];
                   this.temp = this.upc.client.registerToFloat(tmp);
                   
                   //40463
                   var outcomp = [res[47],res[48]];
                   this.outputcomp = this.upc.client.registerToFloat(outcomp);
      
                   this.cd.detectChanges();
                   loading.dismiss();
                 }).catch(err=>{
                   
                 })
                })*/
            }));
            /*await this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
              this.inputref = 2+0.8*(res-10)/90;
              this.fluxref = 0.017*res;
              this.fluxref10 = 0.17*res;
              this.cd.detectChanges();
    })*/
            /*await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
              this.input = res;
              this.cd.detectChanges();
            }).catch(err=>{
              
            })*/
            /*await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
              this.temp = res;
            })*/
            /*await this.upc.client.setFloatInHoldingRegister(40018,1).then(res=>{
              this.fluxmax = 1;
              this.cd.detectChanges();
            })
            await this.upc.client.setIntInHoldingRegister(40065,1,1).then(res=>{
                this.intensity = 1;
                this.cd.detectChanges();
            })*/
            /*await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
              this.outputcomp = res;
              this.cd.detectChanges();
            })*/
            /*this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
              this.global.ssid = res;
            })*/
            /*await this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
              //var upc = res.replace(/[^a-zA-Z0-9]/g,'');
              var upc = "Test4G1";
              this.upc3s.forEach(item=>{
                if(item.upcNameId == upc){
                  this.outputref = item.generalParameters.co2PresOutRef1/1000;
                  this.outputref10 = item.generalParameters.co2PresOutRef10/1000;
                }
              })
              this.cd.detectChanges();
            })*/
            /*await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
              this.output = res;
              this.cd.detectChanges();
            })*/
            /*await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
              this.flux = res;
              this.cd.detectChanges();
            })*/
            //})
        }), 5000);
    }
    testMinB1() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                /*var loading = await this.loadingCTRL.create({
                  message : "Calcul des Pressions pour B1 à l'intensité 1 en cours ...",
                  
                });
                loading.present();*/
                this.highlightB1I1 = true;
                //this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                this.upc.client.setIntInHoldingRegister(40065, 1, 1).then(res => {
                    this.intensity = 1;
                    this.upc.client.setIntInHoldingRegister(40150, 1, 1).then(res => {
                        this.upc.client.setIntInHoldingRegister(40011, 1, 2).then(res => {
                            var DebB1 = 0;
                            var cpt = 0;
                            this.intervalva = setInterval(() => {
                                this.upc.client.getFloatFromHoldingRegister(40435).then(res => {
                                    this.PEB1Int1 = res;
                                    if (Math.abs(this.PEB1Int1 - this.inputref) / this.inputref < 0.1) {
                                        this.backgroundPEB1Int1 = true;
                                    }
                                    else {
                                        this.backgroundPEB1Int1 = false;
                                    }
                                    this.cd.detectChanges();
                                }).catch(err => {
                                    alert("Veuillez vous connecter à BBAM !");
                                    this.global.ssid = "ADMIN";
                                    this.global.isBBAM = false;
                                    clearInterval(this.intervalva);
                                    //clearInterval(this.int);
                                    this.highlightB1I1 = false;
                                    //resolve();
                                });
                                this.upc.client.getFloatFromHoldingRegister(40437).then(res => {
                                    this.PSB1Int1 = res;
                                    if (Math.abs((this.PSB1Int1 - this.outputref) / this.outputref) * 100 < 5) {
                                        this.backgroundPSB1Int1 = true;
                                        this.bgpswarningB1Int1 = false;
                                    }
                                    else if (Math.abs((this.PSB1Int1 - this.outputref) / this.outputref) * 100 < 10) {
                                        this.bgpswarningB1Int1 = true;
                                    }
                                    else {
                                        this.backgroundPSB1Int1 = false;
                                        this.bgpswarningB1Int1 = false;
                                    }
                                    this.cd.detectChanges();
                                });
                                this.upc.client.getFloatFromHoldingRegister(40439).then(res => {
                                    if (cpt == 0) {
                                        DebB1 = res;
                                    }
                                    this.DebB1Int1 = res;
                                    if (Math.abs(((this.DebB1Int1 - this.fluxref) / this.fluxref) * 100) < 5) {
                                        this.backgroundDebB1Int1 = true;
                                        this.bgdebwarningB1Int1 = false;
                                    }
                                    else if (Math.abs(((this.DebB1Int1 - this.fluxref) / this.fluxref) * 100) < 10) {
                                        this.bgdebwarningB1Int1 = true;
                                    }
                                    else {
                                        this.backgroundDebB1Int1 = false;
                                        this.bgdebwarningB1Int1 = false;
                                    }
                                    cpt++;
                                    this.cd.detectChanges();
                                });
                                /*if(cpt >= 10){
                                  clearInterval(intervalva);
                                  
                                  loading.dismiss();
                                  resolve();
                                  
                                }*/
                                if (cpt >= 20) {
                                    //alert(Math.abs(DebB1 -this.DebB1Int1));
                                    if (Math.abs(DebB1 - this.DebB1Int1) < 0.02) {
                                        clearInterval(this.intervalva);
                                        //clearInterval(this.int);
                                        this.highlightB1I1 = false;
                                        resolve();
                                    }
                                    DebB1 = this.DebB1Int1;
                                    this.cd.detectChanges();
                                    cpt = 0;
                                }
                                /*this.int = setInterval(()=>{
                                  
                                },10000)*/
                            }, 500);
                        });
                    }).catch(err => {
                        alert("Erreur lors de l'écriture ModBus !");
                        this.highlightB1I1 = false;
                    });
                }).catch(err => {
                    alert("Erreur lors de l'écriture ModBus !");
                    this.highlightB1I1 = false;
                });
                //})
            }));
        });
    }
    testMinB2() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                /*var loading = await this.loadingCTRL.create({
                  message : "Calcul des Pressions pour B2 à l'intensité 1 en cours...",
              })
              loading.present();*/
                this.highlightB2I1 = true;
                //this.upc.client.setFloatInHoldingRegister(40018,2).then(res=>{
                this.upc.client.setIntInHoldingRegister(40065, 1, 1).then(res => {
                    this.intensity = 1;
                    this.upc.client.setIntInHoldingRegister(40150, 1, 2).then(res => {
                        var cpt = 0;
                        var debB2 = 0;
                        this.intervalB2I1 = setInterval(() => {
                            this.upc.client.getFloatFromHoldingRegister(40435).then(res => {
                                this.PEB2Int1 = res;
                                if (Math.abs(this.PEB2Int1 - this.inputref) / this.inputref < 0.1) {
                                    this.backgroundPEB2Int1 = true;
                                }
                                else {
                                    this.backgroundPEB2Int1 = false;
                                }
                                this.cd.detectChanges();
                            }).catch(err => {
                                alert("Veuillez vous connecter à BBAM !");
                                this.global.ssid = "ADMIN";
                                this.global.isBBAM = false;
                                clearInterval(this.intervalB2I1);
                                //clearInterval(this.int);
                                this.highlightB2I1 = false;
                                //resolve();
                            });
                            this.upc.client.getFloatFromHoldingRegister(40437).then(res => {
                                this.PSB2Int1 = res;
                                if (Math.abs((this.PSB2Int1 - this.outputref) / this.outputref) * 100 < 5) {
                                    this.backgroundPSB2Int1 = true;
                                    this.bgpswarningB2Int1 = false;
                                }
                                else if (Math.abs((this.PSB2Int1 - this.outputref) / this.outputref) * 100 < 10) {
                                    this.bgpswarningB2Int1 = true;
                                }
                                else {
                                    this.backgroundPSB2Int1 = false;
                                    this.bgpswarningB2Int1 = false;
                                }
                                this.cd.detectChanges();
                            });
                            this.upc.client.getFloatFromHoldingRegister(40439).then(res => {
                                if (cpt == 0) {
                                    debB2 = res;
                                }
                                cpt++;
                                this.DebB2Int1 = res;
                                if (Math.abs(((this.DebB2Int1 - this.fluxref) / this.fluxref) * 100) < 5) {
                                    this.backgroundDebB2Int1 = true;
                                    this.bgdebwarningB2Int1 = false;
                                }
                                else if (Math.abs(((this.DebB2Int1 - this.fluxref) / this.fluxref) * 100) < 10) {
                                    this.bgdebwarningB2Int1 = true;
                                }
                                else {
                                    this.backgroundDebB2Int1 = false;
                                    this.bgdebwarningB2Int1 = false;
                                }
                                this.cd.detectChanges();
                            });
                            if (cpt >= 20) {
                                if (Math.abs(debB2 - this.DebB2Int1) < 0.02) {
                                    clearInterval(this.intervalB2I1);
                                    //clearInterval(this.int);
                                    this.highlightB2I1 = false;
                                    resolve();
                                }
                                debB2 = this.DebB2Int1;
                                this.cd.detectChanges();
                                cpt = 0;
                            }
                        }, 500);
                    });
                });
                //})
            }));
        });
    }
    doRefresh(event) {
        this.ngOnInit();
        event.target.complete();
    }
    /*ionViewWillLeave() {
  
      
      clearInterval(this.interval);
      clearInterval(this.intervalB1I10);
      clearInterval(this.intervalB2I1);
      clearInterval(this.intervalva);
      clearInterval(this.intervalB2I10);
    }
  
    ngOnDestroy(): void {
  
      
      clearInterval(this.interval);
      clearInterval(this.intervalB1I10);
      clearInterval(this.intervalB2I1);
      clearInterval(this.intervalva);
      clearInterval(this.intervalB2I10);
    }*/
    testMaxB1() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                /*var loading = await this.loadingCTRL.create({
                  message : "Calcul des Pressions pour B1 à l'intensité 10 en cours ...",
                  
                });
                loading.present();*/
                this.highlightB1I10 = true;
                //this.upc.client.setFloatInHoldingRegister(40018,2).then(res=>{
                this.upc.client.setIntInHoldingRegister(40065, 1, 10).then(res => {
                    this.intensity = 10;
                    this.upc.client.setIntInHoldingRegister(40150, 1, 1).then(res => {
                        var cpt = 0;
                        var debB1 = 0;
                        this.intervalB1I10 = setInterval(() => {
                            this.upc.client.getFloatFromHoldingRegister(40435).then(res => {
                                this.PEB1Int10 = res;
                                if (Math.abs(this.PEB1Int10 - this.inputref) / this.inputref < 0.1) {
                                    this.backgroundPEB1Int10 = true;
                                }
                                else {
                                    this.backgroundPEB1Int10 = false;
                                }
                                this.cd.detectChanges();
                            }).catch(err => {
                                alert("Veuillez vous connecter à BBAM !");
                                this.global.ssid = "ADMIN";
                                this.global.isBBAM = false;
                                clearInterval(this.intervalB1I10);
                                //clearInterval(this.int);
                                this.highlightB1I10 = false;
                                //resolve();
                            });
                            this.upc.client.getFloatFromHoldingRegister(40437).then(res => {
                                this.PSB1Int10 = res;
                                if (Math.abs((this.PSB1Int10 - this.outputref10) / this.outputref10) * 100 < 5) {
                                    this.backgroundPSB1Int10 = true;
                                    this.bgpswarningB1Int10 = false;
                                }
                                else if (Math.abs((this.PSB1Int10 - this.outputref10) / this.outputref10) * 100 < 10) {
                                    this.bgpswarningB1Int10 = true;
                                }
                                else {
                                    this.backgroundPSB1Int10 = false;
                                    this.bgpswarningB1Int10 = false;
                                }
                                this.cd.detectChanges();
                            });
                            this.upc.client.getFloatFromHoldingRegister(40439).then(res => {
                                if (cpt == 0) {
                                    debB1 = res;
                                }
                                cpt++;
                                this.DebB1Int10 = res;
                                if (Math.abs(((this.DebB1Int10 - this.fluxref10) / this.fluxref10) * 100) < 5) {
                                    this.backgroundDebB1Int10 = true;
                                    this.bgdebwarningB1Int10 = false;
                                }
                                else if (Math.abs(((this.DebB1Int10 - this.fluxref10) / this.fluxref10) * 100) < 10) {
                                    this.bgdebwarningB1Int10 = true;
                                }
                                else {
                                    this.backgroundDebB1Int10 = false;
                                    this.bgdebwarningB1Int10 = false;
                                }
                                this.cd.detectChanges();
                            });
                            if (cpt >= 20) {
                                if (Math.abs(debB1 - this.DebB1Int10) < 0.02) {
                                    clearInterval(this.intervalB1I10);
                                    //clearInterval(this.int);
                                    this.highlightB1I10 = false;
                                    resolve();
                                }
                                debB1 = this.DebB1Int10;
                                this.cd.detectChanges();
                                cpt = 0;
                            }
                        }, 500);
                    });
                });
                //})  
            }));
        });
    }
    testMaxB2() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                /* var loading = await this.loadingCTRL.create({
                   message : "Calcul des Pressions pour B2 à l'intensité 10 en cours ...",
                   
                 });
                 
                 loading.present();*/
                this.highlightB2I10 = true;
                //this.upc.client.setFloatInHoldingRegister(40018,2).then(res=>{
                this.upc.client.setIntInHoldingRegister(40065, 1, 10).then(res => {
                    this.intensity = 10;
                    this.upc.client.setIntInHoldingRegister(40150, 1, 2).then(res => {
                        var cpt = 0;
                        var debB2 = 0;
                        this.intervalB2I10 = setInterval(() => {
                            this.upc.client.getFloatFromHoldingRegister(40435).then(res => {
                                this.PEB2Int10 = res;
                                if (Math.abs(this.PEB2Int10 - this.inputref) / this.inputref < 0.1) {
                                    this.backgroundPEB2Int10 = true;
                                }
                                else {
                                    this.backgroundPEB2Int10 = false;
                                }
                                this.cd.detectChanges();
                            }).catch(err => {
                                alert("Veuillez vous connecter à BBAM !");
                                this.global.ssid = "ADMIN";
                                this.global.isBBAM = false;
                                clearInterval(this.intervalB2I10);
                                clearInterval(this.int);
                                this.highlightB2I10 = false;
                                //resolve();
                            });
                            this.upc.client.getFloatFromHoldingRegister(40437).then(res => {
                                this.PSB2Int10 = res;
                                if (Math.abs((this.PSB2Int10 - this.outputref10) / this.outputref10) * 100 < 5) {
                                    this.backgroundPSB2Int10 = true;
                                    this.bgpswarningB2Int10 = false;
                                }
                                else if (Math.abs((this.PSB2Int10 - this.outputref10) / this.outputref10) * 100 < 10) {
                                    this.bgpswarningB2Int10 = true;
                                }
                                else {
                                    this.backgroundPSB2Int10 = false;
                                    this.bgpswarningB2Int10 = false;
                                }
                                this.cd.detectChanges();
                            });
                            this.upc.client.getFloatFromHoldingRegister(40439).then(res => {
                                if (cpt == 0) {
                                    debB2 = res;
                                }
                                cpt++;
                                this.DebB2Int10 = res;
                                if (Math.abs(((this.DebB2Int10 - this.fluxref10) / this.fluxref10) * 100) < 5) {
                                    this.backgroundDebB2Int10 = true;
                                    this.bgdebwarningB2Int10 = false;
                                }
                                else if (Math.abs(((this.DebB2Int10 - this.fluxref10) / this.fluxref10) * 100) < 10) {
                                    this.bgdebwarningB2Int10 = true;
                                }
                                else {
                                    this.backgroundDebB2Int10 = false;
                                    this.bgdebwarningB2Int10 = false;
                                }
                                this.cd.detectChanges();
                            });
                            if (cpt >= 20) {
                                if (Math.abs(debB2 - this.DebB2Int10) < 0.02) {
                                    clearInterval(this.intervalB2I10);
                                    clearInterval(this.int);
                                    this.highlightB2I10 = false;
                                    resolve();
                                }
                                debB2 = this.DebB2Int10;
                                this.cd.detectChanges();
                                cpt = 0;
                            }
                        }, 500);
                    });
                });
                //})
            }));
        });
    }
    onChangeDiff() {
        this.upc.client.setIntInHoldingRegister(40011, 1, 2).then(res => {
            this.textdiff = "Stop";
            this.colordif = "danger";
        });
    }
    onDisableDiff() {
        this.upc.client.setIntInHoldingRegister(40011, 1, 0).then(res => {
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
        });
    }
};
ControldiffPage = tslib_1.__decorate([
    Component({
        selector: 'app-controldiff',
        templateUrl: './controldiff.page.html',
        styleUrls: ['./controldiff.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform, LoadingController, NgZone, Network, Hotspot, ChangeDetectorRef, GlobalService])
], ControldiffPage);
export { ControldiffPage };
//# sourceMappingURL=controldiff.page.js.map