import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Upcv3serviceService } from '../api/upcv3service.service';
import {Storage} from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { GlobalService } from '../api/global.service';
import { Platform } from '@ionic/angular';
import { UPCModbus } from '../model/upcv3/upcmodbus';

@Component({
  selector: 'app-choosestock',
  templateUrl: './choosestock.page.html',
  styleUrls: ['./choosestock.page.scss'],
})
export class ChoosestockPage implements OnInit {
  stock = [];
  upc : UPCModbus;
  lonlat = [{lat : 43.6667,lon : 7.15},{lat : 42.0396,lon : 9.01289},{lat : 43.6107,lon : 3.8767}]
  constructor(private upc3Service : Upcv3serviceService,private storage : Storage,private geolocation : Geolocation,private router: Router,private global : GlobalService,private platform : Platform,private ngZone : NgZone,private cd : ChangeDetectorRef) { }

  ngOnInit() {
    this.getUpcStateConnexion();
    this.storage.get("token").then(val=>{
      this.upc3Service.getAllStock(val).subscribe(res=>{
        var stock = res.result;
        //mettre tous les sites dans la variable stock
        this.stock=stock;
        console.log("stock retr:");
        console.log(stock);
        this.geolocation.getCurrentPosition().then(pos=>{
          this.lonlat.forEach((item,index)=>{
            if(this.getDistanceFromLatLonInKm(pos.coords.latitude,pos.coords.longitude,item.lat,item.lon)< 20){
                this.stock.push(stock[index]);
            }
          })
          
        })
      })
    })
    
  }
  async goToStock(id) {
    await this.storage.set("stockid",JSON.stringify(id));
    this.router.navigate(['stock']);
  }
  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  deg2rad(deg) {
    return deg * (Math.PI/180)
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
