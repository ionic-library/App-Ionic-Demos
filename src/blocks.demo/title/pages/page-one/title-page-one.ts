import { Component } from '@angular/core';

// Use the toolbar demo but pass in the demo name to change the title
// this will also hide some of the toolbars that don't use `ion-title`
@Component({
  templateUrl: 'title-page-one.html'
})
export class TitlePageOne {
  demo = 'Title';
  favorites = 'recent';
  apps = 'free';
}