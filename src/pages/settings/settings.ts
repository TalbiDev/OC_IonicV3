import { Component } from '@angular/core';
import { NavParams, AlertController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private alertCtrl: AlertController,
     public navParams: NavParams,
     private menuCtrl: MenuController) {
  }

  onToggleLights(){
    let alert = this.alertCtrl.create({
      title:"Êtes-vous certain(e) de vouloir continuer ?",
      subTitle:"Cette action allumera ou éteindra toutes les lumières de la maison !",
      buttons: [
        { text:"Annuler", role:"cancel"},
        { text:"Confirmer", handler:() => console.log('Confirmé')},
      ]
    });
    alert.present(); 
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
}
