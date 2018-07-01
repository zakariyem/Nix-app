import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MoneyTransferListPage } from '../money-transfer-list/money-transfer-list';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  toBack() {
    this.navCtrl.pop();
  }
  toHome() {
    console.log('home');
    this.navCtrl.push(HomePage);
  }
  toTransfer() {
    console.log('transfer');
    this.navCtrl.push(MoneyTransferListPage);
  }
  toLogout() {
    console.log('Logout');
    // this.navCtrl.push();
  }

}