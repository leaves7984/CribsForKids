import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SafeSleepPage} from "../safe-sleep/safe-sleep";
import { SafeSleepTipsPage } from "../safe-sleep-tips/safe-sleep-tips";
import { ReduceRiskPage } from "../reduce-risk/reduce-risk";
import { AskPediatricianPage } from "../ask-pediatrician/ask-pediatrician";
import { VideosPage } from "../videos/videos";

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
  goInfantSleepTips(){
    this.navCtrl.push(SafeSleepTipsPage);
  }
  goReduceRisk(){
    this.navCtrl.push(ReduceRiskPage);
  }
  goVideos(){
    this.navCtrl.push(VideosPage);
  }
}
