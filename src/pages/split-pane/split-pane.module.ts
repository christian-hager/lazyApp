import { SplitPanePage } from './split-pane';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SplitPanePage,
  ],
  imports: [
    IonicPageModule.forChild(SplitPanePage),
  ],
})
export class SplitPanePageModule {}
