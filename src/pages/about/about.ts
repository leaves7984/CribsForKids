import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SafeSleepPage} from "../safe-sleep/safe-sleep";
import { AskPediatricianPage } from "../ask-pediatrician/ask-pediatrician";

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
  goAskPediatrician(){
    this.navCtrl.push(AskPediatricianPage);
  }
}
