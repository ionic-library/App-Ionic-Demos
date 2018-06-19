import { Component } from '@angular/core';

@Component({
  templateUrl: 'button-clear.html'
})
export class ButtonClear {
  clearButton = true;

  toggleClear() {
    this.clearButton = !this.clearButton;
  }
}
