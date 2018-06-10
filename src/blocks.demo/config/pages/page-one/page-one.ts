import { Component } from '@angular/core';
import { ConfigTabsPageTwo } from '../page-two/page-two';

@Component({
  templateUrl: 'page-one.html'
})
export class ConfigPageOne {
  tabOne = ConfigTabsPageTwo;
}