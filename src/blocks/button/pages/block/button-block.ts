import { Component } from '@angular/core';

@Component({
  templateUrl: 'button-block.html'
})
export class ButtonBlock {
  blockButton = true;

  toggleBlock() {
    this.blockButton = !this.blockButton;
  }
}
