import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../api/global.service';
import * as $ from 'jquery';
import { element } from 'protractor';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.page.html',
  styleUrls: ['./debug.page.scss'],
})
export class DebugPage implements OnInit {
  logs=[];

  constructor(
    private global : GlobalService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.logs = this.global.logs;
    this.global.connexionRequise = "Aucune"

    this.logs.forEach(element =>{
      $("#logsList").append("<li>"+element+"</li>")
    })
  }



}

