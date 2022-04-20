import { Component, OnInit } from '@angular/core';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { Bottle } from '../model/bottle';
import {Storage} from "@ionic/storage";
import { ModalController } from '@ionic/angular';
import { Code } from '../api/ApiResponse';
import { GlobalService } from '../api/global.service';

@Component({
  selector: 'app-rackcontent',
  templateUrl: './rackcontent.page.html',
  styleUrls: ['./rackcontent.page.scss'],
})
export class RackcontentPage implements OnInit {
  rack : string;
  rackContent : Bottle[];
  designation = [];
  isMesser = [];
  token;

  constructor(private upcv3Service : Upcv3serviceService,private storage : Storage,private modal : ModalController,private global : GlobalService) { }

  ngOnInit() {
    this.storage.get("token").then(val=>{
      this.token = val;
      this.upcv3Service.getBottleFromRack(val,this.rack).subscribe(res=>{
          
          this.rackContent = res.result;
          this.rackContent.forEach(item=>{
            if(item.bottleType.designation == 37.5){
              this.isMesser.push(true);
              this.designation.push("37.5");
            }
            else {
              this.isMesser.push(false);
              this.designation.push(""+item.bottleType.designation);
            }
          })
      })
    })
    
  }
  onClose() {
    this.modal.dismiss();
  }
  onRetourFourn() {
    this.upcv3Service.removeRack(this.rack,this.token).subscribe(res=>{
        if(res.code === Code.BOTTLE_DELETED){
          this.modal.dismiss();
        }
        
    })
  }

}
