import { Component } from '@angular/core';

@Component({
  templateUrl: 'page-one.html'
})
export class ButtonClear {
  clearButton = true;

  toggleClear() {
    this.clearButton = !this.clearButton;
  }
}
