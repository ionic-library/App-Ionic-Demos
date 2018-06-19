import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  templateUrl: 'nav-params-page2.html'
})
export class NavParamsPage2 {
  myParam: string;

  constructor(params: NavParams) {
    this.myParam = params.get('myParam');
  }
}
