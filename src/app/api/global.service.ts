import { Injectable, NgZone } from "@angular/core";
import { UPCV3 } from "../model/upcv3/upcv3";
import {
  Platform,
  LoadingController,
  ToastController,
  AlertController,
  Events,
} from "@ionic/angular";
import { Upcv3serviceService } from "./upcv3service.service";
import { Hotspot } from "@ionic-native/hotspot/ngx";
import { UPCModbus } from "../model/upcv3/upcmodbus";
import { Storage } from "@ionic/storage";
import { User } from "../model/user";
import { Router } from "@angular/router";
import { Network } from "@ionic-native/network/ngx";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
import { resolve } from "url";
import { Timestamp } from "rxjs/internal/operators/timestamp";
declare var WifiWizard2: any;

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  public upc3: UPCV3;
  public op: string;
  public B1 = [];
  public B2 = [];
  public designationB1 = [];
  public designationB2 = [];
  public ssid = "";
  public isBBAM = false;
  public upcmodbus: UPCModbus;
  public username = "";
  public password = "";
  public appPagesModeIntervention = [
    {
      title: "Logs",
      url: "/debug",
    },
    {
      title: "Intervention sur Ceinture",
      url: "/interventionceinture",
      icon: "hammer",
    },
    {
      title: "Paramètres Généraux UPC",
      url: "/namepiege",
    },
    ,
    /*
    {
      title : "Initialisation / Echange boitier UPC",
      url : "/initechangeboitierupc"
    }
    
    ,
    {
      title : "Modification du nombre de pièges",
      url : "/modifnbpieges"
    },
    {
      title : "Vérification débits pièges individuels",
      url : "/verifpiegesindividuels"
    }
    
    */ {
      title: "Changement de bouteilles sur ceinture",
      url: "/addbottleceint",
      icon: "barcode",
    },
    ,
    /*
    {
      title: 'Réglage des détendeurs',
      url: '/adjustment',
      icon: 'return-right'
    },
    {
      title : "Contrôle débits Mini/Maxi",
      url : "/controldiff",
      icon : "infinite",
    }
    
    */ {
      title: "Programmation",
      icon: "sunny",
      url: "/synchro",
    },
    {
      title: "Etat de la Connexion",
      icon: "globe",
      url: "/connection",
    },
    {
      title: "Contrôles débits et pressions CO2",
      url: "/cdiff",
    },
    ,
    /*
    {
      title : "Mesure des pressions de sortie",
      url : "/check",
    }
    
    */ {
      title: "Paramètre de Communication",
      url: "/comunicationparam",
      icon: "wifi",
    },
    {
      title: "Paramètre d'Alarme",
      url: "/alarmparam",
      icon: "alarm",
    },
    /*
    {
      title : "Commentaires",
      url : "/commentaires"
    },
    {
      title : "Rapport de visite",
      url : "/rapportvisite"
    },
    {
      title : "Fin d'intervention",
      url : "/finintervention"
    }
*/
  ];

  public appPagesModeMvtBouteilles = [
    {
      title: "Mouvements de bouteilles",
      url: "/optionbottle",
    },
  ];

  public appPagesModeTest = public;
  appPagesModeIntervention = [
    {
      title: "Logs",
      url: "/debug",
    },
    {
      title: "Intervention sur Ceinture",
      url: "/interventionceinture",
      icon: "hammer",
    },
    {
      title: "Paramètres Généraux UPC",
      url: "/namepiege",
    },
    ,
    /*
    {
      title : "Initialisation / Echange boitier UPC",
      url : "/initechangeboitierupc"
    }
    
    ,
    {
      title : "Modification du nombre de pièges",
      url : "/modifnbpieges"
    },
    {
      title : "Vérification débits pièges individuels",
      url : "/verifpiegesindividuels"
    }
    
    */ {
      title: "Changement de bouteilles sur ceinture",
      url: "/addbottleceint",
      icon: "barcode",
    },
    ,
    /*
    {
      title: 'Réglage des détendeurs',
      url: '/adjustment',
      icon: 'return-right'
    },
    {
      title : "Contrôle débits Mini/Maxi",
      url : "/controldiff",
      icon : "infinite",
    }
    
    */ {
      title: "Programmation",
      icon: "sunny",
      url: "/synchro",
    },
    {
      title: "Etat de la Connexion",
      icon: "globe",
      url: "/connection",
    },
    {
      title: "Contrôles débits et pressions CO2",
      url: "/cdiff",
    },
    ,
    /*
    {
      title : "Mesure des pressions de sortie",
      url : "/check",
    }
    
    */ {
      title: "Paramètre de Communication",
      url: "/comunicationparam",
      icon: "wifi",
    },
    {
      title: "Paramètre d'Alarme",
      url: "/alarmparam",
      icon: "alarm",
    },
    /*
    {
      title : "Commentaires",
      url : "/commentaires"
    },
    {
      title : "Rapport de visite",
      url : "/rapportvisite"
    },
    {
      title : "Fin d'intervention",
      url : "/finintervention"
    }
*/
  ];
  pages = [];

  interval: any;
  function: any;
  logs = [];
  mode = "";
  lectureCycliqueEnCours = false;
  lectureStatiqueEnCours = false;
  ecritureEnCours = false;
  statutConnexion = "Aucune";
  connexionRequise = "Aucune";
  currentssid;
  global: any;
  upcname = "";
  appelOnConnectModbus = false;
  needToCheckState = false;
  needToCheckFlags = false;
  intv: NodeJS.Timer;
  startReadDate;
  intervalOnreadStatique: NodeJS.Timer;
  intervalOnReadCyclique: NodeJS.Timer;
  needToCallOnReadStatique = false;
  needToCallOnReadCyclique = false;
  onConnectEnCours = false;
  count;
  writeMultipleRegisters = false;
  currentPage: any;

  codebarsB1 = []; //codebars formés avec le code upc et les caractères nuls
  codebarsB1SansCodeUpc = [];
  stringsB1 = []; //strings créées avec le type de bouteille (affichées sur la page)
  contenusB1 = []; //contenus des bouteilles en B1
  contenantB1 = 0;
  isAddedB1 = [];
  bottleInconnuesB1 = []; //bouteilles inconnues ajoutées depuis l'admin sans barcode
  contenuAjouteEnB1 = 0;
  contenuEnleveEnB1 = 0;
  addedBottlesB1: any = { barcodes: [], contenus: [] };

  codebarsB2 = []; //codebars formés avec le code upc et les caractères nuls
  codebarsB2SansCodeUpc = [];
  contenantB2 = 0;
  stringsB2 = []; //strings créées avec le type de bouteille (affichées sur la page)
  contenusB2 = []; //désignations des bouteilles en B2
  isAddedB2 = [];
  bottleInconnuesB2 = []; //bouteilles inconnues ajoutées depuis l'admin sans barcode
  contenuAjouteEnB2 = 0;
  contenuEnleveEnB2 = 0;
  addedBottlesB2: any = { barcodes: [], contenus: [] };

  resetListeCodebarsB1 = false;
  resetListeCodebarsB2 = false;

  contenantInitialB1 = 0; //contenant de la réserve B1 à l'ouverture de la page
  contenantFinalB1 = 0; //capacité de la réserve B1 à la fin d'utilisation de la page (après ajout et enlèvement de bouteilles)
  contenantInitial = 0;
  contenantFinalB2 = 0;

  retryCount = 0;
  token: string;
  displayLoading: boolean;
  perteConnexion = false;
  contenuB1 = 0;
  contenuB2 = 0;

  constructor(
    public platform: Platform,
    public loadingCTRL: LoadingController,
    private upcv3Service: Upcv3serviceService,
    private hotspot: Hotspot,
    private ngZone: NgZone,
    private storage: Storage,
    private upc3serv: Upcv3serviceService,
    private toastCtrl: ToastController,
    public alertController: AlertController,
    private router: Router,
    private network: Network,
    private diagnostic: Diagnostic,
    private events: Events
  ) {}

  public onSynchroB1B2(token) {
    if (localStorage.getItem("bottleB1")) {
      var jsonB1 = JSON.parse(localStorage.getItem("bottleB1"));
      //alert(JSON.stringify(jsonB1));
      jsonB1.endate = new Date().toISOString().substr(0, 16);
      if (this.platform.is("ios")) {
        WifiWizard2.iOSDisconnectNetwork("BBAM").then(async (res) => {
          var loading = await this.loadingCTRL.create({
            message: "Synchronisation avec le Serveur en cours...",
            duration: 10000,
          });
          loading.present();
          this.upcv3Service.addBottleBelt(jsonB1, token).subscribe((res) => {
            loading.dismiss();
          });
        });
      } else {
        this.upcv3Service.addBottleBelt(jsonB1, token).subscribe(
          (res) => {
            alert(JSON.stringify(res));
          },
          (err) => {
            JSON.stringify(err);
          }
        );
      }
    }
    if (localStorage.getItem("bottleB2")) {
      var jsonB2 = JSON.parse(localStorage.getItem("bottleB2"));
      jsonB2.endate = new Date().toISOString().substr(0, 16);
      if (this.platform.is("ios")) {
        WifiWizard2.iOSDisconnectNetwork("BBAM").then(async (res) => {
          var loading = await this.loadingCTRL.create({
            message: "Synchronisation avec le Serveur en cours...",
            duration: 10000,
          });
          loading.present();
          this.upcv3Service.addBottleBelt(jsonB2, token).subscribe((res) => {
            loading.dismiss();
          });
        });
      } else {
        WifiWizard2.disconnect("BBAM").then(async (res) => {
          var loading = await this.loadingCTRL.create({
            message: "Synchronisation avec le Serveur en cours...",
            duration: 10000,
          });
          loading.present();
          this.upcv3Service.addBottleBelt(jsonB2, token).subscribe((res) => {
            loading.dismiss();
          });
        });
      }
    }
  }
  async ConnectError() {
    let toast = await this.toastCtrl.create({
      message: "Veuillez vous connectez au WiFi de l'UPC",
      duration: 4000,
      position: "middle",
    });

    toast.present();
  }
  async UpcReadWriteError() {
    let toast = await this.toastCtrl.create({
      message: "Echec lors de la communication avec l'UPC",
      duration: 4000,
      position: "middle",
    });

    toast.present();
  }
  async UpcErrorCoAuto() {
    let toast = await this.toastCtrl.create({
      message:
        "Erreur lors de la connexion automatique ! Veuillez vous connecter manuellement via les Réglages!",
      duration: 4000,
      position: "middle",
    });

    toast.present();
  }

  async checkNextPage() {
    var urls = [];
    var success: Boolean;
    const url = this.router.url;
    const splittedUrl = url.split("/");
    const urlFinal = splittedUrl[1];

    var sequence = await this.storage.get("sequence");
    if (sequence != undefined) {
      if (sequence != "") {
        sequence.forEach((element) => {
          urls.push(element[2]);
        });
      }
      if (urls.includes(urlFinal)) {
        var pos = urls.indexOf(urlFinal);
        sequence[pos][1] = true;
        this.storage.set("sequence", sequence);
        if (urls[pos + 1] != undefined) {
          this.storage.set("nexturl", urls[pos + 1]);
          success = true;
        }
      }
    }
    return success;
  }

  checkMode() {
    var response;
    switch (this.mode) {
      case "intervention":
        this.pages = this.appPagesModeIntervention;
        break;
      case "mvtBouteilles":
        this.pages = this.appPagesModeMvtBouteilles;
        break;
      case "modeTest":
        this.pages = this.appPagesModeTest;
        break;
    }
    response = this.pages;
    return response;
  }

  onConnect(error) {
    //debug
    this.currentPage = this.router.getCurrentNavigation();
    this.logs.push(" -fonction onConnect"); //console.log(msToTime(300000))

    ///
    this.onConnectEnCours = true;

    return new Promise(async (resolve, reject) => {
      //debug
      this.currentssid = await WifiWizard2.getConnectedSSID();

      //
      var d = new Date();
      if (this.connexionRequise == "Aucune") {
        var d = new Date();
        resolve("");
      }
      if (this.connexionRequise == "UPC") {
        var d = new Date();
        let res = this.storage.get("ssid").then((res) => {
          this.ssid = res;
          var d = new Date();

          this.diagnostic
            .isWifiEnabled()
            .then(async (res2) => {
              if (res2 == true) {
                //WIFI activé
                var d = new Date();
                res = await WifiWizard2.getConnectedSSID();
                var d2 = new Date();
                //alert(this.msToTime(d2.getTime())+" - res : "+res)
                this.currentssid = res;
                var d = new Date();
                if (this.ssid == undefined || this.ssid == "") {
                  //ssid vide
                  var d = new Date();
                  this.appelOnConnectModbus = true;
                  this.onConnectModbus()
                    .then(async () => {
                      //on tente une connexion modbus pour déterminer si c'est un upc
                      //connexion modbus réussie : c'est un upc
                      var d = new Date();
                      this.appelOnConnectModbus = false;

                      if (this.mode != "modeTest") {
                        await this.storage.set("ssid", this.currentssid); //le ssid par défaut devient celui auquel on est connecté
                        this.ssid = this.currentssid;
                      }
                      this.perteConnexion = false;

                      resolve("");
                    })
                    .catch((err) => {
                      var d = new Date();
                      this.appelOnConnectModbus = false;
                      if (
                        !window.confirm(
                          "La connexion à l'UPC n'a pas pu être établie. Rapprochez-vous et raccordez-vous à l'UPC puis appuyez sur 'OK'."
                        )
                      ) {
                        var d = new Date();
                        this.connexionRequise = "Aucune";
                        resolve("");
                      } else {
                        var d = new Date();
                        resolve("");
                      }
                    });
                } else {
                  //ssid non vide
                  var d = new Date();
                  if (this.currentssid == this.ssid) {
                    //le ssid du réseau auquel on est connecté est le même que celui de la ceinture sélectionnée
                    var d = new Date();
                    this.appelOnConnectModbus = true;
                    this.onConnectModbus()
                      .then(() => {
                        this.appelOnConnectModbus = false;
                        this.statutConnexion = "UPC";
                        this.perteConnexion = false;
                        resolve("");
                      })
                      .catch((err) => {
                        var d = new Date();
                        this.appelOnConnectModbus = false;
                        if (
                          !window.confirm(
                            "La connexion à l'UPC n'a pas pu être établie. Rapprochez-vous et raccordez-vous à l'UPC puis appuyez sur 'OK'."
                          )
                        ) {
                          var d = new Date();
                          this.connexionRequise = "Aucune";
                          resolve("");
                        } else {
                          var d = new Date();
                          resolve("");
                        }
                      });
                  } else {
                    //le ssid du réseau auquel on est connecté est différent de celui de la ceinture sélectionnée
                    var d = new Date();
                    //if(this.perteConnexion != true){
                    if (this.platform.is("android")) {
                      this.logs.push(" - android");
                      this.logs.push(" - ssid : " + this.ssid);

                      this.storage.get("password").then((res) => {
                        var password = res;
                        var d = new Date();
                        this.logs.push(" - appel wifiwizard2.connect()");
                        WifiWizard2.connect(this.ssid, password)
                          .then(() => {
                            var d = new Date();
                            this.appelOnConnectModbus = true;
                            this.onConnectModbus()
                              .then(async () => {
                                this.appelOnConnectModbus = false;
                                this.currentssid = this.ssid;
                                this.perteConnexion = false;
                                resolve("");
                              })
                              .catch((err) => {
                                var d = new Date();
                                this.statutConnexion = "Aucune";
                                if (
                                  !window.confirm(
                                    "La connexion à l'UPC n'a pas pu être établie. Rapprochez-vous et raccordez-vous à l'UPC puis appuyez sur 'OK'."
                                  )
                                ) {
                                  var d = new Date();
                                  this.connexionRequise = "Aucune";
                                  resolve("");
                                } else {
                                  var d = new Date();
                                  resolve("");
                                }
                              });
                          })
                          .catch(() => {
                            var d = new Date();
                            this.logs.push(" - fail connect");
                          });
                      });
                    } else {
                      if (this.platform.is("ios")) {
                        this.logs.push(" - ios");
                        this.logs.push(" - ssid : " + this.ssid);

                        this.storage.get("password").then((res) => {
                          var password = res;
                          var d4 = new Date();
                          this.logs.push(" - password : " + password);
                          this.logs.push(
                            " - appel wifiwizard2 iOSConnectNetwork : " +
                              password
                          );

                          WifiWizard2.iOSConnectNetwork(this.ssid, password)
                            .then(() => {
                              var d = new Date();
                              this.logs.push(" - connected to upc wifi");
                              this.appelOnConnectModbus = true;
                              this.onConnectModbus()
                                .then(async () => {
                                  this.appelOnConnectModbus = false;
                                  this.logs.push(" - connexion Modbus réussie");
                                  this.currentssid = this.ssid;
                                  this.perteConnexion = false;
                                  resolve("");
                                })
                                .catch((err) => {
                                  var d = new Date();
                                  this.statutConnexion = "Aucune";
                                  this.logs.push(
                                    " - statut connexion : Aucune "
                                  );
                                  this.logs.push(
                                    " - présentation alerte connexion upc : "
                                  );
                                  if (
                                    !window.confirm(
                                      "La connexion à l'UPC n'a pas pu être établie. Rapprochez-vous et raccordez-vous à l'UPC puis appuyez sur 'OK'."
                                    )
                                  ) {
                                    var d = new Date();
                                    this.logs.push(
                                      " - réponse utilisateur : annuler"
                                    );
                                    this.connexionRequise = "Aucune";
                                    resolve("");
                                  } else {
                                    var d = new Date();
                                    this.logs.push(
                                      " - réponse utilisateur : OK"
                                    );
                                    resolve("");
                                  }
                                });
                            })
                            .catch((err) => {
                              var d = new Date();
                              this.logs.push(
                                " - fail connect :" + JSON.stringify(err)
                              );
                            });
                        });
                      }
                    }
                    //}
                  }
                }
              } else {
                //WIFI désactivé
                var d = new Date();
                this.logs.push(" - wifi désactivé");
                if (this.ssid == undefined || this.ssid == "") {
                  //ssid vide
                  var d = new Date();
                  this.logs.push(" - ssid vide : " + this.ssid);
                  this.logs.push(" - statut connexion : Aucune ");
                  this.statutConnexion = "Aucune";
                  var d = new Date();
                  this.logs.push(" - présentation alerte connexion upc : ");
                  if (
                    !window.confirm(
                      "La page a besoin d'être connecté à l'UPC. Connectez-vous à l'UPC puis appuyez sur 'OK'."
                    )
                  ) {
                    var d = new Date();
                    this.logs.push(" - réponse utilisateur : annuler");
                    this.connexionRequise = "Aucune";
                    resolve("");
                  } else {
                    var d = new Date();
                    this.logs.push(" - réponse utilisateur : OK");
                    resolve("");
                  }
                } else {
                  //ssid non vide
                  var d = new Date();
                  this.logs.push(" - ssid stocké non vide");
                  this.storage.get("password").then((res) => {
                    var password = res;
                    if (this.platform.is("android")) {
                      this.logs.push(
                        " - ssid : " + this.ssid + " - password : " + password
                      );
                      WifiWizard2.connect(this.ssid, password)
                        .then((res) => {
                          var d = new Date();
                          this.logs.push(
                            " - connexion au point d'accès réussie"
                          );
                          this.currentssid = this.ssid;
                          this.logs.push(" - current ssid : " + this.ssid);
                          this.appelOnConnectModbus = true;
                          this.onConnectModbus()
                            .then(() => {
                              var d = new Date();
                              this.appelOnConnectModbus = false;
                              this.logs.push(" - connexion Modbus réussie");
                              this.logs.push(" - current ssid = ssid connecté");
                              this.currentssid = this.ssid;
                              this.perteConnexion = false;
                              resolve("");
                            })
                            .catch((err) => {
                              var d = new Date();
                              this.appelOnConnectModbus = false;
                              this.logs.push(" - connexion Modbus échouée");
                              setTimeout(() => {
                                var d2 = new Date();
                                this.logs.push(
                                  this.msToTime(d2.getTime()) +
                                    " - Nouvelle tentative connexion modbus"
                                );
                                this.onConnectModbus()
                                  .then(() => {
                                    var d = new Date();
                                    this.appelOnConnectModbus = false;
                                    this.logs.push(
                                      " - connexion Modbus réussie"
                                    );
                                    this.logs.push(
                                      " - current ssid = ssid connecté"
                                    );
                                    this.currentssid = this.ssid;
                                    this.perteConnexion = false;
                                    resolve("");
                                  })
                                  .catch((err) => {
                                    var d = new Date();
                                    this.appelOnConnectModbus = false;
                                    this.logs.push(
                                      " - connexion Modbus échouée"
                                    );
                                    this.logs.push(
                                      " - présentation alerte connexion upc : "
                                    );
                                    if (
                                      !window.confirm(
                                        "La connexion à l'UPC n'a pas pu être établie. Rapprochez-vous et raccordez-vous à l'UPC puis appuyez sur 'OK'."
                                      )
                                    ) {
                                      var d = new Date();
                                      this.logs.push(
                                        " - réponse utilisateur : annuler"
                                      );
                                      this.connexionRequise = "Aucune";
                                      resolve("");
                                    } else {
                                      var d = new Date();
                                      this.logs.push(
                                        " - réponse utilisateur : OK"
                                      );
                                      resolve("");
                                    }
                                  });
                              }, 1000);
                            });
                        })
                        .catch((err) => {
                          //connexion au point d'accès échouée
                          this.statutConnexion = "Aucune";
                          var d = new Date();
                          this.logs.push(
                            " - connexion au point d'accès échouée : " +
                              JSON.stringify(err)
                          );
                          this.statutConnexion = "Aucune";
                          this.logs.push(" - statut connexion : Aucune ");
                          this.logs.push(
                            " - présentation alerte connexion upc : "
                          );
                          if (
                            !window.confirm(
                              "La page a besoin d'être connecté à l'UPC. Connectez-vous à l'UPC puis appuyez sur 'OK'."
                            )
                          ) {
                            var d = new Date();
                            this.logs.push(" - réponse utilisateur : annuler");
                            this.connexionRequise = "Aucune";
                            resolve("");
                          } else {
                            var d = new Date();
                            this.logs.push(" - réponse utilisateur : OK");
                            resolve("");
                          }
                        });
                    } else {
                      if (this.platform.is("ios")) {
                        this.storage.get("password").then((res) => {
                          var password = res;

                          WifiWizard2.iOSConnectNetwork(this.ssid, password)
                            .then(() => {
                              var d = new Date();
                              this.logs.push(
                                " - connexion au point d'accès réussie"
                              );
                              this.appelOnConnectModbus = true;
                              this.onConnectModbus()
                                .then((res) => {
                                  var d = new Date();
                                  this.appelOnConnectModbus = false;
                                  this.logs.push(" - connexion Modbus réussie");
                                  this.logs.push(
                                    " - current ssid = ssid connecté"
                                  );
                                  this.currentssid = this.ssid;
                                  this.perteConnexion = false;
                                  resolve("");
                                })
                                .catch((err) => {
                                  var d = new Date();
                                  this.appelOnConnectModbus = false;
                                  this.logs.push(" - connexion Modbus échouée");
                                  this.logs.push(
                                    " - présentation alerte connexion upc : "
                                  );
                                  if (
                                    !window.confirm(
                                      "La connexion à l'UPC n'a pas pu être établie. Rapprochez-vous et raccordez-vous à l'UPC puis appuyez sur 'OK'."
                                    )
                                  ) {
                                    var d = new Date();
                                    this.logs.push(
                                      " - réponse utilisateur : annuler"
                                    );
                                    this.connexionRequise = "Aucune";
                                    resolve("");
                                  } else {
                                    var d = new Date();
                                    this.logs.push(
                                      " - réponse utilisateur : OK"
                                    );
                                    resolve("");
                                  }
                                });
                            })
                            .catch((err) => {
                              //connexion au point d'accès échouée
                              var d = new Date();
                              this.logs.push(
                                " - connexion au point d'accès échouée : " +
                                  JSON.stringify(err)
                              );
                              this.statutConnexion = "Aucune";
                              this.logs.push(" - statut connexion : Aucune ");
                              this.logs.push(
                                " - présentation alerte connexion upc : "
                              );
                              if (
                                !window.confirm(
                                  "La page a besoin d'être connecté à l'UPC. Connectez-vous à l'UPC puis appuyez sur 'OK'."
                                )
                              ) {
                                var d = new Date();
                                this.logs.push(
                                  " - réponse utilisateur : annuler"
                                );
                                this.connexionRequise = "Aucune";
                                resolve("");
                              } else {
                                var d = new Date();
                                this.logs.push(" - réponse utilisateur : OK");
                                resolve("");
                              }
                            });
                        });
                      }
                    }
                  });
                }
              }
            })
            .catch(async (err) => {
              var d = new Date();
              this.logs.push(
                " - Erreur fonction isWifiEnabled : " + JSON.stringify(err)
              );
              this.logs.push(" - wifi non connecté");
              var pass = await this.storage.get("password");
              //if(this.perteConnexion == true){
              this.logs.push(
                " - appel wifiwizard2.connect() - wifi non connecté"
              );
              WifiWizard2.connect(this.ssid, pass)
                .then((res) => {
                  var d10 = new Date();
                  this.logs.push(
                    this.msToTime(d10.getTime()) +
                      " -connexion établie : " +
                      res
                  );
                  resolve("");
                })
                .catch((err) => {
                  this.statutConnexion = "Aucune";
                  var d11 = new Date();
                  this.logs.push(
                    this.msToTime(d11.getTime()) +
                      " -connexion échouée : " +
                      err
                  );
                  this.logs.push(
                    this.msToTime(d11.getTime()) +
                      " - statut connexion : Aucune "
                  );
                  this.logs.push(
                    this.msToTime(d11.getTime()) +
                      " - présentation alerte connexion upc : "
                  );
                  if (
                    !window.confirm(
                      "La page a besoin d'être connecté à l'UPC. Connectez-vous à l'UPC puis appuyez sur 'OK'."
                    )
                  ) {
                    var d = new Date();
                    this.logs.push(" - réponse utilisateur : annuler");
                    this.connexionRequise = "Aucune";
                    reject("");
                  } else {
                    var d = new Date();
                    this.logs.push(" - réponse utilisateur : OK");
                    this.perteConnexion = false;
                    resolve("");
                  }
                });
              //}
            });
        });
      }
      if (this.connexionRequise == "Serveur") {
        var d = new Date();
        this.logs.push(" - connexion requise : serveur");

        if (error.status == 403) {
          this.logs.push(" - erreur 403");
          this.login()
            .then(() => {
              resolve("retry");
            })
            .catch(() => {
              alert("login failed");
              resolve("");
            });
        } else {
          if (
            window.confirm(
              "Une connexion internet est requise pour cette page. Raccordez-vous à internet puis appuyez sur 'OK'."
            )
          ) {
            resolve("retry");
          } else {
            this.connexionRequise = "Aucune";
            resolve("cancel");
          }
        }
      }
    });
  }

  onReadStatiqueEnable() {
    this.displayLoading = true;

    // debug : ////////////////////////////////////////
    console.log("fonction -On read Statique : ");

    ///////////////////////////////////////////////////:
    return new Promise<void>(async (resolve, reject) => {
      this.lectureStatiqueEnCours = true;

      console.log(" - lecture cyclique : " + this.lectureCycliqueEnCours);
      console.log(" - lecture statique : " + this.lectureStatiqueEnCours);

      console.log(" - ecriture : " + this.ecritureEnCours);
      console.log(" - onConnect : " + this.onConnectEnCours);
      console.log(" - statut connexion : " + this.statutConnexion);

      if (
        this.ecritureEnCours == true ||
        this.lectureCycliqueEnCours == true ||
        this.onConnectEnCours == true ||
        this.statutConnexion != "UPC"
      ) {
        this.lectureStatiqueEnCours = false;
        var d = new Date();
        console.log(
          " -attente onReadStatique  ( il y a une opreation en cours :)"
        );
        this.onWait(50, 60000, "onReadStatiqueEnable")
          .then(() => {
            var d = new Date();
            this.logs.push(" - fin d'attente onReadStatique ");
            //var d=new Date()
            //this.logs.push( " - statut connexion = UPC")
            if (this.upcmodbus != undefined) {
              this.storage.get("upcname").then((res) => {
                this.upcname = res;
                var d = new Date();
                this.logs.push(" - appel fonction onReadStatique");
                this.logs.push(
                  " - lectureCycliqueEnCours : " + this.lectureCycliqueEnCours
                );
                const url = this.router.url;
                const splittedUrl = url.split("/");
                const urlFinal = splittedUrl[1];
                console.log(" (on read statique )- page : " + urlFinal);

                /* reset des listes pour la page ajout de bouteilles */
                if (this.resetListeCodebarsB1 == true) {
                  this.codebarsB1 = [];
                  this.codebarsB1SansCodeUpc = [];
                  this.contenusB1 = [];
                  this.stringsB1 = [];
                }
                if (this.resetListeCodebarsB2 == true) {
                  this.codebarsB2 = [];
                  this.codebarsB2SansCodeUpc = [];
                  this.contenusB2 = [];
                  this.stringsB2 = [];
                }

                this.upcmodbus
                  .onReadStatique(this.upcname, this.mode, urlFinal)
                  .then((res) => {
                    if (res == true) {
                      //var d=new Date()
                      console.log(" - lecture réussie");
                      this.events.publish("loadParameters");
                      this.lectureStatiqueEnCours = false;
                      var d = new Date();
                      console.log(
                        "durée lecture statique : " +
                          (d.getTime() - this.startReadDate.getTime())
                      );
                      this.displayLoading = false;
                      resolve();
                    } else {
                      if (res == "Terminer l'intervention en cours") {
                        var d = new Date();
                        this.logs.push(" - Terminer l'intervention en cours");
                        this.router.navigate(["finintervention"]);
                        this.lectureStatiqueEnCours = false;
                        this.displayLoading = false;
                        resolve();
                      } else {
                        if (res == "Abandonner l'intervention en cours") {
                          var d = new Date();
                          this.logs.push(
                            " - Abandonner l'intervention en cours"
                          );
                          this.resetParameters().then(() => {
                            this.router.navigate(["home"]);
                            this.lectureStatiqueEnCours = false;
                            this.displayLoading = false;
                            resolve();
                          });
                        } else {
                          if (res == "Se rapprocher de l'upc") {
                            var d = new Date();
                            console.log(" - Se rapprocher de l'upc");
                            this.displayLoading = false;
                            resolve();
                          } else {
                            if (res.object.errCode != undefined) {
                              var d = new Date();
                              console.log(
                                " (onread sataique erreur)- " +
                                  res.object.errCode +
                                  " - bloc :" +
                                  res.object.bloc
                              );

                              console.log(" - statut connexion : Aucune ");
                              this.statutConnexion = "Aucune";
                              //this.onConnect(res.object.errCode).then(res=>{
                              this.lectureStatiqueEnCours = false;
                              this.displayLoading = false;
                              resolve();
                              //})
                            } else {
                              var d = new Date();
                              console.log(
                                " - " +
                                  JSON.stringify(res.object) +
                                  " - bloc :" +
                                  res.object.bloc
                              );
                              this.logs.push(" - statut connexion : Aucune ");
                              this.statutConnexion = "Aucune";
                              //this.onConnect(res.object.errCode).then(res=>{
                              this.lectureStatiqueEnCours = false;
                              this.displayLoading = false;
                              resolve();
                              //})
                            }
                          }
                        }
                      }
                    }
                  })
                  .catch((err) => {
                    var d = new Date();
                    console.log(
                      " - catch onReadStatique modbus  : " +
                        JSON.stringify(err) +
                        "; on connect : " +
                        this.onConnectEnCours
                    );
                    this.perteConnexion = true;
                    this.statutConnexion = "Aucune";
                    if (this.onConnectEnCours == false) {
                      this.onConnect("UPC")
                        .then((res) => {
                          this.lectureStatiqueEnCours = false;
                          this.displayLoading = false;
                          this.onConnectEnCours = false;
                          this.statutConnexion = "UPC";
                          this.onReadStatiqueEnable().then(() => {
                            resolve();
                          });
                        })
                        .catch(() => {
                          this.lectureStatiqueEnCours = false;
                          this.displayLoading = false;
                          this.onConnectEnCours = false;
                          resolve();
                        });
                    } else {
                      resolve();
                    }
                  });
              });
            } else {
              var d = new Date();
              this.logs.push(" - upcmodbus undefined");
              this.lectureStatiqueEnCours = false;
              this.displayLoading = false;
              resolve();
            }
          })
          .catch(() => {
            alert("lecture impossible");
            this.displayLoading = false;
            reject();
          });
      } else {
        /* pas de lecture cyclique en cours ni d'écriture ni de onConnect donc lecture statique possible */

        //var d=new Date()
        //this.logs.push( " - statut connexion = UPC")
        if (this.upcmodbus != undefined) {
          this.storage.get("upcname").then((res) => {
            this.upcname = res;
            var d = new Date();
            this.logs.push(" - appel fonction onReadStatique");
            this.logs.push(
              " - lectureCycliqueEnCours : " + this.lectureCycliqueEnCours
            );
            const url = this.router.url;
            const splittedUrl = url.split("/");
            const urlFinal = splittedUrl[1];
            this.logs.push(" - page : " + urlFinal);
            this.upcmodbus
              .onReadStatique(this.upcname, this.mode, urlFinal)
              .then((res) => {
                if (res == true) {
                  //var d=new Date()
                  //this.logs.push( " - lecture réussie")
                  this.events.publish("loadParameters");
                  this.lectureStatiqueEnCours = false;
                  var d = new Date();
                  this.logs.push(
                    "durée lecture statique : " +
                      (d.getTime() - this.startReadDate.getTime())
                  );
                  this.displayLoading = false;
                  resolve();
                } else {
                  if (res == "Terminer l'intervention en cours") {
                    var d = new Date();
                    this.logs.push(" - Terminer l'intervention en cours");
                    this.router.navigate(["finintervention"]);
                    this.lectureStatiqueEnCours = false;
                    this.displayLoading = false;
                    resolve();
                  } else {
                    if (res == "Abandonner l'intervention en cours") {
                      var d = new Date();
                      this.logs.push(" - Abandonner l'intervention en cours");
                      this.resetParameters().then(() => {
                        this.router.navigate(["home"]);
                        this.lectureStatiqueEnCours = false;
                        this.displayLoading = false;
                        resolve();
                      });
                    } else {
                      if (res == "Se rapprocher de l'upc") {
                        var d = new Date();
                        this.logs.push(" - Se rapprocher de l'upc");
                        this.displayLoading = false;
                        resolve();
                      } else {
                        if (res.object.errCode != undefined) {
                          var d = new Date();
                          this.logs.push(
                            " - " +
                              res.object.errCode +
                              " - bloc :" +
                              res.object.bloc
                          );
                          this.logs.push(" - statut connexion : Aucune ");
                          this.statutConnexion = "Aucune";
                          //this.onConnect(res.object.errCode).then(res=>{
                          this.lectureStatiqueEnCours = false;
                          this.displayLoading = false;
                          resolve();
                          //})
                        } else {
                          var d = new Date();
                          this.logs.push(
                            " - " +
                              JSON.stringify(res.object) +
                              " - bloc :" +
                              res.object.bloc
                          );
                          this.logs.push(" - statut connexion : Aucune ");
                          this.statutConnexion = "Aucune";
                          //this.onConnect(res.object.errCode).then(res=>{
                          this.lectureStatiqueEnCours = false;
                          this.displayLoading = false;
                          resolve();
                          //})
                        }
                      }
                    }
                  }
                }
              })
              .catch((err) => {
                var d = new Date();
                this.logs.push(
                  " - catch onReadStatique : " +
                    JSON.stringify(err) +
                    "; on connect : " +
                    this.onConnectEnCours
                );
                this.perteConnexion = true;
                this.statutConnexion = "Aucune";
                if (this.onConnectEnCours == false) {
                  this.onConnect("UPC")
                    .then((res) => {
                      this.lectureStatiqueEnCours = false;
                      this.displayLoading = false;
                      this.onConnectEnCours = false;
                      this.statutConnexion = "UPC";
                      this.onReadStatiqueEnable();
                      resolve();
                    })
                    .catch(() => {
                      this.lectureStatiqueEnCours = false;
                      this.displayLoading = false;
                      this.onConnectEnCours = false;
                      resolve();
                    });
                } else {
                  resolve();
                }
              });
          });
        } else {
          var d = new Date();
          this.logs.push(" - upcmodbus undefined 2");
          //this.onConnect("UPC").then(()=>{
          this.lectureStatiqueEnCours = false;
          this.displayLoading = false;
          resolve();
          //})
        }
      }
    });
  }

  onReadCycliqueEnable() {
    return new Promise<void>(async (resolve, reject) => {
      //var d=new Date()
      //this.logs.push( " - onReadModbusVariables")

      if (this.statutConnexion == "UPC") {
        //var d=new Date()
        //this.logs.push( " - statut connexion = UPC")

        if (this.upcmodbus != undefined) {
          this.storage.get("upcname").then((res) => {
            this.upcname = res;
            //var d=new Date()
            //this.logs.push( " - appel fonction readAllReg cas 1 : "+res)
            const url = this.router.url;
            const splittedUrl = url.split("/");
            const urlFinal = splittedUrl[1];
            this.upcmodbus
              .onReadCyclique(this.upcname, this.mode, urlFinal)
              .then((res) => {
                if (res == true) {
                  //var d=new Date()
                  //this.logs.push( " - lecture réussie")
                  this.events.publish("loadParameters");
                  this.lectureCycliqueEnCours = false;
                  var d = new Date();
                  this.logs.push(
                    "durée lecture : " +
                      (d.getTime() - this.startReadDate.getTime())
                  );

                  resolve();
                } else {
                  if (res.object.errCode != undefined) {
                    var d = new Date();
                    this.logs.push(
                      " - " + res.object.errCode + " - bloc :" + res.object.bloc
                    );
                    this.logs.push(" - statut connexion : Aucune ");
                    this.statutConnexion = "Aucune";
                    if (this.onConnectEnCours == false) {
                      this.onConnect(res.object.errCode).then((res) => {
                        this.onConnectEnCours = false;
                        resolve();
                      });
                    } else {
                      resolve();
                    }
                  } else {
                    var d = new Date();
                    this.logs.push(
                      " - " +
                        JSON.stringify(res.object) +
                        " - bloc :" +
                        res.object.bloc
                    );
                    this.logs.push(" - statut connexion : Aucune ");
                    this.statutConnexion = "Aucune";
                    if (this.onConnectEnCours == false) {
                      this.onConnect(res.object.errCode).then((res) => {
                        this.onConnectEnCours = false;
                        resolve();
                      });
                    } else {
                      resolve();
                    }
                  }
                }
              })
              .catch((err) => {
                var d = new Date();
                this.logs.push(" - catch onReadCyclique");
                if (this.onConnectEnCours == false) {
                  this.onConnect("UPC").then((res) => {
                    this.onConnectEnCours = false;
                    resolve();
                  });
                } else {
                  resolve();
                }
              });
          });
        } else {
          var d = new Date();
          this.logs.push(" - upcmodbus undefined");
          if (this.onConnectEnCours == false) {
            this.onConnect("UPC").then(() => {
              this.onConnectEnCours = false;
              resolve();
            });
          } else {
            resolve();
          }
        }
      } else {
        var d = new Date();
        //this.logs.push( " - statut connexion != UPC")

        if (this.connexionRequise == "UPC") {
          if (this.onConnectEnCours == false) {
            this.onConnect("UPC").then(() => {
              this.onConnectEnCours = false;
              resolve();
            });
          } else {
            resolve();
          }
        } else {
          resolve();
        }
      }
    });
  }

  onWriteEnable(variable, value) {
    return new Promise<void>(async (resolve, reject) => {
      var d = new Date();
      this.logs.push(" - ON WRITE ");
      this.logs.push(" - flags onWriteEnable :");
      this.logs.push(" - lecture cyclique : " + this.lectureCycliqueEnCours);
      this.logs.push(" - lecture statique : " + this.lectureStatiqueEnCours);
      this.logs.push(" - ecriture : " + this.ecritureEnCours);
      this.logs.push(" - onConnect : " + this.onConnectEnCours);
      this.logs.push(" - statut connexion : " + this.statutConnexion);
      this.ecritureEnCours = true;

      if (
        this.statutConnexion != "UPC" ||
        this.lectureCycliqueEnCours == true ||
        this.lectureStatiqueEnCours == true ||
        this.onConnectEnCours == true
      ) {
        this.ecritureEnCours = false;
        var d = new Date();

        this.logs.push(" - lecture en cours : " + this.lectureCycliqueEnCours);

        this.onWait(50, 60000, "onWriteEnable")
          .then(() => {
            var d4 = new Date();

            if (variable.type == "int") {
              this.upcmodbus.client
                .setIntInHoldingRegister(variable.adr, variable.dim, value)
                .then(() => {
                  var d = new Date();
                  this.logs.push(" - écriture réussie");
                  this.ecritureEnCours = false;
                  this.needToCheckFlags = false;
                  this.onReadStatiqueEnable()
                    .then(() => {
                      resolve();
                    })
                    .catch(() => {
                      alert("lecture impossible");
                      reject();
                    });
                })
                .catch(() => {
                  alert("écriture impossible");
                  reject();
                });
            }
            if (variable.type == "string") {
              var d = new Date();
              this.logs.push(
                " - writemultipleregisters : " + this.writeMultipleRegisters
              );
              if (this.writeMultipleRegisters == true) {
                var d = new Date();
                this.logs.push(" - set string array in holding registers");
                this.upcmodbus.client
                  .setStringArrayInHoldingResgisters(variable.adr, value)
                  .then(() => {
                    var d = new Date();
                    this.logs.push(" - écriture réussie");
                    this.writeMultipleRegisters = false;
                    this.ecritureEnCours = false;
                    this.needToCheckFlags = false;
                    this.onReadStatiqueEnable()
                      .then(() => {
                        resolve();
                      })
                      .catch(() => {
                        alert("lecture impossible");
                        reject();
                      });
                  })
                  .catch(() => {
                    this.writeMultipleRegisters = false;
                    alert("écriture impossible");
                    reject();
                  });
              } else {
                this.upcmodbus.client
                  .setStringInHoldingRegister(variable.adr, value)
                  .then(() => {
                    var d = new Date();
                    this.logs.push(" - écriture réussie");
                    this.ecritureEnCours = false;
                    this.needToCheckFlags = false;
                    this.onReadStatiqueEnable()
                      .then(() => {
                        resolve();
                      })
                      .catch(() => {
                        alert("lecture impossible");
                        reject();
                      });
                  })
                  .catch(() => {
                    alert("écriture impossible");
                    reject();
                  });
              }
            }
            if (variable.type == "float") {
              this.upcmodbus.client
                .setFloatInHoldingRegister(variable.adr, value)
                .then(() => {
                  var d = new Date();
                  this.logs.push(" - écriture réussie");
                  this.ecritureEnCours = false;
                  this.needToCheckFlags = false;
                  this.onReadStatiqueEnable()
                    .then(() => {
                      resolve();
                    })
                    .catch(() => {
                      alert("lecture impossible");
                      reject();
                    });
                })
                .catch(() => {
                  alert("écriture impossible");
                  reject();
                });
            }
          })
          .catch(() => {
            alert("écriture impossible");
            reject();
          });
      } else {
        //if(this.lectureCycliqueEnCours != true && this.lectureStatiqueEnCours != true){
        var d = new Date();
        this.logs.push(" - pas de lecture en cours, écriture possible");

        if (variable.type == "int") {
          this.upcmodbus.client
            .setIntInHoldingRegister(variable.adr, variable.dim, value)
            .then(() => {
              var d = new Date();
              this.logs.push(" - écriture réussie");
              this.ecritureEnCours = false;
              this.needToCheckFlags = false;
              this.onReadStatiqueEnable()
                .then(() => {
                  resolve();
                })
                .catch(() => {
                  alert("lecture impossible");
                  reject();
                });
            })
            .catch(() => {
              alert("écriture impossible");
              reject();
            });
        }
        if (variable.type == "string") {
          var d = new Date();
          this.logs.push(
            " - writemultipleregisters : " + this.writeMultipleRegisters
          );
          if (this.writeMultipleRegisters == true) {
            var d = new Date();
            this.logs.push(" - set string array in holding registers");
            this.upcmodbus.client
              .setStringArrayInHoldingResgisters(variable.adr, value)
              .then(() => {
                var d = new Date();
                this.logs.push(" - écriture réussie");
                this.writeMultipleRegisters = false;
                this.ecritureEnCours = false;
                this.needToCheckFlags = false;
                this.onReadStatiqueEnable()
                  .then(() => {
                    resolve();
                  })
                  .catch(() => {
                    alert("lecture impossible");
                    reject();
                  });
              })
              .catch(() => {
                this.writeMultipleRegisters = false;
                alert("écriture impossible");
                reject();
              });
          } else {
            this.upcmodbus.client
              .setStringInHoldingRegister(variable.adr, value)
              .then(() => {
                var d = new Date();
                this.logs.push(" - écriture réussie");
                this.ecritureEnCours = false;
                this.needToCheckFlags = false;
                this.onReadStatiqueEnable()
                  .then(() => {
                    resolve();
                  })
                  .catch(() => {
                    alert("lecture impossible");
                    reject();
                  });
              })
              .catch(() => {
                alert("écriture impossible");
                reject();
              });
          }
        }
        if (variable.type == "float") {
          this.upcmodbus.client
            .setFloatInHoldingRegister(variable.adr, value)
            .then(() => {
              var d = new Date();
              this.logs.push(" - écriture réussie");
              this.ecritureEnCours = false;
              this.needToCheckFlags = false;
              this.onReadStatiqueEnable()
                .then(() => {
                  resolve();
                })
                .catch(() => {
                  alert("lecture impossible");
                  reject();
                });
            })
            .catch(() => {
              alert("écriture impossible");
              reject();
            });
        }
      }
    });
  }

  onWait(loopDelay, timeoutDelay, func) {
    var dx = new Date();
    this.logs.push(this.msToTime(dx.getTime()) + " - entrée fonction ON WAIT");
    return new Promise<void>(async (resolve, reject) => {
      this.needToCheckFlags = true;
      switch (func) {
        case "onWriteEnable":
          this.logs.push(this.msToTime(dx.getTime()) + " - case on write");
          this.intv = setInterval(() => {
            var dy = new Date();
            this.logs.push(
              this.msToTime(dy.getTime()) +
                " - IN INTERVAL : lc : " +
                this.lectureCycliqueEnCours +
                " - e: " +
                this.ecritureEnCours +
                " - oc: " +
                this.onConnectEnCours +
                "stat : " +
                this.statutConnexion
            );
            //if(this.statutConnexion == "UPC" && this.lectureCycliqueEnCours != true && this.lectureStatiqueEnCours != true && this.onConnectEnCours != true){
            if (
              this.statutConnexion == "UPC" &&
              this.lectureCycliqueEnCours != true &&
              this.ecritureEnCours != true &&
              this.onConnectEnCours != true
            ) {
              this.ecritureEnCours = true;
              this.needToCheckFlags = false;
              var d = new Date();
              this.logs.push(" - fin lecture en cours - écriture possible");
              clearInterval(this.intv);
              resolve();
            }
          }, loopDelay);
          setTimeout(() => {
            if (this.needToCheckFlags == true) {
              if (
                this.lectureCycliqueEnCours == true ||
                this.lectureStatiqueEnCours == true ||
                this.onConnectEnCours == true ||
                this.ecritureEnCours == true
              ) {
                this.needToCheckFlags = false;
                clearInterval(this.intv);
                var d = new Date();
                this.logs.push(" - écriture impossible - fin de timer");
                reject();
              }
            }
          }, timeoutDelay);
          break;
        case "onReadStatiqueEnable":
          this.intv = setInterval(() => {
            if (
              this.statutConnexion == "UPC" &&
              this.lectureCycliqueEnCours != true &&
              this.ecritureEnCours != true &&
              this.onConnectEnCours != true
            ) {
              this.lectureStatiqueEnCours = true;
              this.needToCheckFlags = false;
              var d = new Date();
              this.logs.push(" - lecture statique possible");
              clearInterval(this.intv);
              resolve();
            }
          }, loopDelay);
          setTimeout(() => {
            if (this.needToCheckFlags == true) {
              if (
                this.lectureCycliqueEnCours == true ||
                this.ecritureEnCours == true ||
                this.onConnectEnCours == true ||
                this.statutConnexion != "UPC"
              ) {
                this.needToCheckFlags = false;
                clearInterval(this.intv);
                var d = new Date();
                this.logs.push(" - lecture statique impossible - fin de timer");
                reject();
              }
            }
          }, timeoutDelay);
          break;
      }
    });
  }

  onWait2(loopDelay, timeoutDelay) {
    var dx = new Date();
    this.logs.push(
      this.msToTime(dx.getTime()) + " - entrée fonction ON WAIT 2"
    );
    return new Promise<void>(async (resolve, reject) => {
      this.needToCheckFlags = true;
      this.intv = setInterval(() => {
        var dy = new Date();
        this.logs.push(this.msToTime(dy.getTime()) + " - IN INTERVAL");
        if (
          this.statutConnexion == "UPC" &&
          this.lectureCycliqueEnCours != true &&
          this.lectureStatiqueEnCours != true &&
          this.onConnectEnCours != true
        ) {
          this.global.ecritureEnCours = true;
          this.needToCheckFlags = false;
          var d = new Date();
          this.logs.push(" - fin lecture en cours - écriture possible");
          clearInterval(this.intv);
          resolve();
        }
      }, loopDelay);
      setTimeout(() => {
        if (this.needToCheckFlags == true) {
          if (
            this.lectureCycliqueEnCours == true ||
            this.lectureStatiqueEnCours == true ||
            this.onConnectEnCours == true ||
            this.ecritureEnCours == true
          ) {
            this.needToCheckFlags = false;
            clearInterval(this.intv);
            var d = new Date();
            this.logs.push(" - écriture impossible - fin de timer");
            reject();
          }
        }
      }, timeoutDelay);
    });
  }

  login() {
    return new Promise(async (resolve, reject) => {
      this.username = await this.storage.get("user");
      this.password = await this.storage.get("pass");

      // Request
      let user: User = new User();
      user.username = this.username;
      user.password = this.password;
      this.upc3serv.login(user).subscribe(
        async (data) => {
          // Check state
          if (data.result) {
            this.storage.set("token", data.result);
            this.storage.set("user", user.username);
            this.storage.set("pass", user.password);
            this.storage.set("remember", 1);

            this.token = data.result;

            resolve("");
          } else {
            /*// Check code
                switch (data.code) {
                  case 'TOKEN_WRONG_IDENTIFIERS':
                    let toast = await this.toastCtrl.create({
                      message: 'Identifiants incorrects !',
                      duration: 3000,
                      position: 'top'
                    });
                    toast.present();
                    break;
                }*/
            reject("");
          }
        },
        async (err) => {
          let toast = await this.toastCtrl.create({
            message: "Impossible de se connecter à internet !",
            duration: 3000,
            position: "bottom",
          });
          toast.present();
        }
      );
    });
  }

  onConnectModbus() {
    var d = new Date();
    this.logs.push(" - onConnectModbus");
    console.log("fonction on connect modbus :");
    return new Promise<void>(async (resolve, reject) => {
      if (this.upcmodbus != undefined) {
        this.upcmodbus.client.close();
        this.upcmodbus = new UPCModbus((state) => {
          this.needToCheckState = true;
          var d = new Date();
          this.logs.push(" - state : " + state);
          let i = setInterval(() => {
            if (state == 1) {
              console.log("fonction on connect modbus :, appel reussi ::::");

              this.statutConnexion = "UPC";
              var d = new Date();
              this.logs.push(" - statut connexion : UPC ");
              this.needToCheckState = false;
              clearInterval(i);
              resolve();
            }
          }, 50);
          setTimeout(() => {
            if (this.needToCheckState == true) {
              if (state == 1) {
                console.log("fonction on connect modbus :, appel reussi ::::");

                this.statutConnexion = "UPC";
                var d = new Date();
                this.logs.push(" - statut connexion : UPC (fin de timer) ");
                this.needToCheckState = false;
                clearInterval(i);
                resolve();
              } else {
                console.log(
                  "fonction on connect modbus :, appel echouéeeee ::::"
                );

                this.statutConnexion = "Aucune";
                var d = new Date();
                this.logs.push(" - statut connexion : aucune (fin de timer) ");
                this.needToCheckState = false;
                clearInterval(i);
                reject();
              }
            }
          }, 1000);
        });
      } else {
        this.upcmodbus = new UPCModbus((state) => {
          this.needToCheckState = true;
          var d = new Date();
          this.logs.push(" - state : " + state);
          let i = setInterval(() => {
            if (state == 1) {
              console.log("fonction on connect modbus :, appel reussi ::::");

              this.statutConnexion = "UPC";
              var d = new Date();
              this.logs.push(" - statut connexion : UPC ");
              this.needToCheckState = false;
              this.storage.set("ssid", this.currentssid);
              clearInterval(i);
              resolve();
            } else {
              return;
            }
          }, 50);
          setTimeout(() => {
            if (this.needToCheckState == true) {
              if (state == 1) {
                console.log("fonction on connect modbus :, appel reussi ::::");

                this.statutConnexion = "UPC";
                var d = new Date();
                this.logs.push(" - statut connexion : UPC (fin de timer) ");
                this.needToCheckState = false;
                clearInterval(i);
                resolve();
              } else {
                console.log(
                  "fonction on connect modbus :, appel echouéee  ::::"
                );

                this.statutConnexion = "Aucune";
                var d = new Date();
                this.logs.push(" - statut connexion : aucune (fin de timer) ");
                this.needToCheckState = false;
                clearInterval(i);
                reject();
              }
            }
          }, 1000);
        });
      }
    });
  }
  async resetParameters() {
    var arr = await Promise.all([
      await this.storage.set("motiveItems", ""),
      await this.storage.set("motiveString", ""),
      await this.storage.set("intervenantsItems", ""),
      await this.storage.set("intervenantsString", ""),
      await this.storage.set("ceintureChoisieObject", ""),
      await this.storage.set("ssid", ""),
      await this.storage.set("password", ""),
      await this.storage.set("currentssid", ""),
      await this.storage.set("currentpassword", ""),
      await this.storage.set("upcname", ""),
      await this.storage.set("stockBottleTypes", ""),
      await this.storage.set("bottlesInTransit", ""),
      await this.storage.set("ceintureChoisieBottles", ""),
      await this.storage.set("commentaires", ""),
      await this.storage.set("dataAlreadyLoaded", "false"),
      await this.storage.set("json", ""),
      await this.storage.set("isCeintureSelected", false),
      await this.storage.set("isInterventionEnCours", false),
      await this.storage.set("isInterventionNotSaved", false),
      await this.storage.set("sequence", ""),
    ]);
    return arr;
  }

  msToTime(duration) {
    var milliseconds: any;
    var seconds: any;
    var minutes: any;
    var hours: any;

    milliseconds = Math.floor((duration % 1000) / 100);
    seconds = Math.floor((duration / 1000) % 60);
    minutes = Math.floor((duration / (1000 * 60)) % 60);
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

  /*Changement de ceinture dans le cas d'une intervention en cours*/
  /*changementCeintureAlert(){ 
    return new Promise<void>(async (resolve, reject)=>{
      this.alertController.create({
      header : "Attention",
      subHeader : "Intervention en cours",
      message : "Une intervention est en cours sur la ceinture "+this.upcname+". Voulez-vous la terminer ?",
      buttons : [
        {
          text: "Terminer l'intervention en cours",           
          handler: () => { 
            this.selectedUpcSsidTmp = "";
            this.selectedUpcPassTmp = ""; 
            this.nearUPCList.forEach(element =>{ //compare les id pour présélectionner la ceinture                 
              if(this.ceintureChoisieObject.id == element.item_id.id){
                this.selectedItems = [element];                                                                                                              
              }
            })  
            this.displayCommentaire = false;
            this.isCeintureSelected = false; 
            this.selectedItems = [];                        
            resolve();
          }
        },
        {
          text: "Abandonner l'intervention en cours", handler: () => {  
            this.selectedUpcSsid = this.selectedUpcSsidTmp
            this.selectedUpcPass = this.selectedUpcPassTmp
            this.ceintureChoisieObject = this.ceintureChoisieObjectTmp
            this.storage.set("ceintureChoisieObject", JSON.stringify(this.ceintureChoisieObject)) 
            this.selectedCeintureName = this.ceintureChoisieObject.upcNameId
            this.display = false   
            this.display = true                   
            WifiWizard2.disconnect().then(
              this.connectToUpc()
            );           
            resolve();      
          }
        },
        {
          text: "Se rapprocher de l'upc "+this.upcname, 
          role: 'cancel',
          handler: () => {  
            this.onConnect("").then(()=>{

            })          
            resolve();      
          }
        }
      ]
    }).then(res=>res.present());
  })
  }*/
}
