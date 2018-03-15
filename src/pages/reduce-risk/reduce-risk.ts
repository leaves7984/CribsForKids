import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReduceRiskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reduce-risk',
  templateUrl: 'reduce-risk.html',
})
export class ReduceRiskPage {

  slides: any[] = [
    {
      title: 'Grandparents Presentation',
      slide: 'https://docs.google.com/presentation/d/e/2PACX-1vTxE37N2w91lJNM9wHss0AG_Amn2LaXSVdvYPhxisGtorQZDWACgJ7silX6yx-ZTLoIAI_kIo2vgnNi/embed?start=false&loop=true&delayms=3000'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReduceRiskPage');
  }

}
