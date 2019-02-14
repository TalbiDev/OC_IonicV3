import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/TabsPage';
import { OptionsPage } from '../pages/options/options';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  optionsPage:any = OptionsPage;
  @ViewChild('content') content: NavController;

  constructor(platform: Platform, 
    statusBar: StatusBar,
     splashScreen: SplashScreen,
     private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onNavigate(page: any) {
    this.content.setRoot(page);
    this.menuCtrl.close();
  }
}

