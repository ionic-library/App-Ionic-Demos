import { Component } from '@angular/core';
import { ConfigTabsPageTwo } from '../page-two/page-two';

@Component({
  templateUrl: 'config-page-one.html'
})
export class ConfigPageOne {
  tabOne = ConfigTabsPageTwo;
}