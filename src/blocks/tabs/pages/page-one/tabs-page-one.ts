import { Component, ViewEncapsulation } from '@angular/core';
import { PageTwo } from '../page-two/page-two';

@Component({
  templateUrl: 'tabs-page-one.html',
  selector: 'page-tabs-page-one',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      ion-tabs {
        margin-bottom: 20px;
      }
    `,
    `
      ion-tabs,
      ion-tabs .tabbar {
        position: relative;
        top: auto;
        height: auto;
        visibility: visible;
        opacity: 1;
      }
    `
  ]
})
export class TabsPageOne {
  root = PageTwo;
}
