import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SafeSleepPage} from "../safe-sleep/safe-sleep";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  goInfantSafe(){
    this.navCtrl.push(SafeSleepPage);
  }
}
