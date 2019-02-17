import { Component, OnInit } from '@angular/core';
import {  NavParams, ViewController } from 'ionic-angular';
import { AppareilsService } from '../../services/appareils.services';
import { Appareil } from '../../models/Appareil';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the SingleAppareilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit {
  appareil: Appareil;
  index: any;

  constructor( public navParams: NavParams,
     public viewCtrl: ViewController,
     private appareilsService: AppareilsService) {
  }
  ngOnInit() {
    this.index = this.navParams.get('index');
    this.appareil = this.appareilsService.appareilsList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
  onToggleAppareil() {
    this.appareil.isOn = !this.appareil.isOn;
  }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
    this.dismissModal();
}

onDeleteHours() {
    this.appareil.startTime = '';
    this.appareil.endTime = '';
    this.dismissModal();
}
}
