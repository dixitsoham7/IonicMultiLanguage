import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  language: any;
  constructor(public navParams: NavParams, public navCtrl: NavController, public translate: TranslateService, public toastCtrl: ToastController) {
    this.language = navParams.get('lng')
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);
  }

  switchLanguage() {
    this.translate.use(this.language);
  }


}
