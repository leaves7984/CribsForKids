import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SafeSleepTipsPage } from './safe-sleep-tips';

@NgModule({
  declarations: [
    SafeSleepTipsPage,
  ],
  imports: [
    IonicPageModule.forChild(SafeSleepTipsPage),
  ],
})
export class SafeSleepTipsPageModule {}
