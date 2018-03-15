import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FilterModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter-model',
  templateUrl: 'filter-model.html',
})
export class FilterModelPage {
  public m0Selected = true;
  public m4Selected = true;
  public m6Selected = true;
  public m9Selected = true;

  constructor(private viewController: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterModelPage');
  }
  closeModal(){
    let filterState = {
      m0Selected: this.m0Selected,
      m4Selected: this.m4Selected,
      m6Selected: this.m6Selected,
      m9Selected: this.m9Selected
    }
    this.viewController.dismiss(filterState);
    //this.navCtrl.pop();
  }

}
