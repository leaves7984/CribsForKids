import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BabyCarePage } from './baby-care';

@NgModule({
  declarations: [
    BabyCarePage,
  ],
  imports: [
    IonicPageModule.forChild(BabyCarePage),
  ],
})
export class BabyCarePageModule {}
