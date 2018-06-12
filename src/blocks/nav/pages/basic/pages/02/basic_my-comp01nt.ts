import { Component, ViewChild } from '@angular/core';
import { Basic022 } from './my-component-two';

@Component({
  selector: 'my-cmp',
  template: `<my-cmp2></my-cmp2> <span style="color:green">{{value}}</span>`
})
export class NavBasic {

  @ViewChild(Basic022) _label: Basic022;

  label: Basic022;
  value: string = 'Test Failed';

  ngOnInit() {
    this.label = this._label;
  }
}
