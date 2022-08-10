import {
  Component,
  OnInit,
  NgZone,
  ChangeDetectorRef,
  OnDestroy,
} from "@angular/core";
import { GlobalService } from "../api/global.service";
import { Platform, LoadingController, Events } from "@ionic/angular";
import { UPCModbus } from "../model/upcv3/upcmodbus";
import { Hotspot } from "@ionic-native/hotspot/ngx";
import { Network } from "@ionic-native/network/ngx";
import { UPCV3 } from "../model/upcv3/upcv3";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { CorrespondancesRegistres } from "../model/upcv3/correspondancesRegistres";

declare var WifiWizard2: any;

@Component({
  selector: "app-cdiff",
  templateUrl: "./cdiff.page.html",
  styleUrls: ["./cdiff.page.scss"],
})
export class CdiffPage implements OnInit {
  do;
  check = false;
  current_ssid = "NO WIFI";
  stored_ssid = "NO WIFI";
  password_ssid = "";
  connection_modbus = false;
  isLoading = false;
  tryToRead = false;
  upcStatus = 0;
  textdiff = "ADJUST";
  colordif = "light";
  textplaydiff = "DIFF";
  colorplayfiff = "light";
  colordis = "light";
  colorcheck = "light";
  offsetPE = 0;
  offsetPS = 0;
  offsetdeb = 0;
  pidprog = 0;
  pidint = 0;
  pider = 0;
  upc: UPCModbus;
  fluxmax: number = 0;
  intensity: number = 0;
  resActive: number = 0;
  temp: number = 0;
  debiRef: number = 0;
  peRef: number = 0;
  psRef: number = 0;
  debiMes: number = 0;
  peMes: number = 0;
  psMes: number = 0;
  psComp: number = 0;
  psCompMes: number = 0;
  upc3s: UPCV3[];
  backgroundeb = false;
  backgrounddangerdeb = false;
  diffcolor = "light";
  typediff = "Mode de diffusion";
  redBackground = false;
  display = false;
  correspondancesRegistres: CorrespondancesRegistres;

  //diffusion à l'arrêt start reload front detectchange

  constructor(
    private global: GlobalService,
    private platform: Platform,
    private loadingCTRL: LoadingController,
    private ngZone: NgZone,
    private hotspot: Hotspot,
    private network: Network,
    private cd: ChangeDetectorRef,
    private router: Router,
    private storage: Storage,
    private events: Events
  ) {
    this.global.checkMode();
  }

  ngOnInit() {}
  ionViewWillEnter() {
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
      }

