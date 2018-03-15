import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {

  videos: any[] = [
    {
      title: 'Safe Sleep for Your Baby',
      video: 'https://www.youtube.com/embed/29sLucYtvpA'
    },
    {
      title: 'SIDS & dangers of infant suffocation',
      video: 'https://www.youtube.com/embed/wdO20sLUfAA'
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosPage');
  }

}
