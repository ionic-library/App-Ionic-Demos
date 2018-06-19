import { Component } from '@angular/core';

@Component({
  templateUrl: 'item-inputs.html'
})
export class ItemInputs {
  disabled = false;
  datetime = '2016-12-09';
  toggle = true;
  select = 'n64';
  text = 'Text';
  checkbox = true;
  range = 10;

  boolDisabled(): boolean {
    return this.disabled;
  }

  strDisabled(): string {
    return this.disabled + '';
  }
}
