import { Component } from '@angular/core';
import { PageTwo } from '../config_2/page-two';

@Component({
  templateUrl: 'page-one.html'
})
export class ConfigPageOne {
  tabOne = PageTwo;
}
