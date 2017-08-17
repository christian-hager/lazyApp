import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SplitRightPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-split-right',
  templateUrl: 'split-right.html',
})
export class SplitRightPage {

  public splitTab1 = 'SplitRightTab1Page';
  public splitTab2 = 'SplitRightTab2Page';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplitRightPage');
  }

}
