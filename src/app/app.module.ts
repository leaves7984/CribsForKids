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
import { FilterModelPage } from "../pages/filter-model/filter-model";

import { ExpandableComponent } from "../components/expandable/expandable"

@NgModule({
  declarations: [
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
    ExpandableComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
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
    TabsPage
  ],
  providers: [
    SourceProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ],
  exports: [ExpandableComponent]
})
export class AppModule {}
