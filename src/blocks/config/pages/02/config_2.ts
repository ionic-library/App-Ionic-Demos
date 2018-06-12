import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PageThree } from '../config_3/page-three';
import { Config } from 'ionic-angular/config/config';

@Component({
  templateUrl: 'page-two.html'
})
export class Config02 {
  config: any;
  initialConfig: any;
  constructor(_config: Config,  public navCtrl: NavController) {
    this.config = _config.settings();
    this.initialConfig = this.config;
  }

  load() {
    window.localStorage.setItem('configDemo', JSON.stringify(this.config));
    window.location.reload();
  }

  push() {
    this.navCtrl.push(PageThree);
  }
}
