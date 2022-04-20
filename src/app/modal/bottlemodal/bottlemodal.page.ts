import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {Upcv3serviceService} from '../../api/upcv3service.service';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import {GlobalService} from '../../api/global.service';
@Component({
  selector: 'app-bottlemodal',
  templateUrl: './bottlemodal.page.html',
  styleUrls: ['./bottlemodal.page.scss'],
})
export class BottlemodalPage implements OnInit {
  token:string;
  listBottles:any;
  res;
  
  cpt=0;
  bouteilles = [{
    'nom' : 'Air liquide 22.68 kg',
    'designation' : [],
    'qty' : '',
    'text' : '',
    'cpt' : 0
},
{
  'nom':'Air liquide 10.00 kg',
  'designation' : [],
  'qty' : '',
  'text' : '',
  'cpt' :0
},
{
  'nom':'Messer 37.50 kg',
  'designation' : [],
  'qty' : '',
  'text' : '',
  'cpt' : 0
},
{
  'nom' : 'Air liquide 180.00 kg',
  'designation' : [],
  'qty' : '',
  'text' : '',
  'cpt':0
},
{
  'nom': 'Air liquide 20.00 kg',
  'designation' : [],
  'qty' : '',
  'text' : '',
  'cpt' :0
},
{
  'nom':'Air liquide 100.00 kg',
  'designation' : [],
  'qty' : '',
  'text' : '',
  'cpt' : 0
},
{
  'nom' : 'Air liquide 34.00 kg',
  'designation' : [],
  'qty' : '',
  'text' : '',
  'cpt' : 0
}];

  constructor(private barcodeScanner:BarcodeScanner,
              private upc3service:Upcv3serviceService,
              private storage:Storage,
              private modal:ModalController,
              private global: GlobalService) { }

  async ngOnInit() {
    if(this.compareIfNotNull(this.global.B1) && this.res === 'B1'){
      this.bouteilles = this.global.B1;
    }
    if (this.compareIfNotNull(this.global.B2) && this.res === 'B2'){
      this.bouteilles = this.global.B2;
    }
    await this.storage.get('token').then(val => this.token = val);
    await this.upc3service.getAllBottleTypes(this.token).subscribe(res=>{
        this.listBottles = res.result;
        
    });
  }
  compareIfNotNull(tab){
    for (var i=0;i<tab.length;i++){
      if (tab[i].qty !== ''){
        return true
      }
    }
    return false;
  }
  onChange(i) {
    if(this.bouteilles[i].qty === '' || parseInt(this.bouteilles[i].qty)-this.bouteilles[i].cpt === 0){
      this.bouteilles[i].qty = '';
      return '';
    }
    else{
      return this.bouteilles[i].text = "("+(parseInt(this.bouteilles[i].qty)-this.bouteilles[i].cpt)+" à scanner)";

    }
  }
  async onBottleScan(i){
    
    this.barcodeScanner.scan().then(res=>{
      
      this.bouteilles[i].designation.push(res["text"]);      
      
      this.bouteilles[i].cpt++;
    }
      
    ).catch(err =>{
      alert(JSON.stringify(err));
    });
    
    
  }
  async onDismiss(){
    if (this.res === 'B1'){
      this.global.B1 = this.bouteilles;
    }
    if(this.res === 'B2') {
      this.global.B2 = this.bouteilles
    }
    await this.modal.dismiss();
  }

}
