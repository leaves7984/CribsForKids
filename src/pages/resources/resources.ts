import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeSleepPage} from "../safe-sleep/safe-sleep";
import { SafeSleepTipsPage } from "../safe-sleep-tips/safe-sleep-tips";
import { ReduceRiskPage } from "../reduce-risk/reduce-risk";
import { AskPediatricianPage } from "../ask-pediatrician/ask-pediatrician";
import { VideosPage } from "../videos/videos";
import { DonatePage } from "../donate/donate";
import { AboutUsPage } from "../about-us/about-us";

/**
 * Generated class for the Resources page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html',
})
export class ResourcesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  goDonate(){
    this.navCtrl.push(DonatePage);
  }
  goAbout(){
    this.navCtrl.push(AboutUsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResourcesPage');
  }

}
