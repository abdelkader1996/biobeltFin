import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bottle-types-modal',
  templateUrl: './bottle-types-modal.page.html',
  styleUrls: ['./bottle-types-modal.page.scss'],
})
export class BottleTypesModalPage implements OnInit {

  constructor(private modal:ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modal.dismiss({    
                    'dismissed': true  
                });
      }  

}
