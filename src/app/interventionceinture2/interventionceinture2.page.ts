import { Component, OnInit } from '@angular/core';
import { Upcv3serviceService } from '../api/upcv3service.service';
import {GlobalService} from '../api/global.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { WifiWizard2 } from '@ionic-native/wifi-wizard-2/ngx';
import { LoadingController, Platform } from '@ionic/angular';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';


@Component({
  selector: 'app-interventionceinture2',
  templateUrl: './interventionceinture2.page.html',
  styleUrls: ['./interventionceinture2.page.scss'],
})
export class Interventionceinture2Page implements OnInit {
  

  constructor(private upcv3service : Upcv3serviceService,
    private storage : Storage,
    private router : Router,
    private global:GlobalService,
    private wifiWizard2 : WifiWizard2,
    private platform : Platform,
    private hotspot : Hotspot) { }

    async ngOnInit() {
      
    /* await this.platform.ready().then(()=>{this.wifiWizard2.connect("BBAM", true, "BioBeltService", "WPA").then((res)=>{alert(JSON.stringify(res))}).catch(error => {alert(JSON.stringify(error))}); 
    }).catch(error => {alert(JSON.stringify(error))}) */ 
      
     
    }


}
