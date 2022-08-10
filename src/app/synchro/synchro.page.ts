import {
  Component,
  Input,
  NgZone,
  OnInit,
  ChangeDetectorRef,
} from "@angular/core";
import { getMaxListeners } from "process";
import { Upcv3serviceService } from "../api/upcv3service.service";
import { InterventionV3 } from "../model/interventionv3";
import { User } from "../model/user";
import { LoadingController, Platform, Events } from "@ionic/angular";
import { Network } from "@ionic-native/network/ngx";
import { UPCModbus } from "src/app/model/upcv3/upcmodbus";
import { UPCV3 } from "../model/upcv3/upcv3";
import { Router } from "@angular/router";
import { Hotspot, HotspotNetwork } from "@ionic-native/hotspot/ngx";
import { Chart } from "chart.js";
import * as d3 from "d3";
import * as moment from "moment";
import { parse } from "querystring";
import { GlobalService } from "../api/global.service";
import { Storage } from "@ionic/storage";
import { CorrespondancesRegistres } from "../model/upcv3/correspondancesRegistres";

declare var WifiWizard2: any;
declare var google: {
  visualization: {
    arrayToDataTable: (arg0: (string | number)[][]) => any;
    BarChart: new (arg0: HTMLElement) => any;
  };
};
declare var google2: {
  visualization: {
    arrayToDataTable: (arg0: (string | number)[][]) => any;
    BarChart: new (arg0: HTMLElement) => any;
  };
};

@Component({
  selector: "app-synchro",
  templateUrl: "./synchro.page.html",
  styleUrls: ["./synchro.page.scss"],
})
export class SynchroPage {
  do;
  check = false;
  current_ssid = "NO WIFI";
  stored_ssid = "NO WIFI";
  password_ssid = "";
  connection_modbus = false;
  isLoading = false;
  tryToRead = false;
  upc: UPCModbus;

