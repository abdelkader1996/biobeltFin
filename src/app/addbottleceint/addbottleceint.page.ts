interface Bottle {
  barcode: string;
  type: any;
  style: number;
}
import {
  Component,
  OnInit,
  NgZone,
  ChangeDetectorRef,
  ViewEncapsulation,
} from "@angular/core";
import { UPCModbus } from "../model/upcv3/upcmodbus";
import { Platform, ModalController, LoadingController } from "@ionic/angular";
import { Network } from "@ionic-native/network/ngx";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Storage } from "@ionic/storage";

import { Upcv3serviceService } from "../api/upcv3service.service";
import { Hotspot, HotspotNetwork } from "@ionic-native/hotspot/ngx";
import { GlobalService } from "../api/global.service";
import { resolve } from "url";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
import { Events } from "@ionic/angular";
import { first } from "rxjs/operators";
import { CorrespondancesRegistres } from "../model/upcv3/correspondancesRegistres";

declare var WifiWizard2: any;
declare let Ping: any;

@Component({
  selector: "app-addbottleceint",
  templateUrl: "./addbottleceint.page.html",
  styleUrls: ["./addbottleceint.page.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AddbottleceintPage {
  upcStatus = null;
  do;
  check = false;
  current_ssid = "NO WIFI";
  stored_ssid = "NO WIFI";
  password_ssid = "";
  connection_modbus = false;
  isLoading = false;
  tryToRead = false;

  highlightB1 = false;
  highlightB2 = false;
  statusB1;
  statusB2;
  contenuB1;
  contenuB2;
  reserveType = "0";

  //ajout de bouteille :
  currentBotlleTypeB1: any;
  bottleTypedb = [];
  bottlesB1: Bottle[] = [];
  contenueAAjouterB1 = 0;

  currentBotlleTypeB2: any;
  bottlesB2: Bottle[] = [];
  contenueAAjouterB2 = 0;

  //bouteilles :
  bottlesInTransit = [];

  // a ecrire dans l UPC
  aEcrir = { b1: [], b2: [] };
  correspondancesRegistres: CorrespondancesRegistres;

  constructor(
    private platform: Platform,
    private ngZone: NgZone,
    private network: Network,
    private scan: BarcodeScanner,
    private modalCtrl: ModalController,
    private loadingCTRL: LoadingController,
    private cd: ChangeDetectorRef,
    private upcv3Service: Upcv3serviceService,
    private storage: Storage,
    private hotspot: Hotspot,
    public global: GlobalService,
    private alertCTRL: AlertController,
    private router: Router,
    private events: Events,
    private barcode: BarcodeScanner
  ) {
    this.global.checkMode();
  }
  ionViewWillEnter() {
    this.storage.get("bottleTypes").then((res) => {
      this.bottleTypedb = res;
      console.log(this.bottleTypedb);
    });

    this.tryToRead = true;
    console.log(
      "========================================================================="
    );
    console.log(
      "========================== page  accueil :==============================="
    );
    console.log(
      "========================================================================="
    );

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

  async onAddBottleB1() {
    let barcode = await this.barcode.scan();
    if (barcode.text.length < 10) {
      console.log("on add bottle B1 :");
      let bottle = { barcode: barcode.text, type: {}, style: 1 };

      this.contenueAAjouterB1 = 0;
      let bt = this.bottleTypedb.find(
        (el) => el.id == this.currentBotlleTypeB1
      );
      bottle.type = bt;
      bottle.barcode = bottle.barcode + "" + bt.codeUpc;
      this.aEcrir.b1.push(bottle.barcode + "" + bt.codeUpc);

      this.bottlesB1.push(bottle);

      this.bottlesB1.forEach((bottle) => {
        if (bottle.style == 1) this.contenueAAjouterB1 += bottle.type.contenue;
      });
      console.log("b1");
      console.log(this.bottlesB1);
      console.log(this.contenueAAjouterB1);
    } else {
      alert("le codebar doit contenir 9 caracters au maximum ");
    }
  }
  onSynchro() {}

  cancelB1(id) {
    console.log("click rem ", id);

    let bottle = this.bottlesB1[id];

    console.log(bottle);

    if (bottle.style == 1) {
      console.log("style", 1);
      this.bottlesB1.splice(id, 1);
      this.contenueAAjouterB1 -= bottle.type.contenue;
    } else if (bottle.style == 0) {
      console.log("style", 0);
      this.bottlesB1[id].style = -1;
    } else if (bottle.style == -1) {
      console.log("style", -1);

      this.bottlesB1[id].style = 0;
    }

    console.log(bottle);
  }

  cancelB2(id) {
    console.log("click rem ", id);

    let bottle = this.bottlesB2[id];

    console.log(bottle);

    if (bottle.style == 1) {
      console.log("style", 1);
      this.bottlesB2.splice(id, 1);
      this.contenueAAjouterB2 -= bottle.type.contenue;
    } else if (bottle.style == 0) {
      console.log("style", 0);
      this.bottlesB2[id].style = -1;
    } else if (bottle.style == -1) {
      console.log("style", -1);

      this.bottlesB2[id].style = 0;
    }

    console.log(bottle);
  }
  async onAddBottleB2() {
    let barcode = await this.barcode.scan();

    if (barcode.text.length < 10) {
      console.log("on add bottle B2 :");
      let bottle = { barcode: barcode.text, type: {}, style: 1 };

      let bt = this.bottleTypedb.find(
        (el) => el.id == this.currentBotlleTypeB2
      );
      bottle.type = bt;
      bottle.barcode = bottle.barcode + "" + bt.codeUpc;

      this.aEcrir.b2.push(bottle.barcode + "" + bt.codeUpc);

      this.contenueAAjouterB2 = 0;
      this.bottlesB2.push(bottle);
      this.bottlesB2.forEach((bottle) => {
        if (bottle.style == 1) {
          this.contenueAAjouterB2 += bottle.type.contenue;
        }
      });
      console.log("b2");
      console.log(this.bottlesB2);
      console.log(this.contenueAAjouterB2);
    } else {
      alert("le codebar doit contenir 9 caracters au maximum ");
    }
  }

  //----vider b1 B2 ;:
  viderB1() {
    this.barcode.scan().then((res) => {
      this.bottlesB1.map((bottle) => {
        console.log(" bottle barcode", bottle.barcode);
        console.log("scanned", res.text);
        if (
          bottle.barcode.substring(0, bottle.barcode.length - 1) == res.text
        ) {
          bottle.style = -1;
        }
      });
    });
  }

  //----vider b1 B2 ;:
  viderB2() {
    this.barcode.scan().then((res) => {
      this.bottlesB2.map((bottle) => {
        if (
          bottle.barcode.substring(0, bottle.barcode.length - 1) == res.text
        ) {
          bottle.style = -1;
        }
      });
    });
  }

  Read() {
    this.do = setInterval(() => {
      console.log(
        "======================== cycle ================================"
      );
      console.log("UPC stat  ====  " + this.global.upcmodbus.state);

      this.checkConnectionWifi();

      // en cas de perte de connexion
      if (this.current_ssid != this.stored_ssid && this.check) {
        console.log("wifi diff >>>> ");
        console.log("reconnexion  >>>> ");

        //connecter au wifi
        this.ConnecterUPC();
      }

      if (this.tryToRead && this.global.upcmodbus.state == 1) {
        console.log("Try to read >");
        this.tryToRead = false;

        // lecture statique :
        this.isLoading = true;

        this.global.upcmodbus
          .onReadStatique(
            this.global.upcname,
            this.global.mode,
            "addbottleceint"
          )
          .then((res) => {
            if (res == true) {
              this.upcStatus = this.global.upcmodbus.general.upcStatus;
              this.isLoading = false;
              console.log(">  lecture reussi ");

              this.subscribeRefresh();
              this.events.publish("loadParameters");
              this.global.lectureStatiqueEnCours = false;
              this.global.displayLoading = false;
              this.tryToRead = false;
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

  async checkConnectionWifi() {
    let wifi = await WifiWizard2.getConnectedSSID();
    this.current_ssid = wifi;
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
            console.log("wifi diffrents :");

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
              .catch(() => {
                console.log("connexion impossible a l'UPC");
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

  changeContentStatusB1(reserve: string) {
    if (reserve == "B1") {
      this.global.onWriteEnable(
        this.correspondancesRegistres.co2Res1Status,
        parseInt(this.statusB1)
      );
    } else {
      if (reserve == "B2") {
        this.global.onWriteEnable(
          this.correspondancesRegistres.co2Res2Status,

          parseInt(this.statusB2)
        );
      }
    }
  }

  changeReserveType() {
    this.global.upcmodbus.client.setIntInHoldingRegister(
      40382,
      1,
      parseInt(this.reserveType)
    );
  }

  ecrir(variable, value) {
    if (variable.type == "int") {
      this.isLoading = true;
      this.global.upcmodbus.client
        .setIntInHoldingRegister(variable.adr, variable.dim, value)
        .then(() => {
          console.log("accueil ::  ecriture reussie");

          // lecture statique :
          this.global.upcmodbus
            .onReadStatique(
              this.global.upcname,
              this.global.mode,
              "addbottleceint"
            )
            .then((res) => {
              if (res == true) {
                this.isLoading = false;
                console.log("accueil:  lecture reussi ");
                this.subscribeRefresh();

                this.events.publish("loadParameters");
                this.global.lectureStatiqueEnCours = false;
                this.global.displayLoading = false;
                this.tryToRead = false;
              } else {
                this.isLoading = false;

                this.global.statutConnexion = "Aucune";
                this.global.lectureStatiqueEnCours = false;
                this.global.displayLoading = false;
              }
            })
            .catch((err) => {
              this.isLoading = false;
              console.log("acceuil::erreur lecture");
              console.log(err);
            });

          //fin de lecture statique :
        })
        .catch(() => {
          this.isLoading = false;
          console.log("num piege ::écriture impossible");
        });
    } else {
      this.isLoading = true;
      this.global.upcmodbus.client
        .setStringArrayInHoldingResgisters(variable.adr, value)
        .then(() => {
          this.subscribeRefresh();

          console.log("accueil ::  ecriture reussie");

          // lecture statique :
          this.global.upcmodbus
            .onReadStatique(
              this.global.upcname,
              this.global.mode,
              "addbottleceint"
            )
            .then((res) => {
              if (res == true) {
                this.isLoading = false;
                console.log("accueil:  lecture reussi ");

                this.subscribeRefresh();
                this.events.publish("loadParameters");
                this.global.lectureStatiqueEnCours = false;
                this.global.displayLoading = false;
                this.tryToRead = false;
              } else {
                this.isLoading = false;

                this.global.statutConnexion = "Aucune";
                this.global.lectureStatiqueEnCours = false;
                this.global.displayLoading = false;
              }
            })
            .catch((err) => {
              this.isLoading = false;
              console.log("acceuil::erreur lecture");
              console.log(err);
            });

          //fin de lecture statique :
        })
        .catch(() => {
          this.isLoading = false;
          console.log("num piege ::écriture impossible");
        });
    }
  }

  ecrireLesBouteilles() {
    //b1
    let counter1 = 0;
    let res = [];
    this.bottlesB1.forEach((el) => {
      if (el.style == 1 || el.style == 0)
        res = res.concat(this.global.upcmodbus.client.getArray(5, el.barcode));
      counter1++;
    });
    for (let i = res.length; i < 45; i++) {
      res.push(0);
    }
    console.log("bottle B1 register : ");
    console.log(res);

    //b1
    let counter2 = 0;
    let res2 = [];
    this.bottlesB2.forEach((el) => {
      if (el.style == 1 || el.style == 0)
        res2 = res2.concat(
          this.global.upcmodbus.client.getArray(5, el.barcode)
        );
      counter2++;
    });
    for (let i = res2.length; i < 45; i++) {
      res2.push(0);
    }
    console.log("bottle B1 register : ");
    console.log(res2);
    if (counter1 < 10 && counter2 < 10) {
      this.global.upcmodbus.client
        .writeMultipleRegisters(41169, res2)
        .then(() => {
          this.global.upcmodbus.client
            .writeMultipleRegisters(41124, res)
            .then((result) => {
              //ecriture reussi des codesBars :
              // ajouter les valeurs dans content :
              console.log("- contenu a ajouter B1 : ", this.contenueAAjouterB1);
              console.log("- contenu a ajouter B2 : ", this.contenueAAjouterB2);

              this.global.upcmodbus.client
                .setFloatInHoldingRegister(
                  40384,
                  1000 * (this.contenueAAjouterB1 / 1.97)
                )
                .then((result) => {
                  this.global.upcmodbus.client
                    .setFloatInHoldingRegister(
                      40386,
                      1000 * (this.contenueAAjouterB2 / 1.97)
                    )
                    .then((result) => {
                      alert("synchronisation reussie !");
                    })
                    .catch((err) => {});
                })
                .catch((err) => {});

              this.tryToRead = true;
            })
            .catch((err) => {});
        })
        .catch((err) => {});
    } else {
      alert(
        "Erreur : le nombre des bouteilles doit etre inferieur ou egale a 9 de chaque coté "
      );
    }
  }

  changeRes(i) {
    this.ecrir(this.correspondancesRegistres.co2ResActive, i);
  }

  async onChangeContenant(reserve: string) {
    /*
    if(reserve == "B1"){
      await this.global.onWriteEnable(this.correspondancesRegistres.co2Res1StartVol,this.contenantB1/0.001974)
      this.subscribeRefresh()
    }
    else{
      if(reserve == "B2"){
        await this.global.onWriteEnable(this.correspondancesRegistres.co2Res2StartVol,this.contenantB2/0.001974)
        this.subscribeRefresh()
      }
    }  
    */
  }

  changeContentStatus(reserve: string) {
    if (reserve == "B1") {
      this.ecrir(this.correspondancesRegistres.co2Res1Status, this.statusB1);
    } else {
      if (reserve == "B2") {
        this.ecrir(this.correspondancesRegistres.co2Res2Status, this.statusB2);
      }
    }
  }

  ondiffusionchnage() {
    let x = this.upcStatus ? 0 : 1;
    this.global.upcmodbus.client
      .setIntInHoldingRegister(40011, 1, x)
      .then((result) => {
        this.upcStatus = x;
      })
      .catch((err) => {
        alert("Erreur: changement de mode de diffusion echoué ");
      });
  }

  subscribeRefresh() {
    this.events.subscribe("loadParameters", ($event) => {
      this.statusB1 = "" + this.global.upcmodbus.reserves.co2Res1Status;
      this.statusB2 = "" + this.global.upcmodbus.reserves.co2Res2Status;

      this.highlightB1 = this.global.upcmodbus.reserves.co2ResActive == 1;
      this.highlightB2 = this.global.upcmodbus.reserves.co2ResActive == 2;

      this.contenuB1 = this.global.upcmodbus.reserves.co2Res1ActVol;
      this.contenuB2 = this.global.upcmodbus.reserves.co2Res2ActVol;
      this.global.contenantB1 = this.global.upcmodbus.reserves.co2Res1StartVol;
      this.global.contenantB2 = this.global.upcmodbus.reserves.co2Res2StartVol;
      this.reserveType = this.global.upcmodbus.reserveType + "";
      console.log("<<<<>>>>>>>> reserve type :", this.reserveType);
      console.log("bottles en  b1");
      console.log(this.global.upcmodbus.reserves.bottlesB1);

      //lire les barcodes en B1 :
      this.bottlesB1 = [];
      this.contenueAAjouterB1 = 0;
      this.global.upcmodbus.reserves.bottlesB1.forEach((barcode) => {
        if (barcode != "\u0000\u0000\u0000") {
          this.aEcrir.b1.push(barcode);
          let bottle = {
            barcode: barcode.replace(/[^\w\s]/gi, ""),
            type: {},
            style: 0,
          };

          console.log(bottle.barcode.charAt(bottle.barcode.length - 1));
          let bt = this.bottleTypedb.find(
            (elem) =>
              elem.codeUpc.toString() ==
              bottle.barcode.charAt(bottle.barcode.length - 1)
          );
          console.log(bt);

          bottle.type = bt;
          this.bottlesB1.push(bottle);
        }
      });

      console.log(this.bottlesB1);

      //lire les barcodes en B2 :
      console.log("bottles en B2");
      console.log(this.global.upcmodbus.reserves.bottlesB2);

      this.bottlesB2 = [];
      this.contenueAAjouterB2 = 0;
      this.global.upcmodbus.reserves.bottlesB2
        .filter((el) => el != "")
        .forEach((barcode) => {
          if (barcode != "\u0000\u0000\u0000") {
            this.aEcrir.b2.push(barcode);
            let bottle = {
              barcode: barcode.replace(/[^\w\s]/gi, ""),
              type: {},
              style: 0,
            };

            let bt = this.bottleTypedb.find(
              (elem) =>
                elem.codeUpc.toString() ==
                bottle.barcode.charAt(bottle.barcode.length - 1)
            );

            bottle.type = bt;
            this.bottlesB2.push(bottle);
          }
        });
      console.log(this.bottlesB2);
    });
  }

  unsubscribeRefresh() {
    this.events.unsubscribe("loadParameters");
  }

  goToNextPage() {
    clearInterval(this.global.interval);
    this.storage.get("nexturl").then((res) => {
      this.router.navigate([res]);
    });
  }

  ionViewWillLeave() {
    console.log("quitter la page  :");
    clearInterval(this.do);
  }
}
