import { Component } from '@angular/core';
import {  NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { SingleAppareilPage } from '../single-appareil/single-appareil';
import { AppareilsService } from '../../services/appareils.services';
import { Appareil } from '../../models/Appareil';
import { AppareilFormPage } from './appareil-form/AppareilFormPage';

@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html',
})
export class AppareilsPage {

  appareilsList: Appareil[];

  constructor(
    private appareilsService: AppareilsService,
     private modalCtrl: ModalController,
     private menuCtrl: MenuController,
     private navCtrl: NavController) {
  }

  ionViewWillEnter(){
    this.appareilsList = this.appareilsService.appareilsList.slice();
  }

  onLoadAppareil(index:number) {
    let modal = this.modalCtrl.create(
      SingleAppareilPage, { index: index}
      );
    modal.present();
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
  onNewAppareil() {
    this.navCtrl.push(AppareilFormPage);
}
}
