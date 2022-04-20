import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../api/global.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-initechangeboitierupc',
  templateUrl: './initechangeboitierupc.page.html',
  styleUrls: ['./initechangeboitierupc.page.scss'],
})
export class InitechangeboitierupcPage implements OnInit {
  display = false;

  constructor(
    private storage : Storage,
    private router : Router,
    private global : GlobalService
    
  ) { 
    this.global.checkMode()
  }

  ngOnInit() {   }
  
  ionViewWillEnter(){
    /*affichage bouton suivant*/    
    this.global.checkNextPage().then(res=>{
      if(res == true){
        this.display = true;
      }
    }) 
  }
  
  goToNextPage(){    
    this.storage.get("nexturl").then(res=>{  
      this.router.navigate([res]);
    })  
  }

}
