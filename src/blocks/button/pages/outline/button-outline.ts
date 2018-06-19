import { Component } from '@angular/core';

@Component({
  templateUrl: 'button-outline.html'
})
export class ButtonOutline {
  outlineButton = true;

  toggleOutline() {
    this.outlineButton = !this.outlineButton;
  }
}
