import { Component } from '@angular/core';
import { PageTwo } from '../config_2/page-two';

@Component({
  templateUrl: 'config-page-one.html'
})
export class ConfigPageOne {
  tabOne = PageTwo;
}
