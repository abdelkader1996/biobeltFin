import { Component, OnInit } from '@angular/core';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { GlobalService } from '../api/global.service';

declare var WifiWizard2: any;

@Component({
  selector: 'app-testmode',
  templateUrl: './testmode.page.html',
  styleUrls: ['./testmode.page.scss'],
})
export class TestmodePage implements OnInit {
  wifinfo = [];
  constructor(
    private global : GlobalService,
    private platform : Platform,
    private alrtContr : AlertController,
    private toastCtrl : ToastController
  ){
    this.global.checkMode()
   }

  async ngOnInit() {
    
    //this.wifinfo.push(localStorage.getItem("ssid"));
    if(this.platform.is("android")){
      WifiWizard2.scan().then(res=>{
        //alert(JSON.stringify(res));
        res.forEach((item)=>{
          
          if(item.SSID.includes("BBAM") ){
            this.wifinfo.push(item.SSID);
          }
        })
      })
    } else if(this.platform.is("ios")){
        //this.wifinfo = ["BBAM","BBAM2","BBAM3","BBAM4","BBAM5","BBAM6","BBAM7","BBAM8","BBAM9"];
        
        WifiWizard2.getConnectedSSID().then(async res=>{
          if(!res.includes("BBAM")){
            localStorage.removeItem("isConnected");
            this.presentAlert();
          } else {
            let toast = await this.toastCtrl.create({
              message : "Vous êtes déjà connecté à l'UPC",
              duration : 3000,
              position : "middle"
            })
            toast.present();
          }
        })
        
    }
    
  }
  onConnect (ssid) {
    
    localStorage.setItem("ssid",ssid);
    localStorage.removeItem("isConnected");
    
  }
  async presentAlert() {
    const alrt = await this.alrtContr.create({
      cssClass: 'my-custom-class',
      header: 'Connexion',
      message: "Veuillez  vous connecter à l'UPC via le WIFi",
      buttons: [{text : 'OK', handler: ()=>{
      
          this.global.upcmodbus.client.getStringFromHoldingRegister(40001,10).then(res=>{
              localStorage.setItem("upcname",res);
              alert("UPC: "+res);
          }).catch(err=>{
            this.representAlert();
          })
      
      }}]
    });

    await alrt.present();

    const { role } = await alrt.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async representAlert() {
      const alrt = await this.alrtContr.create({
        cssClass: 'my-custom-class',
        header: 'Connexion',
        message: "Veuillez  vous connecter à l'UPC via le WIFi",
        buttons: [{text : 'OK', handler: ()=>{
         
            this.global.upcmodbus.client.getStringFromHoldingRegister(40001,10).then(res=>{
                localStorage.setItem("upcname",res);
            }).catch(err=>{
              this.representAlert();
            })
         
        }},{text : "Annuler"}]
      });

      await alrt.present();

      const { role } = await alrt.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
  }

}
