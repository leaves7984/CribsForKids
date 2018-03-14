import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactFormPage } from "../contact-form/contact-form";

/**
 * Generated class for the AskPediatricianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ask-pediatrician',
  templateUrl: 'ask-pediatrician.html',
})
export class AskPediatricianPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  contactPediatrician(){
    this.navCtrl.push(ContactFormPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AskPediatricianPage');
  }

}
