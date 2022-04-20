import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../api/global.service';
import { ModalController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {Storage} from '@ionic/storage';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { RackcontentPage } from '../rackcontent/rackcontent.page';
import { Router } from '@angular/router';
import { AddbottlemodalPage } from '../addbottlemodal/addbottlemodal.page';

@Component({
  selector: 'app-retfournmodal',
  templateUrl: './retfournmodal.page.html',
  styleUrls: ['./retfournmodal.page.scss'],
})
export class RetfournmodalPage implements OnInit {
  token;
  constructor(private global : GlobalService,private modal : ModalController,private modalravk : ModalController, private scan : BarcodeScanner,private storage : Storage,private upc3Service : Upcv3serviceService,private router : Router) { }

  ngOnInit() {}

  onClose() {
    this.modal.dismiss();
  }
  async onRemRack(){
    this.storage.get('token').then(res=>{
      this.token = res;
    })
    

    this.scan.scan().then(async res=>{
      if(res.text != ''){
        var text = res.text;
        this.upc3Service.getBottleFromRack(this.token,res.text).subscribe(async res=>{
          
          if(res.result.length> 0){
            var modal = await this.modalravk.create({
              component : RackcontentPage,
              componentProps : {
                rack : text
              }
            })
            modal.present();
          } else {
            alert("Aucune bouteille est associée à ce Rack !");
          }
        },err=>{
          alert(JSON.stringify(err));
        })
        
        
      }
      
    })
  }
  async onRemBot(){
    //this.scan.scan().then(async res=>{
      var modal = await this.modalravk.create({
        component : AddbottlemodalPage,
        componentProps : {barcode : "ABC-abc-1234",mode : 0}
      })
      modal.present();
    //})
  }

}
