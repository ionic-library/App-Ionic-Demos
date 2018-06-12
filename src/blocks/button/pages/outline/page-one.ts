import { Component } from '@angular/core';

@Component({
  templateUrl: 'page-one.html'
})
export class ButtonOutline {
  outlineButton = true;

  toggleOutline() {
    this.outlineButton = !this.outlineButton;
  }
}
