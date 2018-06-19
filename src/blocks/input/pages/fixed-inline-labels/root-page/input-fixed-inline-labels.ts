import { Component } from '@angular/core';

@Component({
  templateUrl: 'input-fixed-inline-labels.html'
})
export class InputFixedInlineLabels {
  url: string;
  input1: string = 'Text 1';

  onEvent(event: any) {
    console.log('Did Event:', event.type);
  }
}
