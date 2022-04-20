import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { GlobalService } from '../api/global.service';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.page.html',
  styleUrls: ['./commentaires.page.scss'],
})
export class CommentairesPage implements OnInit {
  display = false;
  constructor(
    private router : Router,
    private storage: Storage,
    private global : GlobalService) { 
      this.global.checkMode()
    }

  ngOnInit() {}
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
