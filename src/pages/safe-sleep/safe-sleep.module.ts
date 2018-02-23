import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SafeSleepPage } from './safe-sleep';

@NgModule({
  declarations: [
    SafeSleepPage,
  ],
  imports: [
    IonicPageModule.forChild(SafeSleepPage),
  ],
})
export class SafeSleepPageModule {}
