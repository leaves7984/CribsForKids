import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AskPediatricianPage } from './ask-pediatrician';

@NgModule({
  declarations: [
    AskPediatricianPage,
  ],
  imports: [
    IonicPageModule.forChild(AskPediatricianPage),
  ],
})
export class AskPediatricianPageModule {}
