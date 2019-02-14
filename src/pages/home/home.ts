import { Component } from '@angular/core';
import { AppareilsPage } from '../appareils/appareils';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  appareilsPage = AppareilsPage;
  constructor() {

  }

}
