import { Component, OnInit, NgZone } from '@angular/core';
import {Upcv3serviceService} from '../api/upcv3service.service';
import { Storage } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import {GlobalService} from '../api/global.service';
import { Site } from '../model/site';
import { Code } from '../api/ApiResponse';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Network } from '@ionic-native/network/ngx';


@Component({
  selector: 'app-bottles',
  templateUrl: './bottles.page.html',
  styleUrls: ['./bottles.page.scss']
})
export class BottlesPage implements OnInit {
  token:string;
  i = 0;
  y = 0;
  listBottles:any;
  booleanB1=false;
  booleanB2=false;
  sites:Site;
  isNotScanned=true;
  upc : UPCModbus;
  addressage = 41119;
  addressage2 = 41169;
  bottle = {
    name : '',
    designation : [],
    brand : [],
    barcodes: [],
    bottleType: [],
    stock: '',
    date: new Date().toISOString().substring(0, 10)
  }
  constructor(private upc3service:Upcv3serviceService,
              private storage:Storage,
              private global:GlobalService,
              private barcode:BarcodeScanner,
              private router:Router,private platform : Platform,private hospot : Hotspot,private ngZone : NgZone,private network : Network) { 
                
                if(this.platform.is("android")){
                  this.hospot.connectToWifi("BBAM","BioBeltService").then(res=>{
                    this.platform.ready().then(
                      readySource => {
                        if (readySource == 'cordova') {
                          
                          this.upc = new UPCModbus(state => {
                            this.ngZone.run(() => {
                              // Force refresh UI
                            });
                          });
                          alert("On Connection UPC");
                          this.network.onConnect().subscribe(() => {
                            if (this.network.type === this.network.Connection.WIFI) {
                              this.upc.reconnect();
                             
                              this.upc.client.getStringFromHoldingRegister(40001,20).then(res=>{
                                alert(JSON.stringify(res));
                              }).catch(error=>{
                                alert(JSON.stringify(error));
                              })
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
                        
                        this.upc = new UPCModbus(state => {
                          this.ngZone.run(() => {
                            // Force refresh UI
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
                }
              }

  async ngOnInit() {
    await this.storage.get('token').then(val => this.token = val);
    await this.upc3service.getAllBottleTypes(this.token).subscribe(res=>{
        this.listBottles = res.result;
        alert(JSON.stringify(this.listBottles));
    });
    await this.upc3service.getSites(this.token).subscribe(res =>{
      switch(res.code){
        case Code.SITE_RECOVERED :
         
          res.result.forEach(json=> {
            if (json.name === this.global.upc3.upcNameId){
              this.sites = json;
              alert(JSON.stringify(json));
              this.bottle.name = json.name;
              if (json.stockClient !== null){
                this.bottle.stock = json.stockClient;
                alert(json.stockClient);
              }
            }
          })
          break;
        case Code.UNAUTHORIZED :
          alert("Erreur, vous n'êtes pas autorisé à utiliser l'application mobile !")
          break;
      }
    })
    
  }
  async refill() {
    //alert(this.upc.client.floatToRegister(this.refillRealAdded/0.001974));
    //const loading = await this.loadingctrl.create({ message: 'Remplissage en cours' });
    //await loading.present();
    /*if (this.refillTotalAdded > 0){
      this.upc.client.setFloatInHoldingRegister(40157,this.refillRealAdded/0.001974);
      //alert("Remplissage sur B1 effectué !")
    }
    if(this.refillTotalAdded2 > 0){
      this.upc.client.setFloatInHoldingRegister(40165,this.refillRealAdded2/0.001974); 
      //alert("Remplissage sur B2 effectué !");
    }*/
   

    
    
    alert(this.global.B1[this.i]['barcode'])
    alert(this.global.B2[this.y]['barcode'])
    //for( var i =0 ; i<this.global.B1.length;i++){
      setTimeout(()=>{
        this.upc.client.connect();
      },500)
      
      setTimeout(()=>{
        
        this.upc.client.setStringInHoldingRegister(this.addressage,this.global.B1[this.i]['barcode'].substr(0,8)).then(
          res=>{
            this.booleanB1 = true;
            this.addressage += 10;
            this.i++;
            alert("Ecriture sur l'upc en B1, état : "+JSON.stringify(res));
          }    
        ).catch(error=>{
          alert(JSON.stringify(error));
        });

        this.upc.client.setStringInHoldingRegister(this.addressage2,this.global.B2[this.y]['barcode'].substr(0,8)).then(
          res=>{
            this.booleanB2 = true;
            this.addressage2 += 10;
            this.y++;
            alert("Ecriture sur l'upc en B2, état : "+JSON.stringify(res));
          }    
        ).catch(error=>{
          alert(JSON.stringify(error));
        });


      },1000)
      
      
    //}

    
    /*for( var i =0 ; i<this.global.B2.length;i++){
      if(this.global.B2['barcode'].length === 7){
        this.global.B2['barcode'] += "   ";
      }
      this.upc.client.setStringInHoldingRegister(addressage,this.global.B2['barcode']).then(
        res=>{
          this.booleanB2 = true;
        }
      );
      addressage += 10;
    }*/


    setInterval(()=> {
      if(this.booleanB1){
        //loading.dismiss();
      }
    },500);
    
    
    
    //this.upc.client.setIntInHoldingRegister(40120,2,(new Date(this.start9).getHours()*3600)+(new Date(this.start9).getMinutes()*60));
    //this.router.navigate(["move-bouteille"]); 

    

  }

  onScanBarCodeB1(){
    this.barcode.scan().then(res =>{
      var marque:string;
      var designationMesser = 0;
      if (/^\d+$/.test(res["text"])){
        marque = "Messer";
        designationMesser = 37.5;
      }
      else {
        marque = "Air liquide";
        
      }
      if(this.global.B1.length > 0){
        this.global.B1.forEach(item=>{
          if (item['barcode'] === res['text']){
            this.isNotScanned = false;
          }
        });
      }
      if(this.global.B2.length > 0){
        this.global.B2.forEach(item=>{
          if (item['barcode'] === res["text"]){
            this.isNotScanned = false;
          }
        });
      }
      
      if (res['text'] !== "" && this.isNotScanned){
        if (designationMesser === 37.5){
          this.global.B1.push({'barcode':res['text'],'marque':marque,'designation':designationMesser});
          this.global.designationB1.push(designationMesser);
        }
        else {
          this.global.B1.push({'barcode':res['text'],'marque':marque,'designation':0});
          this.global.designationB1.push(0);
        }
        
      }
      else if (!this.isNotScanned){
        alert("La bouteille a déjà été scanner !");
      }
      this.isNotScanned = true;
    })
    .catch(err=>{
      alert(JSON.stringify(err));
    });
    
  }
  onScanBarCodeB2(){
    this.barcode.scan().then(res =>{
      var marque:string;
      var designationMesser:number=0;
      if (/^\d+$/.test(res["text"])){
        marque = "Messer";
        designationMesser = 37.5;
      }
      else {
        marque = "Air liquide";
      }
      if(this.global.B1.length > 0){
        this.global.B1.forEach(item=>{
          if (item['barcode'] === res['text']){
            this.isNotScanned = false;
          }
        });
      }
      if(this.global.B2.length > 0){
        this.global.B2.forEach(item=>{
          if (item['barcode'] === res["text"]){
            this.isNotScanned = false;
          }
        });
      }
      
      if (res['text'] !== "" && this.isNotScanned){
          if (designationMesser === 37.5){
            this.global.B2.push({'barcode':res['text'],'marque':marque,'designation':designationMesser});
            this.global.designationB2.push(designationMesser);
          }
          else {
            this.global.B2.push({'barcode':res['text'],'marque':marque,'designation':0});
            this.global.designationB2.push(0);
          }
          
          
      }
      else if(!this.isNotScanned){
        alert("La bouteille a déjà été scanner !");
      }
      this.isNotScanned = true;
    })
    .catch(err=>{
      alert(JSON.stringify(err));
    });
  }
  setDesignationB1(i,$event){
    
    this.global.designationB1[i] = $event.target.value;
    
    //this.global.B1[i].designation = this.global.B1[i].designation;
     
  }
  setDesignationB2(i,$event){
    this.global.designationB2[i] = $event.target.value;
    
    //this.global.B2[i].designation = this.global.B2[i].designation;
  }
  deleteB1() {
    this.global.B1 = [];
    this.global.designationB1 = [];
  }
  deleteB2(){
    this.global.B2 = [];
    this.global.designationB2 = [];
  }
  addBottleId(){
    for(var i =0;i<Object.keys(this.global.B1).length;i++){
      for(var j =0;j<Object.keys(this.listBottles).length;j++){
        
        if(this.listBottles[j].brand === this.global.B1[i].marque && this.listBottles[j].designation == this.global.designationB1[i]){
          this.bottle.bottleType.push(this.listBottles[j].id);
          break;
        } 
      }
    }
    for(var i =0;i<Object.keys(this.global.B2).length;i++){
      for(var j =0;j<Object.keys(this.listBottles).length;j++){
        
        if(this.listBottles[j].brand === this.global.B2[i].marque && this.listBottles[j].designation == this.global.designationB2[i]){
          this.bottle.bottleType.push(this.listBottles[j].id);
          break;
        }
      }
    }
    
  }
  addToBelt(){
    this.global.B1.forEach(item=>{
        this.bottle.brand.push(item.marque);
        this.bottle.barcodes.push(item.barcode);
        
    });
    this.global.designationB1.forEach(item=>{
      this.bottle.designation.push(item);
    });
    this.global.B2.forEach(item=>{
      this.bottle.brand.push(item.marque);
      this.bottle.barcodes.push(item.barcode);

    });
    this.global.designationB2.forEach(item=>{
      this.bottle.designation.push(item);
    })
    this.addBottleId();
    
    this.upc3service.addToStock(this.bottle,this.token).subscribe(res=>{
      if (res.code === Code.BOTTLE_CREATED){
        alert('Bouteille ajouté à la ceinture !');
        this.global.B1 = [];
        this.global.B2 = [];
        this.global.designationB1 = [];
        this.global.designationB2 = [];
        this.router.navigate(["removebottle"]);
      }
      else {
        alert('Erreur lors du rajout de la bouteille !');
      }
    })

  }
  async onContinue(){
    setTimeout(()=>{
        this.upc.client.connect;
    },5000)
    setTimeout(()=>{
      this.upc.client.getStringFromHoldingRegister(41119,10).then(data=>{
        alert(JSON.stringify(data));
      }).catch(error=>{alert(JSON.stringify(error))});
    },10000)
   
    /*this.global.B1 = [];
        this.global.B2 = [];
        this.global.designationB1 = [];
        this.global.designationB2 = [];
        this.router.navigate(["removebottle"]);*/
  }
}
