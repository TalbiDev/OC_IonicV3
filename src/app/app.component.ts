import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { TabsPage } from '../pages/tabs/TabsPage';
import { OptionsPage } from '../pages/options/options';
import { AuthPage } from '../pages/auth/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabsPage: any = TabsPage;
  optionsPage: any = OptionsPage;
  authPage: any = AuthPage;
  isAuth: boolean;
  @ViewChild('content') content: NavController;


  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      var config = {
        apiKey: "AIzaSyACkocUO7R4i1klg3bm7NyH_m9IOQiSPaQ",
        authDomain: "ionicproject-da76a.firebaseapp.com",
        databaseURL: "https://ionicproject-da76a.firebaseio.com",
        projectId: "ionicproject-da76a",
        storageBucket: "ionicproject-da76a.appspot.com",
        messagingSenderId: "558108326649"
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          } else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, { mode: 'connect' });
          }
        }
      );
    });
  }
  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }
  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}