  upc3: UPCV3;
  nbpiege: number;
  colordif = "light";
  programmes = [];
  pStart = [];
  pEnd = [];
  formattedHours;
  formattedMinutes;
  intensity = [];
  finishRead = false;
  frequency = [];
  frequency2 = [];
  sign = [];
  signOptions = ["+", "-"];
  intensityOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  frequencyOptions = [
    "Tous les jours",
    "Semaine",
    "Weekend",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  frequencyValue = ["7", "9", "8", "0", "1", "2", "3", "4", "5", "6"];
  colors = [];
  currentDawnTime;
  currentDuskTime;
  paDelay = [];
  paDuration = [];
  pcDelay = [];
  pcDuration = [];
  pAube = [];
  pCrepuscule = [];
  pAubeStart = [];
  pAubeEnd = [];
  pCrepusculeStart = [];
  pCrepusculeEnd = [];
  redBackground = false;
  display = false;
  correspondancesRegistres: CorrespondancesRegistres;

  colorplayfiff = "light";
  colordis = "light";
  colorcheck = "light";
  diffcolor = "light";
  typediff = "Mode de diffusion";
  horloge = "";

  constructor(
    private loadingCTRL: LoadingController,
    private upcv3Service: Upcv3serviceService,
    private platform: Platform,
    private router: Router,
    private ngZone: NgZone,
    private network: Network,
    private hotspot: Hotspot,
    private cg: ChangeDetectorRef,
    private global: GlobalService,
    private cd: ChangeDetectorRef,
    private events: Events,
    private storage: Storage
  ) {
    this.global.checkMode();
  }
  token: String;
  intervention: InterventionV3;
  time: String = "08:10";
  googleChartLibrary;

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

    this.horloge = this.global.upcmodbus.general.upcClock;
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

  async checkConnectionWifi() {
    let wifi = await WifiWizard2.getConnectedSSID();
    this.current_ssid = wifi;
  }

  Read() {
    this.do = setInterval(() => {
      console.log(
        "======================== cycle ================================"
      );

      this.checkConnectionWifi();

      // en cas de perte de connexion
      if (this.current_ssid != this.stored_ssid && this.check) {
        console.log("wifi diff >>>> ");
        console.log("reconnexion  >>>> ");

        //connecter au wifi
        this.ConnecterUPC();
      }

      if (this.tryToRead) {
        console.log("Try to read >");

        // lecture statique :
        this.isLoading = true;

        this.global.upcmodbus
          .onReadStatique(this.global.upcname, this.global.mode, "synchro")
          .then((res) => {
            if (res == true) {
              this.isLoading = false;
              console.log(">  lecture reussi ");

              //:
              this.pageInit();
              this.events.publish("loadParameters");

              ////
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

  ecrir(variable, value) {
    if (variable.type == "int") {
      this.isLoading = true;
      this.global.upcmodbus.client
        .setIntInHoldingRegister(variable.adr, variable.dim, value)
        .then(() => {
          console.log("accueil ::  ecriture reussie");

          // lecture statique :
          this.global.upcmodbus
            .onReadStatique(this.global.upcname, this.global.mode, "synchro")
            .then((res) => {
              if (res == true) {
                this.isLoading = false;
                console.log("accueil:  lecture reussi ");

                this.pageInit();
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
          console.log("accueil ::  ecriture reussie");

          // lecture statique :
          this.global.upcmodbus
            .onReadStatique(this.global.upcname, this.global.mode, "synchro")
            .then((res) => {
              if (res == true) {
                this.isLoading = false;
                console.log("accueil:  lecture reussi ");

                this.pageInit();
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

  onDiff() {
    this.ngZone.run(() => {
      if (this.colordif == "light") {
        this.global.upcmodbus.client
          .setIntInHoldingRegister(40011, 1, 1)
          .then((res) => {
            this.global.upcmodbus.general.upcStatus = 7;
            this.colordif = "primary";
            this.cd.detectChanges();
          });
      } else {
        this.global.upcmodbus.client
          .setIntInHoldingRegister(40011, 1, 0)
          .then((res) => {
            this.colordif = "light";
            this.global.upcmodbus.general.upcStatus = 0;
            this.cd.detectChanges();
          });
      }
    });
  }

  async pageInit() {
    this.events.subscribe("loadParameters", ($event) => {
      var status = this.global.upcmodbus.general.upcStatus;
      if (status == 0) {
        this.colordis = "danger";
        this.colorcheck = "light";
        this.colorplayfiff = "light";
        this.colordif = "light";
        this.typediff = "Diffusion OFF";
        this.diffcolor = "danger";
      } else if (status == 1) {
        this.colordif = "primary";
        this.colorplayfiff = "light";
        this.colordis = "light";
        this.colorcheck = "light";
        this.diffcolor = "tertiary";
        this.typediff = "Mode Enable";
      } else if (status == 2) {
        this.colordif = "primary";
        this.colorplayfiff = "light";
        this.colordis = "light";
        this.colorcheck = "light";
        this.diffcolor = "tertiary";
        this.typediff = "Mode ADJUST";
      } else if (status == 3) {
        this.colorcheck = "primary";
        this.colordis = "light";
        this.colorplayfiff = "light";
        this.colordif = "light";
        this.typediff = "Mode CHECK Pressions";
        this.diffcolor = "warning";
      } else if (status == 4) {
        this.colorcheck = "primary";
        this.colordis = "light";
        this.colorplayfiff = "light";
        this.colordif = "light";
        this.typediff = "Diff. programmée ACTIF";
        this.diffcolor = "warning";
      } else {
        this.colorplayfiff = "primary";
        this.colordif = "light";
        this.colorcheck = "light";
        this.colordis = "light";
        this.typediff = "R1 et R2 vide";
        this.diffcolor = "primary";
      }

      // 7 enable diff 0 disable 2 Adjust
      if (this.global.upcmodbus.general.upcStatus == 7) {
        this.colordif = "primary";
      } else {
        this.colordif = "light";
      }

      this.pStart.push(
        this.secondsToHoursMinutes(
          this.global.upcmodbus.diffCo2Program[0].start
        )
      );
      this.pEnd.push(
        this.secondsToHoursMinutes(this.global.upcmodbus.diffCo2Program[0].stop)
      );
      this.frequency2.push(
        this.frequencyOptions[
          this.convertDaysCode(this.global.upcmodbus.diffCo2Program[0].mode)
        ]
      );
      this.intensity.push(this.global.upcmodbus.diffCo2Program[0].intensity);

      this.pStart.push(
        this.secondsToHoursMinutes(
          this.global.upcmodbus.diffCo2Program[1].start
        )
      );
      this.pEnd.push(
        this.secondsToHoursMinutes(this.global.upcmodbus.diffCo2Program[1].stop)
      );
      this.frequency2.push(
        this.frequencyOptions[
          this.convertDaysCode(this.global.upcmodbus.diffCo2Program[1].mode)
        ]
      );
      this.intensity.push(this.global.upcmodbus.diffCo2Program[1].intensity);

      this.pStart.push(
        this.secondsToHoursMinutes(
          this.global.upcmodbus.diffCo2Program[2].start
        )
      );
      this.pEnd.push(
        this.secondsToHoursMinutes(this.global.upcmodbus.diffCo2Program[2].stop)
      );
      this.frequency2.push(
        this.frequencyOptions[
          this.convertDaysCode(this.global.upcmodbus.diffCo2Program[2].mode)
        ]
      );
      this.intensity.push(this.global.upcmodbus.diffCo2Program[2].intensity);

      this.pStart.push(
        this.secondsToHoursMinutes(
          this.global.upcmodbus.diffCo2Program[3].start
        )
      );
      this.pEnd.push(
        this.secondsToHoursMinutes(this.global.upcmodbus.diffCo2Program[3].stop)
      );
      this.frequency2.push(
        this.frequencyOptions[
          this.convertDaysCode(this.global.upcmodbus.diffCo2Program[3].mode)
        ]
      );
      this.intensity.push(this.global.upcmodbus.diffCo2Program[3].intensity);

      this.pStart.push(
        this.secondsToHoursMinutes(
          this.global.upcmodbus.diffCo2Program[4].start
        )
      );
      this.pEnd.push(
        this.secondsToHoursMinutes(this.global.upcmodbus.diffCo2Program[4].stop)
      );
      this.frequency2.push(
        this.frequencyOptions[
          this.convertDaysCode(this.global.upcmodbus.diffCo2Program[4].mode)
        ]
      );
      this.intensity.push(this.global.upcmodbus.diffCo2Program[4].intensity);

      this.pStart.push(
        this.secondsToHoursMinutes(
          this.global.upcmodbus.diffCo2Program[5].start
        )
      );
      this.pEnd.push(
        this.secondsToHoursMinutes(this.global.upcmodbus.diffCo2Program[5].stop)
      );
      this.frequency2.push(
        this.frequencyOptions[
          this.convertDaysCode(this.global.upcmodbus.diffCo2Program[5].mode)
        ]
      );
      this.intensity.push(this.global.upcmodbus.diffCo2Program[5].intensity);

      this.pStart.push(
        this.secondsToHoursMinutes(
          this.global.upcmodbus.diffCo2Program[6].start
        )
      );
      this.pEnd.push(
        this.secondsToHoursMinutes(this.global.upcmodbus.diffCo2Program[6].stop)
      );
      this.frequency2.push(
        this.frequencyOptions[
          this.convertDaysCode(this.global.upcmodbus.diffCo2Program[6].mode)
        ]
      );
      this.intensity.push(this.global.upcmodbus.diffCo2Program[6].intensity);

      this.pStart.push(
        this.secondsToHoursMinutes(
          this.global.upcmodbus.diffCo2Program[7].start
        )
      );
      this.pEnd.push(
        this.secondsToHoursMinutes(this.global.upcmodbus.diffCo2Program[7].stop)
      );
      this.frequency2.push(
        this.frequencyOptions[
          this.convertDaysCode(this.global.upcmodbus.diffCo2Program[7].mode)
        ]
      );
      this.intensity.push(this.global.upcmodbus.diffCo2Program[7].intensity);

      this.pStart.push(
        this.secondsToHoursMinutes(
          this.global.upcmodbus.diffCo2Program[8].start
        )
      );
      this.pEnd.push(
        this.secondsToHoursMinutes(this.global.upcmodbus.diffCo2Program[8].stop)
      );
      this.frequency2.push(
        this.frequencyOptions[
          this.convertDaysCode(this.global.upcmodbus.diffCo2Program[8].mode)
        ]
      );
      this.intensity.push(this.global.upcmodbus.diffCo2Program[8].intensity);

      this.pStart.push(
        this.secondsToHoursMinutes(
          this.global.upcmodbus.diffCo2Program[9].start
        )
      );
      this.pEnd.push(
        this.secondsToHoursMinutes(this.global.upcmodbus.diffCo2Program[9].stop)
      );
      this.frequency2.push(
        this.frequencyOptions[
          this.convertDaysCode(this.global.upcmodbus.diffCo2Program[9].mode)
        ]
      );
      this.intensity.push(this.global.upcmodbus.diffCo2Program[9].intensity);

      this.paDelay.push(
        this.secondsToHoursMinutes(this.global.upcmodbus.diffCo2Sunrise.offset)
      );
      this.paDuration.push(
        this.secondsToHoursMinutes(
          this.global.upcmodbus.diffCo2Sunrise.duration
        )
      );
      this.intensity.push(this.global.upcmodbus.diffCo2Sunrise.intensity);

      if (this.paDelay[0] >= 0) {
        this.sign.push("+");
      } else {
        this.sign.push("-");
      }
      this.currentDawnTime = this.global.upcmodbus.diffHourSunrise;
      this.pAubeStart.push(
        this.secondsToHoursMinutes(
          this.currentDawnTime + this.global.upcmodbus.diffCo2Sunrise.offset
        )
      );
      this.pAubeEnd.push(
        this.secondsToHoursMinutes(
          this.currentDawnTime +
            this.global.upcmodbus.diffCo2Sunrise.offset +
            this.global.upcmodbus.diffCo2Sunrise.duration
        )
      );

      this.pcDelay.push(
        this.secondsToHoursMinutes(this.global.upcmodbus.diffCo2Sunset.offset)
      );
      this.pcDuration.push(
        this.secondsToHoursMinutes(this.global.upcmodbus.diffCo2Sunset.duration)
      );
      this.intensity.push(this.global.upcmodbus.diffCo2Sunset.intensity);

      if (this.pcDelay[0] >= 0) {
        this.sign.push("+");
      } else {
        this.sign.push("-");
      }
      this.currentDuskTime = this.global.upcmodbus.diffHourSunset;
      this.pCrepusculeStart.push(
        this.secondsToHoursMinutes(
          this.currentDuskTime + this.global.upcmodbus.diffCo2Sunset.offset
        )
      );
      this.pCrepusculeEnd.push(
        this.secondsToHoursMinutes(
          this.currentDuskTime +
            this.global.upcmodbus.diffCo2Sunset.offset +
            this.global.upcmodbus.diffCo2Sunset.duration
        )
      );
    });
    this.drawChartjs();

    this.fillTab();
  }

  doRefresh(event) {
    this.ionViewWillEnter();
    event.target.complete();
  }

  fillTab() {
    for (var i = 0; i < 10; i++) {
      this.programmes.push(["00:00", "00:00"]);
    }

    for (var i = 0; i < 10; i++) {
      this.frequency.push("Tous les jours");
    }
    for (var i = 0; i < 10; i++) {
      this.colors.push("grey");
    }
  }

  secondsToHoursMinutes(secs) {
    if (secs < 0) {
      secs = Math.abs(secs);
    }
    var hours = Math.trunc(secs / 3600);
    var minutes = Math.trunc((secs % 3600) / 60);
    if (hours < 10) {
      this.formattedHours = "0" + hours;
    } else {
      this.formattedHours = hours.toString();
    }
    if (minutes < 10) {
      this.formattedMinutes = "0" + minutes;
    } else {
      this.formattedMinutes = minutes.toString();
    }
    var res = this.formattedHours + ":" + this.formattedMinutes;
    return res;
  }

  hoursMinutesToSeconds(hm) {
    var splitted = hm.split(":");
    var hours = parseInt(splitted[0]) * 3600;
    var minutes = parseInt(splitted[1]) * 60;
    var res = hours + minutes;
    return res;
  }

  positiveToNegative(pos) {
    var res = -Math.abs(pos);
    return res;
  }

  convertDaysCode(dc) {
    var res;
    switch (dc) {
      case 0:
        res = 9;
        break;
      case 1:
        res = 3;
        break;
      case 2:
        res = 4;
        break;
      case 3:
        res = 5;
        break;
      case 4:
        res = 6;
        break;
      case 5:
        res = 7;
        break;
      case 8:
        res = 9;
        break;
      case 7:
        res = 0;
        break;
      case 8:
        res = 2;
        break;
      case 9:
        res = 1;
        break;
    }
    return res;
  }

  reverseConvertDaysCode(dc) {
    var res;
    switch (dc) {
      case "Tous les jours":
        res = 7;
        break;
      case "Semaine":
        res = 9;
        break;
      case "Weekend":
        res = 8;
        break;
      case "Lundi":
        res = 1;
        break;
      case "Mardi":
        res = 2;
        break;
      case "Mercredi":
        res = 3;
        break;
      case "Jeudi":
        res = 4;
        break;
      case "Vendredi":
        res = 5;
        break;
      case "Samedi":
        res = 6;
        break;
      case "Dimanche":
        res = 0;
        break;
    }
    return res;
  }

  getUPCparams() {
    setTimeout(async () => {
      await this.global.upcmodbus.client
        .readHoldingRegisters(40068, 100)
        .then((res) => {
          //programme 1
          var tab = [res[4], res[5]];
          this.pStart.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          var tab = [res[6], res[7]];
          this.pEnd.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          this.frequency2.push(
            this.frequencyOptions[this.convertDaysCode(res[8])]
          );
          var tab = [res[9]];
          this.intensity.push(
            this.global.upcmodbus.client.registerToUint32(tab)
          );

          //programme 2
          tab = [res[10], res[11]];
          this.pStart.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          tab = [res[12], res[13]];
          this.pEnd.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          this.frequency2.push(
            this.frequencyOptions[this.convertDaysCode(res[14])]
          );
          tab = [res[15]];
          this.intensity.push(
            this.global.upcmodbus.client.registerToUint32(tab)
          );

          //programme 3
          tab = [res[16], res[17]];
          this.pStart.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          tab = [res[18], res[19]];
          this.pEnd.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          this.frequency2.push(
            this.frequencyOptions[this.convertDaysCode(res[20])]
          );
          tab = [res[21]];
          this.intensity.push(
            this.global.upcmodbus.client.registerToUint32(tab)
          );

          //programme 4
          tab = [res[22], res[23]];
          this.pStart.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          tab = [res[24], res[25]];
          this.pEnd.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          this.frequency2.push(
            this.frequencyOptions[this.convertDaysCode(res[26])]
          );
          tab = [res[27]];
          this.intensity.push(
            this.global.upcmodbus.client.registerToUint32(tab)
          );

          //programme 5
          tab = [res[28], res[29]];
          this.pStart.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          tab = [res[30], res[31]];
          this.pEnd.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          this.frequency2.push(
            this.frequencyOptions[this.convertDaysCode(res[32])]
          );
          tab = [res[33]];
          this.intensity.push(
            this.global.upcmodbus.client.registerToUint32(tab)
          );

          //programme 6
          tab = [res[34], res[35]];
          this.pStart.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          tab = [res[36], res[37]];
          this.pEnd.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          this.frequency2.push(
            this.frequencyOptions[this.convertDaysCode(res[38])]
          );
          tab = [res[39]];
          this.intensity.push(
            this.global.upcmodbus.client.registerToUint32(tab)
          );

          //programme 7
          tab = [res[40], res[41]];
          this.pStart.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          tab = [res[42], res[43]];
          this.pEnd.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          this.frequency2.push(
            this.frequencyOptions[this.convertDaysCode(res[44])]
          );
          tab = [res[45]];
          this.intensity.push(
            this.global.upcmodbus.client.registerToUint32(tab)
          );

          //programme 8
          tab = [res[46], res[47]];
          this.pStart.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          tab = [res[48], res[49]];
          this.pEnd.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          this.frequency2.push(
            this.frequencyOptions[this.convertDaysCode(res[50])]
          );
          tab = [res[51]];
          this.intensity.push(
            this.global.upcmodbus.client.registerToUint32(tab)
          );

          //programme 9
          tab = [res[52], res[53]];
          this.pStart.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          tab = [res[54], res[55]];
          this.pEnd.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          this.frequency2.push(
            this.frequencyOptions[this.convertDaysCode(res[56])]
          );
          tab = [res[57]];
          this.intensity.push(
            this.global.upcmodbus.client.registerToUint32(tab)
          );

          //programme 10
          tab = [res[58], res[59]];
          this.pStart.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          tab = [res[60], res[61]];
          this.pEnd.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          this.frequency2.push(
            this.frequencyOptions[this.convertDaysCode(res[62])]
          );
          tab = [res[63]];
          this.intensity.push(
            this.global.upcmodbus.client.registerToUint32(tab)
          );

          //programme aube
          tab = [res[64], res[65]];
          this.paDelay.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          tab = [res[66], res[67]];
          this.paDuration.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          tab = [res[69]];
          this.intensity.push(
            this.global.upcmodbus.client.registerToUint32(tab)
          );

          //programme aube sign
          if (
            this.global.upcmodbus.client.registerToUint32([res[64], res[65]]) >=
            0
          ) {
            this.sign.push("+");
            this.currentDawnTime =
              this.global.upcmodbus.client.registerToUint32([res[0], res[1]]);
            this.pAubeStart.push(
              this.secondsToHoursMinutes(
                this.global.upcmodbus.client.registerToUint32([
                  res[0],
                  res[1],
                ]) +
                  this.global.upcmodbus.client.registerToUint32([
                    res[64],
                    res[65],
                  ])
              )
            );
            this.pAubeEnd.push(
              this.secondsToHoursMinutes(
                this.global.upcmodbus.client.registerToUint32([
                  res[0],
                  res[1],
                ]) +
                  this.global.upcmodbus.client.registerToUint32([
                    res[64],
                    res[65],
                  ]) +
                  this.global.upcmodbus.client.registerToUint32([
                    res[66],
                    res[67],
                  ])
              )
            );
          } else {
            this.sign.push("-");
            this.currentDawnTime =
              this.global.upcmodbus.client.registerToUint32([res[0], res[1]]);
            this.pAubeStart[0] = this.secondsToHoursMinutes(
              this.currentDawnTime + this.hoursMinutesToSeconds(this.paDelay[0])
            );
            this.pAubeEnd[0] = this.secondsToHoursMinutes(
              this.currentDawnTime +
                this.hoursMinutesToSeconds(this.paDelay[0]) +
                this.hoursMinutesToSeconds(this.paDuration[0])
            );
          }

          //programme crepuscule
          tab = [res[70], res[71]];
          this.pcDelay.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          tab = [res[72], res[73]];
          this.pcDuration.push(
            this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32(tab)
            )
          );
          tab = [res[75]];
          this.intensity.push(
            this.global.upcmodbus.client.registerToUint32(tab)
          );

          //programme crepuscule sign
          if (
            this.global.upcmodbus.client.registerToUint32([res[70], res[71]]) >=
            0
          ) {
            this.sign.push("+");
            this.currentDuskTime =
              this.global.upcmodbus.client.registerToUint32([res[2], res[3]]);
            this.pCrepusculeStart.push(
              this.secondsToHoursMinutes(
                this.global.upcmodbus.client.registerToUint32([
                  res[2],
                  res[3],
                ]) +
                  this.global.upcmodbus.client.registerToUint32([
                    res[70],
                    res[71],
                  ])
              )
            );
            this.pCrepusculeEnd.push(
              this.secondsToHoursMinutes(
                this.global.upcmodbus.client.registerToUint32([
                  res[2],
                  res[3],
                ]) +
                  this.global.upcmodbus.client.registerToUint32([
                    res[70],
                    res[71],
                  ]) +
                  this.global.upcmodbus.client.registerToUint32([
                    res[72],
                    res[73],
                  ])
              )
            );
          } else {
            this.sign.push("-");
            this.currentDuskTime =
              this.global.upcmodbus.client.registerToUint32([res[2], res[3]]);
            this.pCrepusculeStart[0] = this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32([res[2], res[3]]) +
                this.global.upcmodbus.client.registerToUint32([
                  res[70],
                  res[71],
                ])
            );
            this.pCrepusculeEnd[0] = this.secondsToHoursMinutes(
              this.global.upcmodbus.client.registerToUint32([res[2], res[3]]) +
                this.global.upcmodbus.client.registerToUint32([
                  res[70],
                  res[71],
                ]) +
                this.global.upcmodbus.client.registerToUint32([
                  res[72],
                  res[73],
                ])
            );
          }

          this.drawChartjs();

          setTimeout(() => {
            this.finishRead = true;
          }, 1000);
        })
        .catch((err) => {});
    }, 5000);
  }

  /******** 
 parameters :
 - start
 - duration  
 - frequency
 - intensity
 
********/

  async onEdit(variable, parameterToEdit: string, value) {
    //set UPC params
    switch (parameterToEdit) {
      case "start":
        this.ecrir(variable, this.hoursMinutesToSeconds(value));
        break;
      case "end":
        this.ecrir(variable, this.hoursMinutesToSeconds(value));
        break;
      case "frequency":
        this.ecrir(variable, this.reverseConvertDaysCode(value));
        break;
      case "intensity":
        this.ecrir(variable, value);
        break;
    }
  }

  /******** 
     parameters :
    - offset
    - duration    
    - intensity
    
    ********/

  async onEditSunrise(variable, parameterToEdit: string, value) {
    switch (parameterToEdit) {
      case "offset":
        if (this.sign[0] == "+") {
          this.ecrir(variable, this.hoursMinutesToSeconds(value));

          //this.pAubeStart[0]=this.secondsToHoursMinutes(this.currentDawnTime + this.hoursMinutesToSeconds(this.paDelay[0]));
          //this.pAubeEnd[0]=this.secondsToHoursMinutes(this.currentDawnTime + this.hoursMinutesToSeconds(this.paDelay[0]) + this.hoursMinutesToSeconds(this.paDuration[0]));
        } else {
          this.ecrir(
            variable,
            this.positiveToNegative(this.hoursMinutesToSeconds(value))
          );

          //this.pAubeStart[0]=this.secondsToHoursMinutes(this.currentDawnTime - this.hoursMinutesToSeconds(this.paDelay[0]));
          //this.pAubeEnd[0]=this.secondsToHoursMinutes(this.currentDawnTime - this.hoursMinutesToSeconds(this.paDelay[0]) + this.hoursMinutesToSeconds(this.paDuration[0]));
        }
        break;
      case "duration":
        this.ecrir(variable, this.hoursMinutesToSeconds(value));
        break;

      case "intensity":
        this.ecrir(variable, value);
        break;
    }
  }

  /******** 
     parameters :
    - offset
    - duration    
    - intensity
    
    ********/

  async onEditSunset(variable, parameterToEdit: string, value) {
    switch (parameterToEdit) {
      case "offset":
        if (this.sign[1] == "+") {
          this.ecrir(variable, this.hoursMinutesToSeconds(value));

          //this.pCrepusculeStart[0]=this.secondsToHoursMinutes(this.currentDuskTime + this.hoursMinutesToSeconds(this.pcDelay[0]));
          //this.pCrepusculeEnd[0]=this.secondsToHoursMinutes(this.currentDuskTime + this.hoursMinutesToSeconds(this.pcDelay[0]) + this.hoursMinutesToSeconds(this.pcDuration[0]));
        } else {
          this.ecrir(
            variable,
            this.positiveToNegative(this.hoursMinutesToSeconds(value))
          );

          //this.pCrepusculeStart[0]=this.secondsToHoursMinutes(this.currentDuskTime - this.hoursMinutesToSeconds(this.pcDelay[0]));
          //this.pCrepusculeEnd[0]=this.secondsToHoursMinutes(this.currentDuskTime - this.hoursMinutesToSeconds(this.pcDelay[0]) + this.hoursMinutesToSeconds(this.pcDuration[0]));
        }
        break;

      case "duration":
        this.ecrir(variable, this.hoursMinutesToSeconds(value));
        break;

      case "intensity":
        await this.ecrir(variable, value);
        break;
    }
  }

  ionViewWillLeave() {
    console.log("quitter la page  :");
    clearInterval(this.do);
  }

  drawChartjs() {
    var stringToIntStartProgrammes = [];
    var stringToIntEndProgrammes = [];
    var stringToIntpAS;
    var stringToIntpAE;
    var stringToIntpCS;
    var stringToIntpCE;
    var barColors = [];

    this.pStart.forEach(function (element) {
      var parsed = element.split(":");
      var p = parseInt(parsed[1], 10) / 60;
      var p2 = parseInt(parsed[0]) + p;
      stringToIntStartProgrammes.push(p2);
    });

    this.pEnd.forEach(function (element) {
      var parsed = element.split(":");
      var p = parseInt(parsed[1], 10) / 60;
      var p2 = parseInt(parsed[0]) + p;
      stringToIntEndProgrammes.push(p2);
    });

    var parsedpAS = this.pAubeStart[0].split(":");
    var p = parseInt(parsedpAS[1], 10) / 60;
    var p2 = parseInt(parsedpAS[0]) + p;
    stringToIntpAS = p2;

    var parsedpAE = this.pAubeEnd[0].split(":");
    var p3 = parseInt(parsedpAE[1], 10) / 60;
    var p4 = parseInt(parsedpAE[0]) + p3;
    stringToIntpAE = p4;

    var parsedpCS = this.pCrepusculeStart[0].split(":");
    var p5 = parseInt(parsedpCS[1], 10) / 60;
    var p6 = parseInt(parsedpCS[0]) + p5;
    stringToIntpCS = p6;

    var parsedpCE = this.pCrepusculeEnd[0].split(":");
    var p7 = parseInt(parsedpCE[1], 10) / 60;
    var p8 = parseInt(parsedpCE[0]) + p7;
    stringToIntpCE = p8;

    this.intensity.forEach((intensityElement) => {
      switch (intensityElement) {
        case 0:
          barColors.push("#ffffff00");
          break;
        case 1:
          barColors.push("#D3D3D3");
          break;
        case 2:
          barColors.push("#CECECE");
          break;
        case 3:
          barColors.push("#C0C0C0");
          break;
        case 4:
          barColors.push("#A9A9A9");
          break;
        case 5:
          barColors.push("#9E9E9E");
          break;
        case 6:
          barColors.push("#8f8f8f");
          break;
        case 7:
          barColors.push("#808080");
          break;
        case 8:
          barColors.push("#696969");
          break;
        case 9:
          barColors.push("#303030");
          break;
        case 10:
          barColors.push("#130E0A");
          break;
      }
    });

    var data = [
      [stringToIntStartProgrammes[0], stringToIntEndProgrammes[0]],
      [stringToIntStartProgrammes[1], stringToIntEndProgrammes[1]],
      [stringToIntStartProgrammes[2], stringToIntEndProgrammes[2]],
      [stringToIntStartProgrammes[3], stringToIntEndProgrammes[3]],
      [stringToIntStartProgrammes[4], stringToIntEndProgrammes[4]],
      [stringToIntStartProgrammes[5], stringToIntEndProgrammes[5]],
      [stringToIntStartProgrammes[6], stringToIntEndProgrammes[6]],
      [stringToIntStartProgrammes[7], stringToIntEndProgrammes[7]],
      [stringToIntStartProgrammes[8], stringToIntEndProgrammes[8]],
      [stringToIntStartProgrammes[9], stringToIntEndProgrammes[9]],
      [stringToIntpAS, stringToIntpAE],
      [stringToIntpCS, stringToIntpCE],
    ];

    var ctx = "myChart";
    var myChart = new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: [
          "P1",
          "P2",
          "P3",
          "P4",
          "P5",
          "P6",
          "P7",
          "P8",
          "P9",
          "P10",
          "Aube",
          "Crepuscule",
        ],
        datasets: [
          {
            backgroundColor: barColors,
            data: data,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        /*title: {
            display: true,
            text: 'Aube Crépuscule'
          },*/
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 24,
                stepSize: 6,
              },
              position: "top",
            },
          ],
        },
      },
    });
  }

  startstop() {
    this.onChangeDiff();
  }

  onChangeDiff() {
    var d = new Date();
    this.global.logs.push(
      this.global.msToTime(d.getTime()) + " - appel on change diff"
    );
    this.global.onWriteEnable(this.correspondancesRegistres.upcMode, 2);
  }

  onDisableDiff() {
    this.ecrir(this.correspondancesRegistres.upcMode, 0);
  }

  onEnableDiff() {
    this.ecrir(this.correspondancesRegistres.upcMode, 1);
  }

  onCheck() {
    var d = new Date();
    this.global.logs.push(
      this.global.msToTime(d.getTime()) + " - appel on check"
    );
    this.global
      .onWriteEnable(this.correspondancesRegistres.upcMode, 3)
      .then(() => {
        this.colorcheck = "primary";
        this.colordis = "light";
        this.colorplayfiff = "light";
        this.colordif = "light";
        this.typediff = "Mode CHECK Pressions";
        this.diffcolor = "warning";
      });
  }

  goToNextPage() {
    clearInterval(this.global.interval);

    this.storage.get("nexturl").then((res) => {
      this.router.navigate([res]);
    });
  }
}
