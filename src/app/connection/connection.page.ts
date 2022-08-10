import { Component, OnInit, NgZone, ChangeDetectorRef } from "@angular/core";
import { Platform, LoadingController, Events } from "@ionic/angular";
import { Hotspot, HotspotNetwork } from "@ionic-native/hotspot/ngx";
import { UPCModbus } from "../model/upcv3/upcmodbus";
import { GlobalService } from "../api/global.service";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { CorrespondancesRegistres } from "../model/upcv3/correspondancesRegistres";

declare var WifiWizard2: any;

@Component({
  selector: "app-connection",
  templateUrl: "./connection.page.html",
  styleUrls: ["./connection.page.scss"],
})
export class ConnectionPage {
  do;
  check = false;
  current_ssid = "NO WIFI";
  stored_ssid = "NO WIFI";
  password_ssid = "";
  connection_modbus = false;
  isLoading = false;
  tryToRead = false;

  correspondancesRegistres: CorrespondancesRegistres;

  upc: UPCModbus;
  mode = "";
  level = 0;
  ber = 0;
  bertab = [];
  fw = 0;
  levelTab = [];
  dureTab = [];
  redBackground = false;
  display = false;

  xComMdmRssiMoyen2G: number = 0;
  xComMdmRssiMoyen3G: number = 0;
  xComMdmRssiMoyen4G: number = 0;

  xComMdmQualMoyen2GGPRS: number = 0;
  xComMdmQualMoyen2GEDGE: number = 0;
  xComMdmQualMoyen3G: number = 0;
  xComMdmQualMoyen4G: number = 0;

  xComMdmRatioTimeIn2G: number = 0;
  xComMdmRatioTimeIn3G: number = 0;
  xComMdmRatioTimeIn4G: number = 0;
  xComMdmRatioTimeOffline: number = 0;

  constructor(
    private platform: Platform,
    private global: GlobalService,
    private loadingCTRL: LoadingController,
    private hotspot: Hotspot,
    private ngZone: NgZone,
    private cd: ChangeDetectorRef,
    private router: Router,
    private storage: Storage,
    private events: Events
  ) {
    this.global.checkMode();
  }

  ionViewWillEnter() {
    this.tryToRead = true;

    this.global.connexionRequise = "UPC";

    console.log(" - Connexion requise :" + this.global.connexionRequise);
    console.log(
      " - Connexion  actuel  (avant on read statique) :" +
        this.global.statutConnexion
    );

    this.ConnecterUPC();

    this.Read();

    this.correspondancesRegistres = new CorrespondancesRegistres();
  }
  async checkConnectionWifi() {
    console.log("check wifi conx");
    let wifi = await WifiWizard2.getConnectedSSID();
    console.log(wifi);
    this.current_ssid = wifi;
  }

  Read() {
    this.do = setInterval(async () => {
      console.log(
        "======================== cycle ================================"
      );

      this.checkConnectionWifi();

      // en cas de perte de connexion
      if (this.current_ssid != this.stored_ssid) {
        console.log("wifi diff >>>> ");
        console.log("disconnect ");
        let res = await WifiWizard2.disconnect(this.current_ssid)
          .then((result) => {
            console.log("connect ");
            this.ConnecterUPC();
          })
          .catch((err) => {});
        console.log(res);
        //connecter au wifi
        console.log("reconnexion  >>>> ");
      } else if (this.global.upcmodbus.state != 1) {
        this.ConnecterUPC();
      }

      if (this.global.upcmodbus.state == 1) {
        console.log("Try to read >");

        // lecture statique :
        this.isLoading = true;

        this.global.upcmodbus
          .onReadStatique(this.global.upcname, this.global.mode, "connection")
          .then((res) => {
            if (res == true) {
              this.tryToRead = false;
              this.isLoading = false;
              console.log(">  lecture reussi ");
              this.subscribeRefresh();
              this.events.publish("loadParameters");
              this.global.lectureStatiqueEnCours = false;
              this.global.displayLoading = false;
              // this.tryToRead = false;
            } else {
              console.log(">  lecture echouée  ");
              this.isLoading = false;
              this.tryToRead = true;
              this.global.statutConnexion = "Aucune";
              this.global.lectureStatiqueEnCours = false;
              this.global.displayLoading = false;
            }
          })
          .catch((err) => {
            this.tryToRead = true;
            this.isLoading = false;
            console.log("acceuil::erreur lecture");
            console.log(err);
          });

        //fin de lecture statique :
      }
    }, 500);
  }