      if (this.tryToRead && this.global.upcmodbus.state == 1) {
        console.log("Try to read >");

        // lecture statique :
        this.isLoading = true;

        this.global.upcmodbus
          .onReadStatique(this.global.upcname, this.global.mode, "cdiff")
          .then((res) => {
            if (res == true) {
              this.tryToRead = false;
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

      if (this.global.upcmodbus.state == 1) {
        console.log("Try to read >");

        // lecture statique :
        this.isLoading = true;

        this.global.upcmodbus
          .onReadStatique(
            this.global.upcname,
            this.global.mode,
            "cdiff-cyclique"
          )
          .then((res) => {
            if (res == true) {
              //this.tryToRead = false;
              this.isLoading = false;
              console.log(">  lecture reussi ");
              this.subscribeRefreshCyclique();
              this.events.publish("loadParameters");
              this.global.lectureStatiqueEnCours = false;
              this.global.displayLoading = false;
              // this.tryToRead = false;
            } else {
              console.log(">  lecture echouée  ");
              this.isLoading = false;
              // this.tryToRead = true;
              this.global.statutConnexion = "Aucune";
              this.global.lectureStatiqueEnCours = false;
              this.global.displayLoading = false;
            }
          })
          .catch((err) => {
            // this.tryToRead = true;
            this.isLoading = false;
            console.log("acceuil::erreur lecture");
            console.log(err);
          });

        //fin de lecture statique :
      }
    }, 500);
  }

  ecrir(variable, value) {
    console.log(
      " 1-apres ecriture this alarme  basse global  avant e criture:" +
        this.global.upcmodbus.alarm.alrResLowEn
    );

    if (variable.type == "int") {
      this.isLoading = true;
      this.global.upcmodbus.client
        .setIntInHoldingRegister(variable.adr, variable.dim, value)
        .then(() => {
          console.log("accueil ::  ecriture reussie");

          // lecture statique :
          this.global.upcmodbus
            .onReadStatique(this.global.upcname, this.global.mode, "cdiff")
            .then((res) => {
              if (res == true) {
                this.isLoading = false;
                console.log("accueil:  lecture reussi ");
                this.subscribeRefresh();
                this.events.publish("loadParameters");
                console.log(
                  " 2 -apres ecriture this alarme  basse global :" +
                    this.global.upcmodbus.alarm.alrResLowEn
                );
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
    } else if (variable.type == "float") {
      console.log(":::::::::::::::::ecrir un flottant :::::::::::::");
      this.isLoading = true;

      this.global.upcmodbus.client
        .setFloatInHoldingRegister(variable.adr, value)
        .then(() => {
          // lecture statique :
          this.global.upcmodbus
            .onReadStatique(this.global.upcname, this.global.mode, "cdiff")
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
        })
        .catch(() => {
          alert("écriture impossible");
          this.isLoading = false;
        });
    } else {
      this.isLoading = true;
      this.global.upcmodbus.client
        .setStringArrayInHoldingResgisters(variable.adr, value)
        .then(() => {
          console.log("accueil ::  ecriture reussie");

          // lecture statique :
          this.global.upcmodbus
            .onReadStatique(this.global.upcname, this.global.mode, "cdiff")
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

  startstop() {
    this.onChangeDiff();
  }
  doRefresh(event) {
    this.unsubscribeRefresh();
    this.global.onReadStatiqueEnable().then(() => {
      this.subscribeRefresh();
    });
  }

  onChangeDiff() {
    this.ecrir(this.correspondancesRegistres.upcMode, 2);
  }

  onDisableDiff() {
    this.ecrir(this.correspondancesRegistres.upcMode, 0);
  }

  onEnableDiff() {
    this.ecrir(this.correspondancesRegistres.upcMode, 1);
  }

  onCheck() {
    this.ecrir(this.correspondancesRegistres.upcMode, 3);
  }

  changeIntensity() {
    this.ecrir(this.correspondancesRegistres.upcDiffLvlAdj, this.intensity);
  }

  changeFluxMax() {
    console.log("flux max : ", this.fluxmax);
    this.ecrir(this.correspondancesRegistres.co2FlowRefAdj, this.fluxmax);
  }

  changeResAct() {
    this.resActive = this.resActive == 1 ? 2 : 1;

    this.ecrir(this.correspondancesRegistres.co2ResActAdj, this.resActive);
  }

  changePID() {
    var d = new Date();
    this.global.logs.push(
      this.global.msToTime(d.getTime()) + " - appel on change PID"
    );
    this.global.onWriteEnable(
      this.correspondancesRegistres.upcCo2PidProp,
      this.pidprog
    );
  }

  changeINT() {
    var d = new Date();
    this.global.logs.push(
      this.global.msToTime(d.getTime()) + " - appel on change INT"
    );
    this.global.onWriteEnable(
      this.correspondancesRegistres.upcCo2PidInteg,
      this.pidint
    );
  }

  changeDIR() {
    var d = new Date();
    this.global.logs.push(
      this.global.msToTime(d.getTime()) + " - appel on change DIR"
    );
    this.global.onWriteEnable(
      this.correspondancesRegistres.upcCo2PidDiff,
      this.pider
    );
  }

  changeoffsetPE() {
    var d = new Date();
    this.global.logs.push(
      this.global.msToTime(d.getTime()) + " - appel on change offsetPE"
    );
    this.global.onWriteEnable(
      this.correspondancesRegistres.co2PressInpOffs,
      this.offsetPE
    );
  }

  changeoffsetPS() {
    var d = new Date();
    this.global.logs.push(
      this.global.msToTime(d.getTime()) + " - appel on change offsetPS"
    );
    this.global.onWriteEnable(
      this.correspondancesRegistres.co2PressoutOffs,
      this.offsetPS
    );
  }

  changeoffsetdeb() {
    var d = new Date();
    this.global.logs.push(
      this.global.msToTime(d.getTime()) + " - appel on change offsetdeb"
    );
    this.global.onWriteEnable(
      this.correspondancesRegistres.co2FlowOffs,
      this.offsetdeb
    );
  }

  goToNextPage() {
    this.storage.get("nexturl").then((res) => {
      this.router.navigate([res]);
    });
  }
  ionViewWillLeave() {
    console.log("quitter la page  :");
    clearInterval(this.do);
  }

  subscribeRefresh() {
    this.events.subscribe("loadParameters", ($event) => {
      var status = this.global.upcmodbus.general.upcStatus;
      this.upcStatus = this.global.upcmodbus.general.upcStatus;
      if (status == 0) {
        this.colordis = "danger";
        this.colorcheck = "light";
        this.colorplayfiff = "light";
        this.colordif = "light";
        this.typediff = "Diffusion OFF";
        this.diffcolor = "danger";
      } else if (status == 3) {
        this.colorcheck = "primary";
        this.colordis = "light";
        this.colorplayfiff = "light";
        this.colordif = "light";
        this.typediff = "Mode CHECK Pressions";
        this.diffcolor = "warning";
      } else if (status == 2) {
        this.colordif = "primary";
        this.colorplayfiff = "light";
        this.colordis = "light";
        this.colorcheck = "light";
        this.diffcolor = "tertiary";
        this.typediff = "Mode ADJUST";
      } else {
        this.colorplayfiff = "primary";
        this.colordif = "light";
        this.colorcheck = "light";
        this.colordis = "light";
        this.typediff = "Diff. programmée ACTIF";
        this.diffcolor = "primary";
      }
      this.offsetPE = this.global.upcmodbus.diffusions.co2PressInpOffs;
      this.offsetPS = this.global.upcmodbus.diffusions.co2PressOutOffs;
      this.offsetdeb = this.global.upcmodbus.diffusions.co2FlowOffs;
      this.pidprog = this.global.upcmodbus.general.upcCo2PidProp;
      this.pidint = this.global.upcmodbus.general.upcCo2PidInteg;
      this.pider = this.global.upcmodbus.general.upcCo2PidDiff;

      //40018

      this.fluxmax = this.global.upcmodbus.general.co2FlowRefAdj;

      //40065
      this.intensity = this.global.upcmodbus.diffusions.upcDiffLvlAdj;

      //40150
      this.resActive = this.global.upcmodbus.reserves.co2ResActAdj;

      this.debiRef = (this.fluxmax * this.intensity) / 10;
      //this.global.interval = setInterval(async ()=>{

      //40416
      //this.intensity = this.upc.client.registerToUint32(res[0]);
      //40435
      this.peMes = this.global.upcmodbus.diffusions.co2PresInpAvg;

      //40437
      this.psMes = this.global.upcmodbus.diffusions.co2PresOutAvg;

      //40439
      this.debiMes = this.global.upcmodbus.diffusions.co2FlowAvg;
      if (Math.abs(((this.debiMes - this.debiRef) / this.debiRef) * 100) < 5) {
        this.backgroundeb = true;
        this.backgrounddangerdeb = false;
      } else if (
        Math.abs(((this.debiMes - this.debiRef) / this.debiRef) * 100) < 10
      ) {
        this.backgrounddangerdeb = true;
      } else {
        this.backgroundeb = false;
        this.backgrounddangerdeb = false;
      }

      //40451
      this.temp = this.global.upcmodbus.diffusions.co2TempAvg;

      //40463
      this.psCompMes = this.global.upcmodbus.diffusions.co2PressOutComp;
    });
  }

  subscribeRefreshCyclique() {
    this.events.subscribe("loadParameters", ($event) => {
      console.log("subscribe refresh cyclique");
      //this.intensity = this.upc.client.registerToUint32(res[0]);
      //40435
      this.peMes = this.global.upcmodbus.diffusions.co2PresInpAvg;

      //40437
      this.psMes = this.global.upcmodbus.diffusions.co2PresOutAvg;

      //40439
      this.debiMes = this.global.upcmodbus.diffusions.co2FlowAvg;

      if (Math.abs(((this.debiMes - this.debiRef) / this.debiRef) * 100) < 5) {
        this.backgroundeb = true;
        this.backgrounddangerdeb = false;
      } else if (
        Math.abs(((this.debiMes - this.debiRef) / this.debiRef) * 100) < 10
      ) {
        this.backgrounddangerdeb = true;
      } else {
        this.backgroundeb = false;
        this.backgrounddangerdeb = false;
      }

      //40451
      this.temp = this.global.upcmodbus.diffusions.co2TempAvg;

      //40463
      this.psCompMes = this.global.upcmodbus.diffusions.co2PressOutComp;
    });
  }

  unsubscribeRefresh() {
    this.events.unsubscribe("loadParameters");
  }
}
