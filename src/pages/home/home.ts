import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SourceProvider} from "../../providers/source/source";
import { Detail} from "../../detail";
import {AboutPage} from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  allSource: Detail[];
  public currentTab: string;
  public selected: boolean;
  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "../../assets/imgs/slide1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "../../assets/imgs/slide2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "../../assets/imgs/slide3.png",
    }
  ];
  constructor(private provider: SourceProvider,public navCtrl: NavController) {
    this.selected = true;
  }
  goSafeSleep(){
    this.navCtrl.push(AboutPage);
  }
  ionViewDidLoad(){
    this.provider.getSource()
      .subscribe(data=>this.allSource = data);
  }
}
