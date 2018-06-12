import { Component } from '@angular/core';

@Component({
  templateUrl: 'page-one.html'
})
export class ButtonBlock {
  blockButton = true;

  toggleBlock() {
    this.blockButton = !this.blockButton;
  }
}
