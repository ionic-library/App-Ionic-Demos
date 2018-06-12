import { Component } from '@angular/core';

@Component({
  templateUrl: 'root-page.html'
})
export class InputPlaceholderLabels {
  isReadonly: boolean = true;

  toggleReadonly() {
    this.isReadonly = !this.isReadonly;
  }

}
