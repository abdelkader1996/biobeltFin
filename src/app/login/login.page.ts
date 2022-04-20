import { Component, OnInit, ViewChild } from '@angular/core';
import {Upcv3serviceService} from '../api/upcv3service.service';
import { ToastController, NavController, LoadingController, Platform } from '@ionic/angular';
import {User} from '../model/user';
import { Storage } from '@ionic/storage';
import {Hotspot} from '@ionic-native/hotspot/ngx';
import { Network } from '@ionic-native/network/ngx';

declare var WifiWizard2: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('email', {static: false}) email: any;
  private username: string;
  private password: string;
  private needToLog = true;

  constructor(
    private upc3serv:Upcv3serviceService,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private storage : Storage,
    private platform : Platform,
    private hotspot : Hotspot,private network : Network

  ) { }
  async ngOnInit() {
    this.storage.set("reconnect", true)
    localStorage.setItem("BBAM",null);
    await this.storage.get('user').then(async res=>{
     this.username=res;
    })  
    await this.storage.get('pass').then(async res=>{
      this.password=res;
     })  
    
   /*
    await this.storage.get('remember').then(async res=>{
      if (res === 1){  
        this.needToLog = false;           
        this.navCtrl.navigateRoot('home');
      }
      else {
        this.needToLog = true;
      }
    })  */  
  }
  
  
  async login() {
    // Show loading
    const loading = await this.loadingCtrl.create({
      message: 'Connexion en cours...'
    });
    loading.present();
   
    // Request
    let user :User = new User();
    user.username = this.username;
    user.password = this.password;
    this.upc3serv.login(user).subscribe(
        async data => {
          // Hide loading
          loading.dismiss();

          // Check state
          if (data.result) {
            
            this.storage.set('token',data.result);
            localStorage.setItem("token",data.result);
            this.storage.set('user',user.username);
            this.storage.set('pass',user.password);
            this.storage.set('remember',1);            
            this.navCtrl.navigateRoot('home'); 
          
          } else {
            // Check code
            switch (data.code) {
              case 'TOKEN_WRONG_IDENTIFIERS':
                let toast = await this.toastCtrl.create({
                  message: 'Identifiants incorrects !',
                  duration: 3000,
                  position: 'top'
                });
                toast.present();
                break;
            }
          }
        },
        async err => {
          alert(JSON.stringify(err))
          // Hide loading          
          loading.dismiss();

          let toast = await this.toastCtrl.create({
            message: 'Impossible de se connecter à internet !',
            duration: 3000,
            position: 'bottom'
          });
          toast.present()
        }
    );
  }
}

