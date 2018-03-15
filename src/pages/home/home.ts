import { Component, ViewChild } from '@angular/core';
import {NavController, ActionSheetController, LoadingController} from 'ionic-angular';
import { SourceProvider} from "../../providers/source/source";
import { Detail} from "../../detail";
import {SocialSharing} from "@ionic-native/social-sharing";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  allSource: Detail[];
  public selected: boolean;

  slides = [
    {
      title: "Welcome to the Docs!",
      image: "../../assets/imgs/slide1.png",
    },
    {
      title: "What is Ionic?",
      image: "../../assets/imgs/slide2.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      image: "../../assets/imgs/slide3.jpg",
    }
  ];

  constructor(private provider: SourceProvider,
              public navCtrl: NavController,
              private socialSharing: SocialSharing,
              private actionSheetController: ActionSheetController,
              private loadingController: LoadingController) {
    this.selected = true;
  }

  shareTips(source) {
    let shareTipsActionSheet = this.actionSheetController.create({
      title: "Share Tips with friends",
      buttons: [
        {
          text: "Share On Facebook",
          icon: "logo-facebook",
          handler: () => {
            this.socialSharing.shareViaFacebook(source.name, source.image, source.description);
          }

        },
        {
          text: "Share On Twitter",
          icon: "logo-twitter",
          handler: () => {
            this.socialSharing.shareViaTwitter(source.name, source.image, source.description);
          }
        },
        {
          text: "Share",
          icon: "share",
          handler: () => {
            this.socialSharing.share(source.name, source.image, source.description);
          }
        },
        {
          text: "Cancel",
          role: "destructive"
        }
      ]
    });
    shareTipsActionSheet.present();
  }

  ionViewDidLoad(){
    let allTipsLoadingController = this.loadingController.create({
      content: "Getting Your Tips From Server"
    });
    allTipsLoadingController.present();
    this.provider.getSource()
      .subscribe(data => {
        this.allSource = data;
        allTipsLoadingController.dismiss();
        console.log(data);
      });
  }
}
