import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Detail} from "../../detail";
import { SourceProvider} from "../../providers/source/source";
import { FilterModelPage} from "../filter-model/filter-model";

/**
 * Generated class for the SafeSleepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-safe-sleep',
  templateUrl: 'safe-sleep.html',
})
export class SafeSleepPage {
  allSource: Detail[];
  private m0Selected = true;
  private m4Selected = true;
  private m6Selected = true;
  private m9Selected = true;
  constructor(private modalController:ModalController,
              private provider: SourceProvider,
              public navCtrl: NavController,
              public navParams: NavParams) {
  }

  openFilterModal(){
    let openFilterModal = this.modalController.create(FilterModelPage);
    openFilterModal.onDidDismiss((filterState)=>{
      this.provider.getSource()
        .subscribe((allSource)=>{
          let sources = allSource;
          let tmp = allSource;
          if(!filterState.m0Selected){
            tmp = sources.filter((item)=>{
              return item.age =="0-3"
            });
          }
          if(!filterState.m4Selected){
            tmp =sources.filter((item)=>{
              return item.age =="4-6"
            });
          }
          if(!filterState.m6Selected){
            tmp = sources.filter((item)=>{
              return item.age =="6-8"
            });
          }
          if(!filterState.m9Selected){
            tmp = sources.filter((item)=>{
              return item.age =="9-12";
            });
          }

          this.allSource = tmp;

        })
    });
    openFilterModal.present();

  }

  ionViewDidLoad() {
    this.provider.getSource()
      .subscribe(data=>this.allSource = data);
  }


}