  subscribeRefresh() {
    var d = new Date();
    this.events.subscribe("loadParameters", ($event) => {
      this.level = this.global.upcmodbus.connectionLevel;
      this.mode = this.getMode(this.global.upcmodbus.connectionMode);

      this.xComMdmRssiMoyen2G = this.global.upcmodbus.xComMdmRssiMoyen2G;
      this.xComMdmRssiMoyen3G = this.global.upcmodbus.xComMdmRssiMoyen3G;
      this.xComMdmRssiMoyen4G = this.global.upcmodbus.xComMdmRssiMoyen4G;

      this.xComMdmQualMoyen2GGPRS =
        this.global.upcmodbus.xComMdmQualMoyen2GGPRS;
      this.xComMdmQualMoyen2GEDGE =
        this.global.upcmodbus.xComMdmQualMoyen2GEDGE;
      this.xComMdmQualMoyen3G = this.global.upcmodbus.xComMdmQualMoyen3G;
      this.xComMdmQualMoyen4G = this.global.upcmodbus.xComMdmQualMoyen4G;

      this.xComMdmRatioTimeIn2G = this.global.upcmodbus.xComMdmRatioTimeIn2G;
      this.xComMdmRatioTimeIn3G = this.global.upcmodbus.xComMdmRatioTimeIn3G;
      this.xComMdmRatioTimeIn4G = this.global.upcmodbus.xComMdmRatioTimeIn4G;
      this.xComMdmRatioTimeOffline =
        this.global.upcmodbus.xComMdmRatioTimeOffline;
    });
  }

  ConnecterUPC() {
    //connection a l 'UPC :
    console.log("> try  connecter a l upc ");
    if (this.global.mode != "modeTest") {
      this.isLoading = true;
      this.storage.get("ssid_upc").then(async (stored_ssid) => {
        this.storage.get("password").then(async (password) => {
          this.stored_ssid = stored_ssid;
          this.password_ssid = password;

          //recuperer l ssid  +password
          console.log("acceuil , stored password" + password);
          console.log("acceuil , stored ssid" + stored_ssid);

          //si on est deja connecté a l upc :
          let wifi = await WifiWizard2.getConnectedSSID();

          console.log("connected ssid: " + wifi);

          if (wifi != stored_ssid) {
            console.log("wifi diffrents :>>>>>>>>>");

            console.log("connecte wifi ");
            WifiWizard2.connect(stored_ssid, password)
              .then(() => {
                //connexion reussi a l UPC  :
                console.log("connexion wifi up reussie :");
                this.check = true;

                this.global.statutConnexion = "UPC";
                this.global
                  .onConnectModbus()
                  .then(async () => {
                    console.log("accueil , connexion modbus reussie >> ");
                    this.connection_modbus = true;
                    this.isLoading = false;

                    //on peut lire
                    this.tryToRead = true;
                  })
                  .catch((err) => {
                    console.log("accueil + connexion modbus échouée  ");
                    this.isLoading = false;
                    this.connection_modbus = false;
                  });
              })
              .catch((err) => {
                console.log("connexion impossible a l'UPC wifi");
                console.log(err);
              });
          } else {
            this.global
              .onConnectModbus()
              .then(() => {
                //on tente une connexion modbus pour déterminer si c'est un upc
                //connexion modbus réussie : c'est un upc
                console.log("accueil + connexion modbus reussie ");
                this.connection_modbus = true;
                this.isLoading = false;
              })
              .catch((err) => {
                console.log("accueil + connexion modbus échouée  ");
                this.isLoading = false;
                this.connection_modbus = false;
              });
          }
        });
      });
    }
  }

  getMode(mode: number): string {
    switch (mode) {
      case 0:
        return "Non enregistré";
        break;
      case 1:
        return "2G GPRS";
        break;
      case 2:
        return "2G EDGE";
        break;
      case 3:
        return "3G WCDMA";
        break;
      case 4:
        return "3G HSDPA";
        break;
      case 5:
        return "3G HSUPA";
        break;
      case 6:
        return "3G HSDPA/HSUPA";
        break;
      case 7:
        return "4G";
        break;

      default:
        break;
    }
  }

  doRefresh(event) {
    this.ionViewWillEnter();
    event.target.complete();
  }

  goToNextPage() {
    clearInterval(this.global.interval);

    this.storage.get("nexturl").then((res) => {
      this.router.navigate([res]);
    });
  }
}
