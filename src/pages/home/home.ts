import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lang:any;
  constructor(public navCtrl: NavController, public translate: TranslateService, public toastCtrl: ToastController) {
    this.lang = 'english';
    this.translate.setDefaultLang('english');
    this.translate.use('english');
    
  }


  switchLanguage() {
    this.translate.use(this.lang);
  }

  next(){
    //this.presentToast(this.lang);
    this.navCtrl.push('NewPage',{lng:this.lang});
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
    
}