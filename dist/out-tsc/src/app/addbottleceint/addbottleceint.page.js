import * as tslib_1 from "tslib";
import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Platform, ModalController, LoadingController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Storage } from '@ionic/storage';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { Hotspot } from '@ionic-native/hotspot/ngx';
import { GlobalService } from '../api/global.service';
let AddbottleceintPage = class AddbottleceintPage {
    constructor(platform, ngZone, network, scan, modal, loadingCTRL, cd, upcv3Service, storage, hotspot, global) {
        this.platform = platform;
        this.ngZone = ngZone;
        this.network = network;
        this.scan = scan;
        this.modal = modal;
        this.loadingCTRL = loadingCTRL;
        this.cd = cd;
        this.upcv3Service = upcv3Service;
        this.storage = storage;
        this.hotspot = hotspot;
        this.global = global;
        this.stockRet = "En cours...";
        this.addressage = 41119;
        this.addressage2 = 41169;
        this.B1 = [];
        this.B1Ad = [];
        this.B1String = [];
        this.B1Desig = [];
        this.B1IsMesser = [];
        this.B2 = [];
        this.B2Ad = [];
        this.B2String = [];
        this.B2Desig = [];
        this.B2IsMesser = [];
        this.i = 0;
        this.y = 0;
        this.addedBottleB1 = { barcodes: [], kg: [] };
        this.addedBottleB2 = { barcodes: [], kg: [] };
        this.removedBottle = { barcodes: [] };
        this.isBBAM = false;
        this.contenuB1 = 0;
        this.contenuB2 = 0;
        this.highlightB1 = false;
        this.highlightB2 = false;
        this.ssid = "";
    }
    //Mise à jour puis wipe puis test 
    //Retest 
    //Wipe + Sauvegarde d'offset pour UPC
    ngOnInit() {
        this.addedBottleB1.date = new Date().toISOString().substr(0, 16);
        this.addedBottleB1.objet = "Remplissage";
        this.addedBottleB2.date = new Date().toISOString().substr(0, 16);
        this.addedBottleB2.objet = "Remplissage";
        this.removedBottle.date = new Date().toISOString().substr(0, 16);
        this.platform.ready().then(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.storage.get("token").then(val => {
                this.token = val;
            });
            /*if(this.platform.is('ios')){
              WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(async res=>{
                
                var loading = await this.loadingCTRL.create({
                  message : "Connection à l'UPC en cours...",
                  duration : 10000
                })
                loading.present();
               
                this.global.isBBAM = true;
                this.platform.ready().then(
                  async readySource => {
                    if (readySource == 'cordova') {
                      
                      this.upc = new UPCModbus(state => {
                        this.ngZone.run(() => {
                          // Force refresh UI
                          
                            
                            //this.readDiffusionParameters();
                          
                        });
                      });
                      
                      await this.upc.client.connect();
                      this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                        this.stockRet = res.replace(/[^a-zA-Z0-9]/g,'');
                        this.addedBottleB1.name = res.replace(/[^a-zA-Z0-9]/g,'');
                        this.addedBottleB1.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                        this.addedBottleB2.name = res.replace(/[^a-zA-Z0-9]/g,'');
                        this.addedBottleB2.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                        this.removedBottle.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                        this.cd.detectChanges();
                        loading.dismiss();
                      }).catch(err=>{
                        
                      })
                      //40157 40165
                      this.upc.client.readHoldingRegisters(40157,10).then(res=>{
                        this.contenuB1 = this.upc.client.registerToFloat([res[0],res[1]]);
                        this.contenuB2 = this.upc.client.registerToFloat([res[8],res[9]]);
                      })
                     await setTimeout(async ()=>{
                        //this.ngZone.run(()=>{
                          this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                            this.stockRet = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.addedBottleB1.name = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.addedBottleB1.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.addedBottleB2.name = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.addedBottleB2.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.removedBottle.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.cd.detectChanges();
                            loading.dismiss();
                          }).catch(err=>{
                            
                          })
                          this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                            this.global.ssid = res;
                          })
                          this.upc.client.readHoldingRegisters(41119,100).then(res=>{
                            var b1list = [];
                            var b11reg = [res[0],res[1],res[2],res[3],res[4],res[5],res[6],res[7],res[8],res[9]];
                            b1list.push(this.upc.client.registerToString(b11reg));
    
                            var b12reg = [res[10],res[11],res[12],res[13],res[14],res[15],res[16],res[17],res[18],res[19]];
                            b1list.push(this.upc.client.registerToString(b12reg));
    
                            var b13reg = [res[20],res[21],res[22],res[23],res[24],res[25],res[26],res[27],res[28],res[29]];
                            b1list.push(this.upc.client.registerToString(b13reg));
    
                            var b14reg = [res[30],res[31],res[32],res[33],res[34],res[35],res[36],res[37],res[38],res[39]];
                            b1list.push(this.upc.client.registerToString(b14reg));
    
                            var b15reg = [res[40],res[41],res[42],res[43],res[44],res[45],res[46],res[47],res[48],res[49]];
                            b1list.push(this.upc.client.registerToString(b15reg));
                            for (var i =0;i<b1list.length;i++){
                              if (/^\d+$/.test(b1list[i].substr(0,8))){
                                
                                this.B1String.push("Messer ("+b1list[i].substr(0,8)+") 37.5 kg");
                                this.B1Desig.push("37.5");
                                this.B1IsMesser.push(true);
                                this.addressage+=10;
                                this.B1.push(b1list[i].substr(0,8));
                              } else if(/^[a-z0-9]+$/i.test(b1list[i].substr(0,7))){
                                var kg = "";
                                
                                if(b1list[i].charAt(7) == "0"){
                                  kg = "10 kg";
                                  this.B1Desig.push("10");
                                }
                                if (b1list[i].charAt(7) == "1"){
                                  kg = "20 kg";
                                  this.B1Desig.push("20");
                                }
                                if (b1list[i].charAt(7) == "2"){
                                  kg = "22.6796 kg";
                                  this.B1Desig.push("22.6796");
                                }
                                if (b1list[i].charAt(7)=="3"){
                                  kg = "34 kg";
                                  this.B1Desig.push("34");
                                }
                                this.B1String.push("Air liquide ("+b1list[i].substr(0,7)+") "+kg);
                                this.B1IsMesser.push(false);
                                this.addressage+=10;
                                this.B1.push(b1list[i].substr(0,7));
                                this.cd.detectChanges();
                              }
                              
                            }
                            var b2list = [];
                              var b21reg = [res[50],res[51],res[52],res[53],res[54],res[55],res[56],res[57],res[58],res[59]];
                              b2list.push(this.upc.client.registerToString(b21reg));
    
                              var b22reg = [res[60],res[61],res[62],res[63],res[64],res[65],res[66],res[67],res[68],res[69]];
                              b2list.push(this.upc.client.registerToString(b22reg));
    
                              var b23reg = [res[70],res[71],res[72],res[73],res[74],res[75],res[76],res[77],res[78],res[79]];
                              b2list.push(this.upc.client.registerToString(b23reg));
    
                              var b24reg = [res[80],res[81],res[82],res[83],res[84],res[85],res[86],res[87],res[88],res[89]];
                              b2list.push(this.upc.client.registerToString(b24reg));
    
                              var b25reg = [res[90],res[91],res[92],res[93],res[94],res[95],res[96],res[97],res[98],res[99]];
                              b2list.push(this.upc.client.registerToString(b25reg));
    
                              for (var j = 0;j<b2list.length;j++){
                                if (/^\d+$/.test(b2list[j].substr(0,8))){
                                
                                  this.B2String.push("Messer ("+b2list[j].substr(0,8)+") 37.5 kg");
                                  this.B2Desig.push("37.5");
                                  this.B2IsMesser.push(true);
                                  //this.addressage+=10;
                                  this.B2.push(b2list[j].substr(0,8));
                                } else if(/^[a-z0-9]+$/i.test(b2list[j].substr(0,7))){
                                  var kg = "";
                                  
                                  if(b2list[j].charAt(7) == "0"){
                                    kg = "10 kg";
                                    this.B2Desig.push("10");
                                  }
                                  if (b2list[j].charAt(7) == "1"){
                                    kg = "20 kg";
                                    this.B2Desig.push("20");
                                  }
                                  if (b2list[j].charAt(7) == "2"){
                                    kg = "22.6796 kg";
                                    this.B2Desig.push("22.6796");
                                  }
                                  if (b2list[j].charAt(7)=="3"){
                                    kg = "34 kg";
                                    this.B2Desig.push("34");
                                  }
                                  this.B2String.push("Air liquide ("+b2list[j].substr(0,7)+") "+kg);
                                  this.B2IsMesser.push(false);
                                  //this.addressage+=10;
                                  this.B2.push(b2list[j].substr(0,7));
                                  this.cd.detectChanges();
                                }
                              }
                          })
                          
                          
                        //})
                        
                        //alert(JSON.stringify(this.upc));
                      },5000)
                        //})
                      /*this.network.onConnect().subscribe(async (async) => {
                        
                        if (this.network.type === this.network.Connection.WIFI) {
                          
                          
                         
                          
                          
                          //await this.upc.getAllVars().general.upcNameId;
                          /*this.upc.getAllVars().then(res=>{
                            alert(res.general.upcNameId);
                          })
                          this.stockRet = {
                            name : this.upc.nameId
                          }*/
            /*}
          },err=>{
            loading.dismiss();
            alert("Connection à l'UPC echoué !");
          });*/
            /*}
          }
        );
      }).catch(err=>{
        this.stockRet = "Erreur lors de la connexion UPC";
        alert("La connexion a echoué veuillez vous approcher de l'UPC et réessayer !");
      })
    }*/
            //else if(this.platform.is("android")) {
            /*var loading = await this.loadingCTRL.create({
              message : "Connection à l'UPC en cours...",
              duration : 10000
            })
            loading.present();*/
            //this.hotspot.isWifiOn().then(async res=>{
            /*if(res == false){
              await this.hotspot.toggleWifi();

            }*/
            //await this.hotspot.connectToWifi("BBAM","BioBeltService").then(res=>{
            this.global.isBBAM = true;
            this.platform.ready().then((readySource) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (readySource == 'cordova') {
                    this.upc = new UPCModbus(state => {
                        this.ngZone.run(() => {
                            // Force refresh UI
                            //this.readDiffusionParameters();
                        });
                    });
                    yield this.upc.client.connect();
                    this.upc.client.getStringFromHoldingRegister(40001, 10).then(res => {
                        this.stockRet = res.replace(/[^a-zA-Z0-9]/g, '');
                        this.addedBottleB1.name = res.replace(/[^a-zA-Z0-9]/g, '');
                        this.addedBottleB1.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                        this.addedBottleB2.name = res.replace(/[^a-zA-Z0-9]/g, '');
                        this.addedBottleB2.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                        this.removedBottle.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                        this.cd.detectChanges();
                        //loading.dismiss();
                    }).catch(err => {
                    });
                    yield setTimeout(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        this.ngZone.run(() => {
                            this.upc.client.getFloatFromHoldingRegister(40157).then(res => {
                                this.contenuB1 = Math.round((res * 0.001974) * 100) / 100;
                            });
                            this.upc.client.getFloatFromHoldingRegister(40165).then(res => {
                                this.contenuB2 = Math.round((res * 0.001974) * 100) / 100;
                            });
                            this.upc.client.getIntFromHoldingRegister(40381, 1).then(res => {
                                this.statusB1 = res;
                            });
                            this.upc.client.getIntFromHoldingRegister(40150, 1).then(res => {
                                if (res == 1) {
                                    this.highlightB1 = true;
                                    this.highlightB2 = false;
                                }
                                else {
                                    this.highlightB1 = false;
                                    this.highlightB2 = true;
                                }
                            });
                            this.upc.client.getIntFromHoldingRegister(40383, 1).then(res => {
                                this.statusB2 = res;
                            });
                            this.upc.client.getStringFromHoldingRegister(40001, 10).then(res => {
                                this.stockRet = res.replace(/[^a-zA-Z0-9]/g, '');
                                this.addedBottleB1.name = res.replace(/[^a-zA-Z0-9]/g, '');
                                this.addedBottleB1.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                this.addedBottleB2.name = res.replace(/[^a-zA-Z0-9]/g, '');
                                this.addedBottleB2.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                this.removedBottle.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                this.cd.detectChanges();
                                //loading.dismiss();
                            }).catch(err => {
                            });
                            this.upc.client.getStringFromHoldingRegister(40045, 10).then(res => {
                                this.global.ssid = res;
                            });
                            for (var ad = 41119; ad <= 41159; ad += 10) {
                                this.upc.client.getStringFromHoldingRegister(ad, 10).then(res => {
                                    //alert(res);
                                    if (/^\d+$/.test(res.substr(0, 8))) {
                                        this.B1String.push("Messer (" + res.substr(0, 8) + ") 37.5 kg");
                                        this.B1Desig.push("37.5");
                                        this.B1IsMesser.push(true);
                                        this.B1Ad.push(res.substr(0, 8));
                                        this.addressage += 10;
                                        this.B1.push(res.substr(0, 8));
                                    }
                                    else if (/^[a-z0-9]+$/i.test(res.substr(0, 7))) {
                                        var kg = "";
                                        if (res.charAt(7) == "0") {
                                            kg = "10 kg";
                                            this.B1Desig.push("10");
                                        }
                                        if (res.charAt(7) == "1") {
                                            kg = "20 kg";
                                            this.B1Desig.push("20");
                                        }
                                        if (res.charAt(7) == "2") {
                                            kg = "22.6796 kg";
                                            this.B1Desig.push("22.6796");
                                        }
                                        if (res.charAt(7) == "3") {
                                            kg = "34 kg";
                                            this.B1Desig.push("34");
                                        }
                                        this.B1String.push("Air liquide (" + res.substr(0, 7) + ") " + kg);
                                        this.B1.push(res.substr(0, 7));
                                        this.B1IsMesser.push(false);
                                        this.B1Ad.push(res.substr(0, 7));
                                        this.addressage += 10;
                                        this.B1.push(res.substr(0, 7));
                                    }
                                    else {
                                        this.B1Ad.push("");
                                    }
                                    this.cd.detectChanges();
                                }).catch(err => {
                                }); //41199
                            }
                            for (var ad2 = 41169; ad2 <= 41208; ad2 += 10) {
                                this.upc.client.getStringFromHoldingRegister(ad2, 10).then(res => {
                                    if (/^\d+$/.test(res.substr(0, 8))) {
                                        this.B2String.push("Messer (" + res.substr(0, 8) + ") 37.5 kg");
                                        this.B2Desig.push("37.5");
                                        this.B2IsMesser.push(true);
                                        this.B2Ad.push(res.substr(0, 8));
                                        this.addressage2 += 10;
                                        this.B2.push(res.substr(0, 8));
                                    }
                                    else if (/^[a-z0-9]+$/i.test(res.substr(0, 7))) {
                                        var kg = "";
                                        if (res.charAt(7) == "0") {
                                            kg = "10 kg";
                                            this.B2Desig.push("10");
                                        }
                                        if (res.charAt(7) == "1") {
                                            kg = "20 kg";
                                            this.B2Desig.push("20");
                                        }
                                        if (res.charAt(7) == "2") {
                                            kg = "22.6796 kg";
                                            this.B2Desig.push("22.6796");
                                        }
                                        if (res.charAt(7) == "3") {
                                            kg = "34 kg";
                                            this.B2Desig.push("34");
                                        }
                                        this.B2String.push("Air liquide (" + res.substr(0, 7) + ") " + kg);
                                        this.B2IsMesser.push(false);
                                        this.B2Ad.push(res.substr(0, 7));
                                        this.addressage2 += 10;
                                        this.B2.push(res.substr(0, 7));
                                    }
                                    else {
                                        this.B2Ad.push("");
                                    }
                                    this.cd.detectChanges();
                                }).catch(err => {
                                });
                            }
                        });
                        //alert(JSON.stringify(this.upc));
                    }), 1000);
                    /*this.network.onConnect().subscribe(async (async) => {
                      
                      if (this.network.type === this.network.Connection.WIFI) {
                        
                        
                       
                        
                        
                        //await this.upc.getAllVars().general.upcNameId;
                        /*this.upc.getAllVars().then(res=>{
                          alert(res.general.upcNameId);
                        })
                        this.stockRet = {
                          name : this.upc.nameId
                        }*/
                    /*}
                  },err=>{
                    loading.dismiss();
                    alert("Connection à l'UPC echoué !");
                  });*/
                }
            }));
            //})
            //})
            /*WifiWizard2.connect("BBAM",false,"BioBeltService","WPA",false).then(res=>{
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
                    
                    this.network.onConnect().subscribe(async (async) => {
                      
                      if (this.network.type === this.network.Connection.WIFI) {
                        
                        await this.upc.client.connect();
                        
                        await setTimeout(async ()=>{
                          this.ngZone.run(()=>{
                            this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                              this.stockRet = res;
                              this.addedBottleB1.name = res;
                              this.addedBottleB1.upcNameId = res;
                              this.addedBottleB2.name = res;
                              this.addedBottleB2.upcNameId = res;
                              this.removedBottle.upcNameId = res;
                              this.cd.detectChanges();
                              loading.dismiss();
                            })
                            
                            for (var ad = 41119;ad<=41159;ad+=10){
                              this.upc.client.getStringFromHoldingRegister(ad,10).then(res=>{
                                
                                if (/^\d+$/.test(res.substr(0,8))){
                                  
                                  this.B1String.push("Messer ("+res.substr(0,12)+") 37.5 kg");
                                  this.B1Desig.push("37.5");
                                  this.B1IsMesser.push(true);
                                  this.addressage+=10;
                                  this.B1.push(res.substr(0,12));
                                } else if(/^[a-z0-9]+$/i.test(res.substr(0,7))){
                                  var kg = "";
                                  
                                  if(res.charAt(7) == "0"){
                                    kg = "10 kg";
                                    this.B1Desig.push("10");
                                  }
                                  if (res.charAt(7) == "1"){
                                    kg = "20 kg";
                                    this.B1Desig.push("20");
                                  }
                                  if (res.charAt(7) == "2"){
                                    kg = "22.6796 kg";
                                    this.B1Desig.push("22.6796");
                                  }
                                  if (res.charAt(7)=="3"){
                                    kg = "34 kg";
                                    this.B1Desig.push("34");
                                  }
                                  this.B1String.push("Air liquide ("+res.substr(0,7)+") "+kg);
                                  this.B1IsMesser.push(false);
                                  this.addressage+=10;
                                  this.B1.push(res.substr(0,7));
                                }
                                this.cd.detectChanges();
                              })
                            } for(var ad2=41169;ad2<=41208;ad2+=10){
                              this.upc.client.getStringFromHoldingRegister(ad2,10).then(res=>{
                                
                                if(/^\d+$/.test(res.substr(0,8))){
                                  this.B2String.push("Messer ("+res.substr(0,12)+") 37.5 kg");
                                  this.B2Desig.push("37.5");
                                  this.B2IsMesser.push(true);
                                  this.addressage2+=10;
                                  this.B2.push(res.substr(0,12));
                                } else if(/^[a-z0-9]+$/i.test(res.substr(0,7))){
                                  var kg = "";
                                  if(res.charAt(7) == "0"){
                                    kg = "10 kg";
                                    this.B2Desig.push("10");
                                  }
                                  if (res.charAt(7) == "1"){
                                    kg = "20 kg";
                                    this.B2Desig.push("20");
                                  }
                                  if (res.charAt(7) == "2"){
                                    kg = "22.6796 kg";
                                    this.B2Desig.push("22.6796");
                                  }
                                  if (res.charAt(7)=="3"){
                                    kg = "34 kg";
                                    this.B2Desig.push("34");
                                  }
                                  this.B2String.push("Air liquide ("+res.substr(0,7)+") "+kg);
                                  this.B2IsMesser.push(false);
                                  this.addressage2+=10;
                                  this.B2.push(res.substr(0,7));
                                }
                                this.cd.detectChanges();
                              })
                            }
                            
                          })
                          
                          //alert(JSON.stringify(this.upc));
                        },5000)
                       
                        
                        
                        //await this.upc.getAllVars().general.upcNameId;
                        /*this.upc.getAllVars().then(res=>{
                          alert(res.general.upcNameId);
                        })
                        this.stockRet = {
                          name : this.upc.nameId
                        }*/
            /*}
          },err=>{
            loading.dismiss();
            alert("Connection à l'UPC echoué !");
          });
        }
      }
    );
  })*/
            //}
        }));
    }
    onRemove() {
        this.scan.scan().then(res => {
            var scanned = false;
            var indexB1 = -1;
            var indexB2 = -1;
            var indexB1front = -1;
            var indexB2front = -1;
            var indexB1Ad = -1;
            var indexB2Ad = -1;
            this.B1.forEach((item, index) => {
                if (item.includes(res.text)) {
                    scanned = true;
                    indexB1 = index;
                }
            });
            this.B1String.forEach((item, index) => {
                if (item.includes(res.text)) {
                    indexB1front = index;
                    scanned = true;
                }
            });
            this.B1Ad.forEach((item, index) => {
                if (item.includes(res.text)) {
                    scanned = true;
                    indexB1Ad = index;
                }
            });
            this.B2Ad.forEach((item, index) => {
                if (item.includes(res.text)) {
                    scanned = true;
                    indexB2Ad = index;
                }
            });
            this.B2.forEach((item, index) => {
                if (item.includes(res.text)) {
                    scanned = true;
                    indexB2 = index;
                }
            });
            this.B2String.forEach((item, index) => {
                if (item.includes(res.text)) {
                    scanned = true;
                    indexB2front = index;
                }
            });
            if (scanned) {
                this.removedBottle.barcodes.push(res.text);
                if (indexB1 >= 0) {
                    var addresse = indexB1Ad * 10 + 41119;
                    this.upc.client.setStringInHoldingRegister(addresse, "\0").then(res => {
                        //this.B1.splice(indexB1,1);
                        this.B1Desig.splice(indexB1front, 1);
                        this.B1IsMesser.splice(indexB1front, 1);
                        this.B1String.splice(indexB1front, 1);
                        this.addressage -= 10;
                        this.cd.detectChanges();
                    }).catch(err => {
                        alert(JSON.stringify(err));
                    });
                }
                if (indexB2 >= 0) {
                    var adresse = indexB2Ad * 10 + 41169;
                    this.upc.client.setStringInHoldingRegister(adresse, "\0").then(res => {
                        //this.B2.splice(indexB2,1);
                        this.B2Desig.splice(indexB2front, 1);
                        this.B2IsMesser.splice(indexB2front, 1);
                        this.B2String.splice(indexB2front, 1);
                        this.addressage2 -= 10;
                        this.cd.detectChanges();
                    }).catch(err => {
                        alert(JSON.stringify(err));
                    });
                }
                if (this.B1Desig.length == 0) {
                    this.B1Ad = [];
                }
                if (this.B2Desig.length == 0) {
                    this.B2Ad = [];
                }
            }
            else {
                alert("La bouteille n'est pas assigné à cette ceinture");
            }
        }).catch(err => {
            alert("Veuillez activer l'autorisation photo de l'app");
        });
    }
    doRefresh($event) {
        this.B1 = [];
        this.B1Ad = [];
        this.B1String = [];
        this.B1Desig = [];
        this.B1IsMesser = [];
        this.B2 = [];
        this.B2Ad = [];
        this.B2String = [];
        this.B2Desig = [];
        this.B2IsMesser = [];
        this.ngOnInit();
        $event.target.complete();
    }
    onChangeDesigB2(i) {
        var adresse = i * 10 + 41169;
        var index;
        this.addedBottleB2.kg[i] = this.B2Desig[i];
        this.contenuB2 = 0;
        for (var j = 0; j < this.addedBottleB2.kg; j++) {
            this.contenuB2 += parseFloat(this.addedBottleB2.kg[j]);
        }
        if (this.B2Desig[i] == "10") {
            index = "0";
            //this.contenuB2+=10;
            this.B2String[i] = "Air liquide (" + this.B2[i].substr(0, 7) + ") " + this.B2Desig[i] + " kg";
        }
        if (this.B2Desig[i] == "20") {
            index = "1";
            //this.contenuB2+= 20;
            this.B2String[i] = "Air liquide (" + this.B2[i].substr(0, 7) + ") " + this.B2Desig[i] + " kg";
        }
        if (this.B2Desig[i] == "22.6796") {
            index = "2";
            //this.contenuB2 += 22.6796;
            this.B2String[i] = "Air liquide (" + this.B2[i].substr(0, 7) + ") 50 lb";
        }
        if (this.B2Desig[i] == "34") {
            //this.contenuB2 += 34;
            index = "3";
            this.B2String[i] = "Air liquide (" + this.B2[i].substr(0, 7) + ") " + this.B2Desig[i] + " kg";
        }
        this.upc.client.setStringInHoldingRegister(adresse, this.B2[i] + index).then(res => {
        }).catch(err => {
            alert("Erreur de réécriture, veuillez réessayer");
        });
    }
    removeB1() {
        for (var i = 41119; i <= 41159; i += 10) {
            this.upc.client;
        }
    }
    onChangeDesigB1(i) {
        var adresse = i * 10 + 41119;
        var index;
        this.addedBottleB1.kg[i] = this.B1Desig[i];
        this.contenuB1 = 0;
        for (var j = 0; j < this.addedBottleB1.kg.length; j++) {
            this.contenuB1 += parseFloat(this.addedBottleB1.kg[j]);
        }
        if (this.B1Desig[i] == "10") {
            index = "0";
            this.B1String[i] = "Air liquide (" + this.B1[i].substr(0, 7) + ") " + this.B1Desig[i] + " kg";
        }
        if (this.B1Desig[i] == "20") {
            index = "1";
            this.B1String[i] = "Air liquide (" + this.B1[i].substr(0, 7) + ") " + this.B1Desig[i] + " kg";
        }
        if (this.B1Desig[i] == "22.6796") {
            index = "2";
            this.B1String[i] = "Air liquide (" + this.B1[i].substr(0, 7) + ") 50 lb";
        }
        if (this.B1Desig[i] == "34") {
            index = "3";
            this.B1String[i] = "Air liquide (" + this.B1[i].substr(0, 7) + ") " + this.B1Desig[i] + " kg";
        }
        if (this.B1Desig[i] == "37.5") {
            index = "";
            this.B1String[i] = "Messer (" + this.B1[i].substr(0, 7) + ") " + this.B1Desig[i] + " kg";
        }
        this.upc.client.setStringInHoldingRegister(adresse, this.B1[i] + index).then(res => {
        }).catch(err => {
            alert("Erreur de réécriture, veuillez réessayer");
        });
    }
    onScanBarCodeB2() {
        this.scan.scan().then(res => {
            var isScanned = false;
            this.B1.forEach(item => {
                if (item == res.text) {
                    isScanned = true;
                }
            });
            this.B2.forEach(item => {
                if (item == res.text) {
                    isScanned = true;
                }
            });
            if (!isScanned) {
                if (this.B1Desig.length == 0) {
                    this.B1Ad = [];
                }
                if (this.B2Desig.length == 0) {
                    this.B2Ad = [];
                }
                if (res.text != "") {
                    if (/^\d+$/.test(res.text)) {
                        this.contenuB2 += 37.5;
                        this.upc.client.setFloatInHoldingRegister(40386, this.contenuB2).then(res => {
                        }).catch(err => {
                            this.contenuB2 -= 37.5;
                            alert("Veuillez rescanner la bouteille, l'enregistrement ne s'est pas bien fait !");
                        });
                        var text = res.text;
                        this.upc.client.setStringInHoldingRegister(this.addressage2, res.text).then((res) => {
                            this.B2String.push("Messer (" + text + ") 37.5 kg");
                            this.B2Ad.push(text);
                            this.B2Desig.push("37.5");
                            this.addedBottleB2.kg.push("37.5");
                            this.B2IsMesser.push(true);
                            this.addedBottleB2.barcodes.push(text);
                            this.addedBottleB2.reserve = "B2";
                            localStorage.setItem("bottleB2", JSON.stringify(this.addedBottleB2));
                            this.addressage2 += 10;
                            this.cd.detectChanges();
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                    }
                    else {
                        this.contenuB2 += 34;
                        var text = res.text;
                        this.upc.client.setFloatInHoldingRegister(40386, this.contenuB2).then(res => {
                        }).catch(err => {
                            this.contenuB2 -= 34;
                            alert("Veuillez rescanner la bouteille, l'enregistrement ne s'est pas bien fait !");
                        });
                        this.upc.client.setStringInHoldingRegister(this.addressage2, text + "3").then((res) => {
                            this.B2String.push("Air Liquide (" + text + ") 34 kg");
                            this.B2Ad.push(text);
                            this.B2Desig.push("34");
                            this.addedBottleB2.kg.push("34");
                            this.B2IsMesser.push(false);
                            this.addedBottleB2.barcodes.push(text);
                            this.addedBottleB2.reserve = "B2";
                            localStorage.setItem("bottleB2", JSON.stringify(this.addedBottleB2));
                            this.addressage2 += 10;
                            this.cd.detectChanges();
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                    }
                    this.B2.push(res.text);
                }
            }
            else {
                alert("Vous avez déjà scanner la bouteille !");
            }
        });
    }
    onScanBarCodeB1() {
        this.scan.scan().then(res => {
            var isScanned = false;
            this.B1.forEach(item => {
                if (item == res.text) {
                    isScanned = true;
                }
            });
            this.B2.forEach(item => {
                if (item == res.text) {
                    isScanned = true;
                }
            });
            if (!isScanned) {
                if (this.B1Desig.length == 0) {
                    this.B1Ad = [];
                }
                if (this.B2Desig.length == 0) {
                    this.B2Ad = [];
                }
                if (res.text != "") {
                    //alert(res.text.substr(0,8))
                    //Synchro plan 
                    if (/^\d+$/.test(res.text)) {
                        this.contenuB1 += 37.5;
                        /*this.upc.client.setFloatInHoldingRegister(40384,this.contenuB1).then(res=>{
            
                        }).catch(err=>{
                          this.contenuB1 -= 37.5;
                          alert("Veuillez rescanner la bouteille !");
                        })*/
                        var text = res.text;
                        this.upc.client.setStringInHoldingRegister(this.addressage, res.text).then((res) => {
                            this.B1String.push("Messer (" + text + ") 37.5 kg");
                            this.B1Ad.push(text);
                            this.B1Desig.push("37.5");
                            this.addedBottleB1.kg.push("37.5");
                            this.B1IsMesser.push(true);
                            this.addedBottleB1.barcodes.push(text);
                            this.B1.push(text);
                            this.addedBottleB1.reserve = "B1";
                            localStorage.setItem("bottleB1", JSON.stringify(this.addedBottleB1));
                            this.addressage += 10;
                            this.cd.detectChanges();
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                    }
                    else {
                        this.contenuB1 += 34;
                        /*this.upc.client.setFloatInHoldingRegister(40384,this.contenuB1).then(res=>{
            
                        }).catch(err=>{
                          alert("Veuillez rescanner la bouteille !");
                        })*/
                        var text = res.text;
                        this.upc.client.setStringInHoldingRegister(this.addressage, res.text + "3").then((res) => {
                            this.B1String.push("Air Liquide (" + text + ") 34 kg");
                            this.B1Desig.push("34");
                            this.B1Ad.push(text);
                            this.addedBottleB1.kg.push("34");
                            this.B1IsMesser.push(false);
                            this.addedBottleB1.barcodes.push(text);
                            this.addedBottleB1.reserve = "B1";
                            this.B1.push(text);
                            localStorage.setItem("bottleB1", JSON.stringify(this.addedBottleB1));
                            this.addressage += 10;
                            this.cd.detectChanges();
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                    }
                }
            }
            else {
                alert("Vous avez déjà scanner la bouteille !");
            }
        });
    }
    changeContB1() {
        this.upc.client.setFloatInHoldingRegister(40157, this.contenuB1 / 0.001974).then(res => {
        }).catch(err => {
            alert(JSON.stringify(err));
        });
    }
    changeContB2() {
        this.upc.client.setFloatInHoldingRegister(40165, this.contenuB2 / 0.001974).then(res => {
        }).catch(err => {
            alert(JSON.stringify(err));
        });
    }
    changeRes(i) {
        //this.upc.client.setIntInHoldingRegister(40011,1,2).then(res=>{
        this.upc.client.setIntInHoldingRegister(40150, 1, i).then(res => {
            if (i == 1) {
                this.highlightB1 = true;
                this.highlightB2 = false;
            }
            else if (i == 2) {
                this.highlightB2 = true;
                this.highlightB1 = false;
            }
            this.cd.detectChanges();
        });
        //})
    }
    onSynchroCeint() {
        alert(localStorage.getItem("bottleB1"));
        alert(localStorage.getItem("bottleB2"));
        /*if(this.platform.is("ios")){
         WifiWizard2.iOSDisconnectNetwork("BBAM").then(async res=>{
           var loading = await this.loadingCTRL.create({
             message : "Synchronisation avec le Serveur en cours...",
             duration : 10000
           })
           loading.present();
           await setTimeout(()=>{
             if(this.addedBottleB1.barcodes.length > 0){
               this.addedBottleB1.endate = new Date().toISOString().substr(0,16);
               this.addedBottleB1.upcNameId = "Test4G1";
             
               this.upcv3Service.addBottleBelt(this.addedBottleB1,this.token).subscribe(res=>{
                 //alert(JSON.stringify(res));
                 loading.dismiss();
               })
             }
             if(this.addedBottleB2.barcodes.length > 0) {
               this.addedBottleB2.endate = new Date().toISOString().substr(0,16);
               this.addedBottleB2.upcNameId = "Test4G1";
               this.upcv3Service.addBottleBelt(this.addedBottleB2,this.token).subscribe(res=>{
                 //alert(JSON.stringify(res));
                 loading.dismiss();
               })
             }
             if(this.removedBottle.barcodes.length > 0) {
               this.removedBottle.upcNameId = "Test4G1";
               
                 this.upcv3Service.removeFromCeint(this.removedBottle,this.token).subscribe(res=>{
                   loading.dismiss();
                   alert(JSON.stringify(res));
                 })
             }
            },5000)
           })
        }
        else{
          WifiWizard2.disconnect("BBAM").then(async res=>{
           var loading = await this.loadingCTRL.create({
             message : "Synchronisation avec le Serveur en cours...",
             duration : 10000
           })
           loading.present();
           await setTimeout(()=>{
             if(this.addedBottleB1.barcodes.length > 0){
               this.addedBottleB1.endate = new Date().toISOString().substr(0,16);
               this.addedBottleB1.upcNameId = "Test4G1";
             
               this.upcv3Service.addBottleBelt(this.addedBottleB1,this.token).subscribe(res=>{
                 //alert(JSON.stringify(res));
                 loading.dismiss();
               })
             }
             if(this.addedBottleB2.barcodes.length > 0) {
               this.addedBottleB2.endate = new Date().toISOString().substr(0,16);
               this.addedBottleB2.upcNameId = "Test4G1";
               this.upcv3Service.addBottleBelt(this.addedBottleB2,this.token).subscribe(res=>{
                 //alert(JSON.stringify(res));
                 loading.dismiss();
               })
             }
             if(this.removedBottle.barcodes.length > 0) {
               this.removedBottle.upcNameId = "Test4G1";
               
                 this.upcv3Service.removeFromCeint(this.removedBottle,this.token).subscribe(res=>{
                   loading.dismiss();
                   alert(JSON.stringify(res));
                 })
             }
            },5000)
          })
        }*/
        /*WifiWizard2.iOSConnectNetwork("freebox_NTHGTY","soleil06").then(async res=>{
          var loading = await this.loadingCTRL.create({
            message : "Synchronisation avec le Serveur en cours...",
            duration : 10000
          })
          loading.present();
          if(this.addedBottleB1.barcodes.length > 0){
            this.addedBottleB1.endate = new Date().toISOString().substr(0,16);
            this.addedBottleB1.upcNameId = "Test4G1";
          
            this.upcv3Service.addBottleBelt(this.addedBottleB1,this.token).subscribe(res=>{
              //alert(JSON.stringify(res));
              loading.dismiss();
            })
          }
          if(this.addedBottleB2.barcodes.length > 0) {
            this.addedBottleB2.endate = new Date().toISOString().substr(0,16);
            this.addedBottleB2.upcNameId = "Test4G1";
            this.upcv3Service.addBottleBelt(this.addedBottleB2,this.token).subscribe(res=>{
              //alert(JSON.stringify(res));
              loading.dismiss();
            })
          }
          if(this.removedBottle.barcodes.length > 0) {
            this.removedBottle.upcNameId = "Test4G1";
            
              this.upcv3Service.removeFromCeint(this.removedBottle,this.token).subscribe(res=>{
                alert(JSON.stringify(res));
              })
          }
    
        })*/
    }
};
AddbottleceintPage = tslib_1.__decorate([
    Component({
        selector: 'app-addbottleceint',
        templateUrl: './addbottleceint.page.html',
        styleUrls: ['./addbottleceint.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform, NgZone, Network, BarcodeScanner, ModalController, LoadingController, ChangeDetectorRef, Upcv3serviceService, Storage, Hotspot, GlobalService])
], AddbottleceintPage);
export { AddbottleceintPage };
//# sourceMappingURL=addbottleceint.page.js.map