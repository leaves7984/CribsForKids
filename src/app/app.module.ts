import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { DonatePage } from '../pages/donate/donate';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from "@angular/common/http";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SourceProvider } from '../providers/source/source';
import { SafeSleepPage } from "../pages/safe-sleep/safe-sleep";
import { AskPediatricianPage } from "../pages/ask-pediatrician/ask-pediatrician";
import { SafeSleepTipsPage } from "../pages/safe-sleep-tips/safe-sleep-tips";
import { ReduceRiskPage } from "../pages/reduce-risk/reduce-risk";
import { VideosPage } from "../pages/videos/videos";
import { FilterModelPage } from "../pages/filter-model/filter-model";
import {SocialSharing} from "@ionic-native/social-sharing";
import { ExpandableComponent } from "../components/expandable/expandable"
import { YoutubePipe } from '../pipes/youtube/youtube';
import {ContactFormPage} from "../pages/contact-form/contact-form";
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    ContactFormPage,
    FilterModelPage,
    SafeSleepPage,
    AskPediatricianPage,
    SafeSleepTipsPage,
    ReduceRiskPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DonatePage,
    TabsPage,
    VideosPage,
    ExpandableComponent,
    YoutubePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ContactFormPage,
    FilterModelPage,
    SafeSleepPage,
    AskPediatricianPage,
    SafeSleepTipsPage,
    ReduceRiskPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DonatePage,
    TabsPage,
    VideosPage
  ],
  providers: [
    SocialSharing,
    SourceProvider,
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ],
  exports: [ExpandableComponent]
})
export class AppModule {}
