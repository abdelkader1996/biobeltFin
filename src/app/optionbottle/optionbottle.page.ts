import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Upcv3serviceService } from '../api/upcv3service.service';
import {Storage} from "@ionic/storage";
import { Code } from '../api/ApiResponse';
import { Router } from '@angular/router';
import { Platform, ModalController } from '@ionic/angular';
import { Stock } from '../model/stock';
import { AddbottlemodalPage } from '../addbottlemodal/addbottlemodal.page';
import { GlobalService } from '../api/global.service';
import { RackcontentPage } from '../rackcontent/rackcontent.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { RetfournmodalPage } from '../retfournmodal/retfournmodal.page';
import { UPCModbus } from '../model/upcv3/upcmodbus';
declare var WifiWizard2: any;

@Component({
  selector: 'app-optionbottle',
  templateUrl: './optionbottle.page.html',
  styleUrls: ['./optionbottle.page.scss'],
})
export class OptionbottlePage implements OnInit {
  name = "arrow-dropright";
  isStock = false;
  stock : Stock[];
  token;
  upc : UPCModbus;
  

  constructor(private upc3Service : Upcv3serviceService,private storage : Storage,private router : Router,private platform : Platform,private modal : ModalController,private global : GlobalService, private scan : BarcodeScanner,private ngZone : NgZone,private cd : ChangeDetectorRef) { this.global.checkMode()}
  
  async ngOnInit() {}
  ionViewWillEnter(){
    
    this.storage.get("token").then(val=>{
      this.token = val;
    
   })
    
    
    
    
  }
  onSynchro() {
    this.global.onSynchroB1B2(this.token);
  }
  async onAddBottleCeint() {
    this.router.navigate(['addbottleceint']);
  }
  async onChooseStock(i) {
    localStorage.setItem("adds",i);
    this.router.navigate(['choosestock']);
  }
  async remRack() {
    
    var modal = await this.modal.create({
      component : RetfournmodalPage,
      
    })
    modal.present();
  }
  goStock() {
    if(!this.isStock){
      this.name = "arrow-dropdown";
      this.isStock = true;
      
      this.upc3Service.getAllStock(localStorage.getItem("token")).subscribe(res=>{
        
        this.stock = res.result;
      },err=>{
        alert("Erreur de Connexion");
      })
    }
    else {
      this.name = "arrow-dropright";
      this.isStock = false;
    } 
   
  }
  getUpcStateConnexion() {
    this.platform.ready().then(async res=>{
      this.upc = new UPCModbus(state => {
        this.ngZone.run(() => {
          // Force refresh UI
          
            
          
        });
      });

      await this.upc.client.connect();

      
    })
  }

  

}

