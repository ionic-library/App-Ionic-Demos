import { Component } from '@angular/core';

@Component({
  templateUrl: 'root-page.html'
})
export class InputInlineLabels {

  submit(ev: any) {
    console.debug('submit', ev);
  }
}
