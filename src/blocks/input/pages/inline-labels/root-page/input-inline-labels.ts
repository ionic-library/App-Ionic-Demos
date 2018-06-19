import { Component } from '@angular/core';

@Component({
  templateUrl: 'input-inline-labels.html'
})
export class InputInlineLabels {

  submit(ev: any) {
    console.debug('submit', ev);
  }
}
