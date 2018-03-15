import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the SafeSleepTipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-safe-sleep-tips',
  templateUrl: 'safe-sleep-tips.html',
})
export class SafeSleepTipsPage {

  items: any = [];
    itemExpandHeight: number = 100;
 
    constructor(public navCtrl: NavController) {
 
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
 
    expandItem(item){
 
        this.items.map((listItem) => {
 
            if(item == listItem){
                listItem.expanded = !listItem.expanded;
            } else {
                listItem.expanded = false;
            }
 
            return listItem;
 
        });
 
    }

}
