import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-youtube-modal-page-one',
  templateUrl: 'youtube-modal-page-one.html',
})
export class YoutubeModalPageOne {

  url: SafeResourceUrl;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public sanitizer: DomSanitizer,
    public viewCtrl: ViewController,) {
    this.url = sanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/' + navParams.get('id'));
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
