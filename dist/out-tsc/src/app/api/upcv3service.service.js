import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UPCV3 } from '../model/upcv3/upcv3';
import { Code } from './ApiResponse';
import { Storage } from '@ionic/storage';
import { Operator } from '../model/operator';
import { Site } from '../model/site';
import { Bottle } from '../model/bottle';
import { Stock } from '../model/stock';
let Upcv3serviceService = class Upcv3serviceService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiUrl = 'http://api.biobelt.com/';
    }
    getUPC3(token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + 'upcv3/all', { headers: headers }).pipe(map(res => {
            switch (res.code) {
                case Code.UPCV3_RECOVERED:
                    var upcv3 = [];
                    var i = 0;
                    res.result.forEach(jsonUPCV3 => { if (UPCV3.loadFromJSON(jsonUPCV3).upcStatusString === 'DIS') {
                        upcv3.push(UPCV3.loadFromJSON(jsonUPCV3));
                    } });
                    res.result = upcv3;
                    break;
                case Code.UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'application mobile !");
                    break;
            }
            return res;
        }));
    }
    getAllStock(token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + "stock/allStocks", { headers: headers }).pipe(map(res => {
            switch (res.code) {
                case Code.STOCK_RECOVERED:
                    var st = [];
                    res.result.forEach(item => {
                        st.push(Stock.loadFromJSON(item));
                    });
                    res.result = st;
                    break;
                case Code.UNAUTHORIZED:
                    alert("Opération non autorisée !");
                    break;
            }
            return res;
        }));
    }
    login(user) {
        return this.http.post(this.apiUrl + 'user/login', user).pipe(map(res => {
            switch (res.code) {
                case Code.TOKEN_LOGGED_IN:
                    this.storage.set('token', res.result.toString());
                    this.storage.set('refreshToken', res.refreshToken.toString());
                    break;
                case Code.TOKEN_WRONG_IDENTIFIERS:
                    alert('Identifiants invalides !');
                    break;
                case Code.WRONG_PARAMS:
                    alert("Fatal Error !");
            }
            return res;
        }));
    }
    getOperators(token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + 'operator/all', { headers: headers }).pipe(map(res => {
            switch (res.code) {
                case Code.OPERATOR_RECOVERED:
                    var operators = [];
                    res.result.forEach(jsonOperator => operators.push(Operator.loadFromJSON(jsonOperator)));
                    res.result = operators;
                    break;
                case Code.UNAUTHORIZED:
                    alert("Opération non autorisée !");
                    break;
            }
            return res;
        }));
    }
    editTrap(id, nbpieges, token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.post(this.apiUrl + 'upcv3/' + id + '/editTrapNumber?nbpieges=' + nbpieges, {}, { headers: headers }).pipe(map(res => {
            return res;
        }));
    }
    getAllBottles(token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + 'bottleType/all', { headers: headers }).pipe(map(res => {
            return res;
        }));
    }
    getAllBottle(token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + "bottle/getAllBottles", { headers: headers }).pipe(map(res => {
            return res;
        }));
    }
    getBottleFromRack(token, rack) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + "bottle/getRack/" + rack, { headers: headers }).pipe(map(res => {
            if (res.code === Code.BOTTLE_RECOVERED) {
                var bottle = [];
                res.result.forEach(item => {
                    bottle.push(Bottle.loadFromJSON(item));
                });
                res.result = bottle;
            }
            else {
                alert("Vous ne pouvez pas utiliser l'application mobile !");
            }
            return res;
        }));
    }
    getBottlesByStockId(id, token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + "stock/" + id + "/bottles?all=true&pageSize=1000", { headers: headers }).pipe(map(res => {
            if (res.code === Code.BOTTLE_RECOVERED) {
                var bottle = [];
                res.result.forEach(item => {
                    bottle.push(Bottle.loadFromJSON(item));
                });
                res.result = bottle;
            }
            return res;
        }));
    }
    getSites(token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + 'site/all', { headers: headers }).pipe(map(res => {
            switch (res.code) {
                case Code.SITE_RECOVERED:
                    var sites = [];
                    res.result.forEach(json => sites.push(Site.loadFromJSON(json)));
                    break;
                case Code.SITE_DOESNT_EXSIST:
                    alert("Le Site n'existe pas");
                    break;
                case Code.UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à accèder à ce service");
                    break;
            }
            return res;
        }));
    }
    addToStockMob(form, token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.post(this.apiUrl + "bottle/addToStockMob", form, { headers: headers }).pipe(map(res => {
            switch (res.code) {
                case Code.BOTTLE_CREATED:
                    alert("Bouteilles ajoutés au stock !");
                    break;
                case Code.BOTTLE_ALREADY_EXSIST:
                    alert("Bouteilles déjà enregistrés sur le stock !");
                    break;
                case Code.INTERNAL_ERROR:
                case Code.WRONG_PARAMS:
                    alert("Erreur Mauvais Paramètres !");
                    break;
                case Code.BOTTLE_TYPE_DOESNT_EXSIST:
                    alert("La bouteille scanner n'existe pas dans la base de données");
                    break;
                case Code.STOCK_DOESNT_EXSIST:
                    alert("Le stock n'existe pas !");
                    break;
                case Code.UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'application mobile !");
            }
            return res;
        }));
    }
    removeFromCeint(form, token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.post(this.apiUrl + "bottle/removeFromCeintMobile", form, { headers: headers }).pipe(map(res => {
            switch (res.code) {
                case Code.BOTTLE_DELETED:
                    alert("Bouteilles Enlevées de la ceinture !");
                    break;
                case Code.INTERNAL_ERROR:
                case Code.WRONG_PARAMS:
                    alert('Erreur Mauvais Paramètres !');
                    break;
                case Code.BOTTLE_TYPE_DOESNT_EXSIST:
                    alert("La bouteille n'existe pas dans la base de données");
                    break;
                case Code.STOCK_DOESNT_EXSIST:
                    alert('Le stock est inexistant !');
                    break;
                case Code.UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'application mobile !");
                    break;
            }
            return res;
        }));
    }
    addBottleBelt(form, token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.post(this.apiUrl + 'bottle/addBottleBeltMobile', form, { headers: headers }).pipe(map(res => {
            switch (res.code) {
                case Code.BOTTLE_CREATED:
                    alert('Bouteilles ajoutés à la ceinture !');
                    break;
                case Code.INTERNAL_ERROR:
                case Code.WRONG_PARAMS:
                    alert('Erreur Mauvais Paramètres !');
                    break;
                case Code.BOTTLE_TYPE_DOESNT_EXSIST:
                    alert("La bouteille n'existe pas dans la base de données");
                    break;
                case Code.STOCK_DOESNT_EXSIST:
                    alert('Le stock est inexistant !');
                    break;
                case Code.UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'application mobile !");
                    break;
            }
            return res;
        }));
    }
    addToStock(form, token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.post(this.apiUrl + 'bottle/addBottlesToBelt', form, { headers: headers }).pipe(map(res => {
            switch (res.code) {
                case Code.BOTTLE_CREATED:
                    alert('Bouteilles ajoutés au stocks !');
                    break;
                case Code.INTERNAL_ERROR:
                case Code.WRONG_PARAMS:
                    alert('Erreur Mauvais Paramètres !');
                    break;
                case Code.BOTTLE_TYPE_DOESNT_EXSIST:
                    alert("La bouteille n'existe pas dans la base de données");
                    break;
                case Code.STOCK_DOESNT_EXSIST:
                    alert('Le stock est inexistant !');
                    break;
                case Code.UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'application mobile !");
                    break;
            }
            return res;
        }));
    }
    returnFourn(form, token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.post(this.apiUrl + "bottle/returnFourn", form, { headers: headers }).pipe(map(res => {
            switch (res.code) {
                case Code.BOTTLE_DELETED:
                    alert("Bouteilles Enlevés du Stock !");
                    break;
                case Code.UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'appli mobile !");
                    break;
                case Code.BOTTLE_DOESNT_EXSIST:
                    alert("La bouteille n'existe pas dans la base de données !");
                    break;
            }
            return res;
        }));
    }
    removeRack(rack, token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.post(this.apiUrl + "bottle/removeRack/" + rack, {}, { headers: headers }).pipe(map(res => {
            switch (res.code) {
                case Code.BOTTLE_DELETED:
                    alert("Rack Enlevé du Stock !");
                    break;
                case Code.UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'appli mobile !");
                    break;
                case Code.BOTTLE_DOESNT_EXSIST:
                    alert("Le Rack n'existe pas !");
                case Code.WRONG_PARAMS:
                    alert("Mauvais Paramètres !");
                    break;
            }
            return res;
        }));
    }
    downloadCustomPicture(id, token) {
        let headers = new HttpHeaders().set('accept', '*').set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + 'project/' + id + '/download', { headers: headers, responseType: 'arraybuffer' });
    }
    getProject(token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + 'project/all', { headers: headers }).pipe(map(res => {
            switch (res.code) {
                case Code.PROJECT_RECOVERED:
                    break;
                case Code.PROJECT_DOESNT_EXSIST:
                    alert("Projet Inexistant !");
                    break;
                case Code.UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'appli mobile !");
                    break;
            }
            return res;
        }));
    }
    getVersion(id, token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + 'project/' + id + '/versions', { headers: headers }).pipe(map(res => {
            switch (res.code) {
                case Code.VERSION_RECOVERED:
                    break;
                case Code.VERSION_DOESNT_EXSIST:
                    alert("La ceinture n'existe pas !");
                    break;
                case Code.UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'application !");
                    break;
            }
            return res;
        }));
    }
    addToDeStock(json, token) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.post(this.apiUrl + "bottle/addToStock", json, { headers: headers }).pipe(map(res => {
            switch (res.code) {
                case Code.BOTTLE_CREATED:
                    alert("Bouteilles ajoutés au stock !");
                    break;
                case Code.BOTTLE_ALREADY_EXSIST:
                    alert("Bouteilles déjà enregistrés sur le stock !");
                    break;
                case Code.INTERNAL_ERROR:
                case Code.WRONG_PARAMS:
                    alert("Erreur Mauvais Paramètres !");
                    break;
                case Code.BOTTLE_TYPE_DOESNT_EXSIST:
                    alert("La bouteille scanner n'existe pas dans la base de données");
                    break;
                case Code.STOCK_DOESNT_EXSIST:
                    alert("Le stock n'existe pas !");
                    break;
                case Code.UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'application mobile !");
            }
            return res;
        }));
    }
};
Upcv3serviceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        Storage])
], Upcv3serviceService);
export { Upcv3serviceService };
//# sourceMappingURL=upcv3service.service.js.map