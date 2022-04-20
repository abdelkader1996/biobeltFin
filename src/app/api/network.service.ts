import { Injectable, NgZone } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Events } from '@ionic/angular';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { GlobalService } from './global.service';

export enum ConnectionStatusEnum {
  Online,
  Offline
}

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  previousStatus;
  upc : UPCModbus;
  constructor( public network: Network,
    public eventCtrl: Events,public ngZone : NgZone) { 
      this.previousStatus = ConnectionStatusEnum.Online;
    }


    public initializeNetworkEvents(): void {
      this.upc = new UPCModbus(state => {
        this.ngZone.run(() => {
          // Force refresh UI
          
            
            //this.readDiffusionParameters();
          
        });
      });
      this.upc.client.connect();
      this.network.onDisconnect().subscribe(() => {
          if (this.previousStatus === ConnectionStatusEnum.Online) {
              this.eventCtrl.publish('network:offline');
          }
          
          this.previousStatus = ConnectionStatusEnum.Offline;
      });
      this.network.onConnect().subscribe(() => {
          if (this.previousStatus === ConnectionStatusEnum.Offline) {
              this.eventCtrl.publish('network:online');
          }
          
          this.previousStatus = ConnectionStatusEnum.Online;
      });
      /*setInterval(()=>{
          this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
            this.eventCtrl.publish('network:offline');
          }).catch(err=>{
            this.eventCtrl.publish('network:online');
          })
      },500)*/
  }
}
