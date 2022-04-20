import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../model/user';
import {UPCV3} from '../model/upcv3/upcv3';
import {ApiResponse, Code} from './ApiResponse';
import { Storage } from '@ionic/storage';
import {AuthResponse} from './AuthResponse';
import { Operator } from '../model/operator';
import { environment } from 'src/environments/environment';
import {Router} from '@angular/router';
import {BottleType} from '../model/bottleType';
import { Site } from '../model/site';
import {Project} from '../model/project/project';
import { Version } from '../model/project/version';
import { Bottle } from '../model/bottle';
import { Stock } from '../model/stock';
import { InterventionV3 } from '../model/interventionv3';
import { Commentaires } from '../model/commentaire';

@Injectable({
  providedIn: 'root'
})
export class Upcv3serviceService {
  private apiUrl = 'http://dev-api.biobelt.com/';
  //local api to test new Backend 
  //private apiUrl = 'http://192.168.1.41:8080/';


  
  constructor(private http:HttpClient,
              private storage:Storage) { }

  public getUPC3(token): Observable<ApiResponse<UPCV3[]>>{
    
    
    
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('authorization','Bearer '+token) 
    return this.http.get<ApiResponse<UPCV3[]>>(this.apiUrl+'upcv3/all',{headers : headers}).pipe(map(
      res=>{
        switch (res.code) {

          case Code.UPCV3_RECOVERED:
          var upcv3: UPCV3[] = [];
          var i = 0;
          res.result.forEach(jsonUPCV3 =>{ upcv3.push(UPCV3.loadFromJSON(jsonUPCV3)); } );
          res.result = upcv3;
          break;

          case Code.UNAUTHORIZED:
          alert("Vous n'êtes pas autorisé à utiliser l'application mobile !");
          break;

        }

      return res;
      }
    ))
  }
  public createIntervention(json,token) : Observable<ApiResponse<InterventionV3>> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token);

    return this.http.post<ApiResponse<InterventionV3>>(this.apiUrl+"upcv3/intervention/createAdmin",json,{headers : headers}).pipe(map(res=>{
        switch(res.code) {
          case Code.INTERVENTIONV3_CREATED :
            alert("L'intervention a bien été enregistrée")
            break;
          case Code.UNAUTHORIZED :
            alert("Non Autorisé");
            break;
          case Code.UPCV3_DOESNT_EXSIST :
            alert("L'UPCV3 n'existe pas");
            break;
          case Code.INTERNAL_ERROR :
            alert("Erreur Interne");
            break;      
        }
        return res;
    }))
  }

  public updateBottleMobile(json,token): Observable<ApiResponse<any>> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token);

    return this.http.post<ApiResponse<any>>(this.apiUrl+"/bottle/updateMobile",json,{headers : headers}).pipe(map(res=>{
      switch(res.code) {
        case Code.BOTTLE_RECOVERED :
          console.log("La bouteille a bien été mise à jour")
          break;
        case Code.UNAUTHORIZED :
          alert("Non Autorisé");
          break;
        case Code.BOTTLE_DOESNT_EXSIST :
          alert("La bouteille n'existe pas");
          break;      
        case Code.INTERNAL_ERROR :
          alert("Erreur Interne");
          break;    
        case Code.WRONG_PARAMS:
          alert("Paramètres invalides")
          break;   
      }
      return res;
  }))
  }

  
  public getBottleByBarCode(barcode,token) : Observable<ApiResponse<any>> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token);

    return this.http.get<ApiResponse<any>>(this.apiUrl+"bottle/getBottleByBarcode/"+barcode,{headers : headers}).pipe(map(res=>{
        switch(res.code) {
          case Code.BOTTLE_CREATED :
            console.log("La bouteille a bien été ajoutée")
            break;
          case Code.UNAUTHORIZED :
            alert("Non Autorisé");
            break;
          case Code.BOTTLE_TYPE_DOESNT_EXSIST :
            alert("Le type de bouteille n'existe pas");
            break;
          case Code.STOCK_DOESNT_EXSIST :
            alert("L'entrepôt n'existe pas");
            break;
          case Code.INTERNAL_ERROR :
            alert("Erreur Interne");
            break;    
          case Code.WRONG_PARAMS:
            alert("Paramètres invalides")
            break;   
        }
        return res;
    }))
  }



 
  public addBottleMobile(json,token) : Observable<ApiResponse<any>> {
  
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token).set('Access-Control-Allow-Origin','*');

    return this.http.post<ApiResponse<any>>(this.apiUrl+"/bottle/addMobile",json,{headers : headers}).pipe(map(res=>{
        switch(res.code) {
          case Code.BOTTLE_CREATED :
            console.log("La bouteille a bien été ajoutée")
            break;
          case Code.UNAUTHORIZED :
            alert("Non Autorisé");
            break;
          case Code.BOTTLE_TYPE_DOESNT_EXSIST :
            alert("Le type de bouteille n'existe pas");
            break;
          case Code.STOCK_DOESNT_EXSIST :
            alert("L'entrepôt n'existe pas");
            break;
          case Code.INTERNAL_ERROR :
            alert("Erreur Interne");
            break;    
          case Code.WRONG_PARAMS:
            alert("Paramètres invalides")
            break;   
        }
        return res;
    }))
  }

  public createInterventionMobile(json,token) : Observable<ApiResponse<InterventionV3>> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token);

    return this.http.post<ApiResponse<InterventionV3>>(this.apiUrl+"upcv3/intervention/createMobile",json,{headers : headers}).pipe(map(res=>{
        switch(res.code) {
          case Code.INTERVENTIONV3_CREATED :
            alert("L'intervention a bien été enregistrée")
            break;
          case Code.UNAUTHORIZED :
            alert("Non Autorisé");
            break;
          case Code.UPCV3_DOESNT_EXSIST :
            alert("L'UPCV3 n'existe pas");
            break;
          case Code.INTERNAL_ERROR :
            alert("Erreur Interne");
            break;    
          case Code.WRONG_PARAMS:
            alert("Paramètres invalides")
            break;   
        }
        return res;
    }))
  }
  public getConnected (token) : Observable<ApiResponse<Operator>> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token);

    return this.http.get<ApiResponse<Operator>>(this.apiUrl+"operator/getConnected",{headers:headers}).pipe(map(res=>{
      switch(res.code) {
        case Code.OPERATOR_RECOVERED : 
            break;
        case Code.OPERATOR_DOESNT_EXSIST :
          alert("Opérateur existe pas");
          break;
        case Code.UNAUTHORIZED :
          alert("Pas autoriser !");
          break;

      }
      return res;
    }))
  }
  public getActionNotDoneById(token,id) : Observable<ApiResponse<Commentaires[]>> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token)
    
    return this.http.get<ApiResponse<Commentaires[]>>(this.apiUrl+"upcv3/intervention/isActionDoneById/"+id,{headers : headers}).pipe(map(res=>{
            if(res.code == Code.INTERVENTIONV3_RECOVERED){
              
            } else {
              alert("Pas autorisé !");
            }
            return res;
    }))
  }
  public getAllStock(token) : Observable<ApiResponse<Stock[]>> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token) 

    return this.http.get<ApiResponse<Stock[]>>(this.apiUrl+"stock/allStocks",{headers:headers}).pipe(map(res=>{
      switch(res.code){
        case Code.STOCK_RECOVERED :
          var st = [];
          res.result.forEach(item=>{
            st.push(Stock.loadFromJSON(item));
          })
          res.result = st;
          break;
        case Code.UNAUTHORIZED:
            alert("Opération non autorisée !");
            break;  
      }
      return res;
    }))
  }
 
  public login(user:User) : Observable<AuthResponse>{
    return this.http.post<AuthResponse>(this.apiUrl+'user/login',user).pipe(map(
      res =>{       
        switch (res.code){
          case Code.TOKEN_LOGGED_IN :
            this.storage.set('token',res.result.toString());            
            this.storage.set('refreshToken',res.refreshToken.toString());            
            break;
          case Code.TOKEN_WRONG_IDENTIFIERS:            
            break;
          case Code.WRONG_PARAMS:            
            break; 
          default:
            break;
        }
        return res;
      }
    ))
  }
  public getOperators(token):Observable<ApiResponse<Operator[]>>{
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('authorization','Bearer '+token)
    return this.http.get<ApiResponse<Operator[]>>(this.apiUrl+'operator/all',{headers:headers}).pipe(map(
      res =>{
        switch (res.code) {
          
          case Code.OPERATOR_RECOVERED:
          var operators: Operator[] = [];
          res.result.forEach(jsonOperator => operators.push(Operator.loadFromJSON(jsonOperator)));
          res.result = operators;
          break;

          case Code.UNAUTHORIZED:
          alert("Opération non autorisée !");
          break;

        }

        return res;
      }
    ))
  }

  public editTrap(id,nbpieges,token){
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('authorization','Bearer '+token)
    return this.http.post(this.apiUrl+'upcv3/'+id+'/editTrapNumber?nbpieges='+nbpieges,{},{headers:headers}).pipe(map(
      res =>{
        return res;
      }
    ))
  }
  public getAllBottleTypes(token) : Observable<ApiResponse<BottleType[]>>{
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token)
    return this.http.get<ApiResponse<BottleType[]>>(this.apiUrl+'bottleType/all',{headers:headers}).pipe(map(
      res =>{
        return res;
      }
    ))
  }
  public getAllBottle(token) : Observable<ApiResponse<Bottle[]>> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('authorization','Bearer '+token)

    return this.http.get<ApiResponse<Bottle[]>>(this.apiUrl+"bottle/getAllBottles",{headers : headers}).pipe(map(res=>{
      return res;
    }))
    
  }
  public getBottleFromRack(token, rack) : Observable<ApiResponse<Bottle[]>> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('authorization','Bearer '+token);
    return this.http.get<ApiResponse<Bottle[]>>(this.apiUrl+"bottle/getRack/"+rack,{headers : headers}).pipe(map(res=>{
      if(res.code === Code.BOTTLE_RECOVERED){
        var bottle = [];
        res.result.forEach(item=>{
          bottle.push(Bottle.loadFromJSON(item));
        })
        res.result = bottle;
      }else {
        alert("Vous ne pouvez pas utiliser l'application mobile !");
      }
      return res;
    }))                               
  }
  public getBottlesByStockId(id,token) : Observable<ApiResponse<Bottle[]>>{
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('authorization','Bearer '+token)
                                   
    return this.http.get<ApiResponse<Bottle[]>>(this.apiUrl+"stock/"+id+"/bottles?all=true&pageSize=1000",{headers:headers}).pipe(map(res=>{
        if(res.code === Code.BOTTLE_RECOVERED) {
          var bottle = [];
          res.result.forEach(item=>{
            bottle.push(Bottle.loadFromJSON(item));
          })
          res.result = bottle;
        }
        
        return res;
    }))                               
  }

  public getSitesByUpcID(id, token) : Observable<ApiResponse<Site>>{
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token)
    return this.http.get<ApiResponse<Site>>(this.apiUrl+'upcv3/getSiteByUpcID/'+id,{headers:headers}).pipe(map(
      res => {        
        switch(res.code){
          case Code.SITE_RECOVERED :
            res.result = Site.loadFromJSON(res.result);
            break;
          case Code.UPCV3_DOESNT_EXSIST :
            break;
          case Code.UNAUTHORIZED :
            alert("Vous n'êtes pas autorisé à accèder à ce service");
            break;
        }
        return res;
      }    
    ))
  }


  public getSites(token) : Observable<ApiResponse<Site[]>>{
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token)
    return this.http.get<ApiResponse<Site[]>>(this.apiUrl+'site/all',{headers:headers}).pipe(map(
      res =>{
        switch(res.code){
          case Code.SITE_RECOVERED :
            var sites = [];
            res.result.forEach(json=>sites.push(Site.loadFromJSON(json)));
            
            break;
          case Code.SITE_DOESNT_EXSIST :
            alert("Le Site n'existe pas");
            break;
          case Code.UNAUTHORIZED :
            alert("Vous n'êtes pas autorisé à accèder à ce service");
            break;
        }
        return res;
      }
    ))
  }
  public addToStockMob(form,token) : Observable<ApiResponse<Bottle[]>> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token)

    return this.http.post<ApiResponse<Bottle[]>>(this.apiUrl+"bottle/addToStockMob",form,{headers : headers}).pipe(map(res=>{
      switch(res.code){
        case Code.BOTTLE_CREATED :
          alert("Bouteilles ajoutés au stock !");
          break;
        case Code.BOTTLE_ALREADY_EXSIST :
          alert("Bouteilles déjà enregistrés sur le stock !");
          break;
        case Code.INTERNAL_ERROR :
        case Code.WRONG_PARAMS :
          alert("Erreur Mauvais Paramètres !");
          break;
        case Code.BOTTLE_TYPE_DOESNT_EXSIST :
          alert("La bouteille scanner n'existe pas dans la base de données");
          break;
        case Code.STOCK_DOESNT_EXSIST :
          alert("Le stock n'existe pas !");
          break;
        case Code.UNAUTHORIZED :
          alert("Vous n'êtes pas autorisé à utiliser l'application mobile !")          
      }
      return res;
    }))
  }
  public removeFromCeint(form,token) : Observable<ApiResponse<any>> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token)

    return this.http.post<ApiResponse<any>>(this.apiUrl+"bottle/removeFromCeintMobile",form,{headers : headers}).pipe(map(res=>{
      switch (res.code) {
        case Code.BOTTLE_DELETED :
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
    }))
  }
  public addBottleBelt(form,token) : Observable<ApiResponse<any>>{
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token)

    return this.http.post<ApiResponse<any>>(this.apiUrl+'bottle/addBottleBeltMobile',form,{headers:headers}).pipe(map(res=>{
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
    }))
  }
  public addToStock(form,token) : Observable<ApiResponse<any>>{
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token)
    return this.http.post<ApiResponse<any>>(this.apiUrl+ 'bottle/addBottlesToBelt',form,{headers:headers}).pipe(map(res =>{
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
    }))
  }
  public returnFourn (form,token) : Observable<ApiResponse<any>> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token);

    return this.http.post<ApiResponse<any>>(this.apiUrl+"bottle/returnFourn",form,{headers:headers}).pipe(map(res=>{
      switch (res.code) {
          case Code.BOTTLE_DELETED :
            alert("Bouteilles Enlevés du Stock !");
            break;
          case Code.UNAUTHORIZED :
              alert("Vous n'êtes pas autorisé à utiliser l'appli mobile !");
              break;  
          case Code.BOTTLE_DOESNT_EXSIST :
            alert("La bouteille n'existe pas dans la base de données !");
            break;      
      }
      return res;
    }))
  }
  public removeRack (rack, token) : Observable<ApiResponse<any>> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token);

    return this.http.post<ApiResponse<any>>(this.apiUrl+"bottle/removeRack/"+rack,{},{headers : headers}).pipe(map(res=>{
      
      switch(res.code) {
        
        case Code.BOTTLE_DELETED :
            alert("Rack Enlevé du Stock !");
            break;
        case Code.UNAUTHORIZED :
            alert("Vous n'êtes pas autorisé à utiliser l'appli mobile !");
            break;
        case Code.BOTTLE_DOESNT_EXSIST :
            alert("Le Rack n'existe pas !")    
        case Code.WRONG_PARAMS :
          alert("Mauvais Paramètres !");
          break;        
      }
      return res;
    }))
  }
  public downloadCustomPicture(id: string,token:string): Observable<any> {
    let headers = new HttpHeaders().set('accept','*').set('authorization','Bearer '+token);
    
    return this.http.get(this.apiUrl + 'project/'+id+'/download', { headers: headers, responseType: 'arraybuffer' })
  }
  public getProject(token){
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token);
    
    return this.http.get<ApiResponse<Project[]>>(this.apiUrl+'project/all',{headers:headers}).pipe(map(res=>{
      switch (res.code){
        case Code.PROJECT_RECOVERED :
            
            break;
        case Code.PROJECT_DOESNT_EXSIST :
          alert("Projet Inexistant !");
          break;
        case Code.UNAUTHORIZED :
          alert("Vous n'êtes pas autorisé à utiliser l'appli mobile !");
          break;      
      }
      return res;
    }))
  }
  public getVersion(id,token){
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token);

    return this.http.get<ApiResponse<Version>>(this.apiUrl+'project/'+id+'/versions',{headers:headers}).pipe(map(res=>{
      switch(res.code){
        case Code.VERSION_RECOVERED :
          break;
        case Code.VERSION_DOESNT_EXSIST :
          alert("La ceinture n'existe pas !");
          break;
        case Code.UNAUTHORIZED :
          alert("Vous n'êtes pas autorisé à utiliser l'application !");
          break;
          
          
      }
      return res;
    }))
  }

  public addToDeStock(json,token): Observable<ApiResponse<any>>{
    let headers = new HttpHeaders().set('Content-Type','application/json')
    .set('authorization','Bearer '+token);

    return this.http.post<ApiResponse<any>>(this.apiUrl+"bottle/addToStock",json,{headers:headers}).pipe(map(res=>{
      switch(res.code){
        case Code.BOTTLE_CREATED :
          alert("Bouteilles ajoutés au stock !");
          break;
        case Code.BOTTLE_ALREADY_EXSIST :
          alert("Bouteilles déjà enregistrés sur le stock !");
          break;
        case Code.INTERNAL_ERROR :
        case Code.WRONG_PARAMS :
          alert("Erreur Mauvais Paramètres !");
          break;
        case Code.BOTTLE_TYPE_DOESNT_EXSIST :
          alert("La bouteille scanner n'existe pas dans la base de données");
          break;
        case Code.STOCK_DOESNT_EXSIST :
          alert("Le stock n'existe pas !");
          break;
        case Code.UNAUTHORIZED :
          alert("Vous n'êtes pas autorisé à utiliser l'application mobile !")          
      }
      return res;
    }))
  }
  

}
