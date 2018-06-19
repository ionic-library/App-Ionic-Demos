import { Component } from '@angular/core';

@Component({
  templateUrl: 'input-placeholder-labels.html'
})
export class InputPlaceholderLabels {
  isReadonly: boolean = true;

  toggleReadonly() {
    this.isReadonly = !this.isReadonly;
  }

}
