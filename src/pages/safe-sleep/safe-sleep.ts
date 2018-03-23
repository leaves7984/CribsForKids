import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Detail } from "../../detail";
import { SourceProvider } from "../../providers/source/source";
import { FilterModelPage } from "../filter-model/filter-model";

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
  categories: string = "academy";
  private m0Selected = true;
  private m4Selected = true;
  private m6Selected = true;
  private m9Selected = true;
  items: any = [];
  itemExpandHeight: number = 100;
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
  constructor(private modalController:ModalController,
              private provider: SourceProvider,
              public navCtrl: NavController,
              public navParams: NavParams) {
    this.items = [
      {
        expanded: false,
        title: 'Bedroom & Nursery Safety',
        content: 'Remember: The safest way for your baby to sleep is Alone, on the Back, in a Crib. We recommend that your baby share a room with you for at least the first 6 months of life, or ideally for the first year. Your baby should NEVER sleep in the same bed with you. This is called bed sharing. This can increase the risk of death by up to 40 times.'
      },
      {
        expanded: false,
        title: 'Kitchen Safety',
        content: ''
      },
      {
        expanded: false,
        title: 'Baby Tracker – Newborn Log',
        content: ''
      },
      {
        expanded: false,
        title: 'Swaddling And Safe Sleep',
        content: ''
      },
      {
        expanded: false,
        title: 'Vaccines',
        content: ''
      },
      {
        expanded: false,
        title: 'Home Safety',
        content: ''
      },
      {
        expanded: false,
        title: 'Bed-Sharing Vs. Room-Sharing',
        content: ''
      },
      {
        expanded: false,
        title: 'How To Soothe A Fussy Baby',
        content: ''
      },
      {
        expanded: false,
        title: 'Hospital Initiative: Silver Certification Form',
        content: ''
      },
      {
        expanded: false,
        title: 'Educational Materials',
        content: ''
      }
    ];
  }

  expandItem(item) {

    this.items.map((listItem) => {

      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }

      return listItem;

    });

  }

  openFilterModal(){
    let openFilterModal = this.modalController.create(FilterModelPage);
    openFilterModal.onDidDismiss((filterAge) => {
      if (filterAge.selectAge == true) {
        this.m0Selected = filterAge.m0Selected;
        this.m4Selected = filterAge.m4Selected;
        this.m6Selected = filterAge.m6Selected;
        this.m9Selected = filterAge.m9Selected;
      } else {
        this.m0Selected = filterAge.tummySelected;
        this.m4Selected = filterAge.legSelected;
        this.m6Selected = filterAge.strengthSelected;
        this.m9Selected = filterAge.motorSelected;
      }


        this.provider.getSource()
          .subscribe((allSource) => {

            let sources = allSource;
            let tmp = sources;
            if (!this.m0Selected) {
              tmp = sources.filter((item) => {
                return item.age !== "0-3" || item.topic !== "Tummy"
              });
              sources = tmp;
            }
            if (!this.m4Selected) {
              tmp = sources.filter((item) => {
                return item.age !== "4-6" || item.topic !== "Leg Exercises"
              });
              sources = tmp;

            }
            if (!this.m6Selected) {
              tmp = sources.filter((item) => {
                return item.age !== "6-8" || item.topic !== "Strengthening"
              });
              sources = tmp;
            }
            if (!this.m9Selected) {
              tmp = sources.filter((item) => {
                return item.age !== "9-12" || item.topic !== "Fine&Gross Motor Skills"
              });
              sources = tmp;
            }

            this.allSource = sources;

          }),
        console.log(filterAge)
    });
    openFilterModal.present();

  }

  ionViewDidLoad() {
    this.provider.getSource()
      .subscribe(data=>this.allSource = data);
  }


}
