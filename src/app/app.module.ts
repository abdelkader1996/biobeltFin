import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Hotspot } from '@ionic-native/hotspot/ngx';
import { WifiWizard2 } from '@ionic-native/wifi-wizard-2/ngx';
import { AddbottlemodalPage } from './addbottlemodal/addbottlemodal.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { RackcontentPage } from './rackcontent/rackcontent.page';
import { GlobalService } from './api/global.service';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';

@NgModule({
  declarations: [AppComponent,RackcontentPage],
  entryComponents: [RackcontentPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Network,
    Hotspot,
    WifiWizard2,
    Geolocation,
    GlobalService,
    Diagnostic,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
