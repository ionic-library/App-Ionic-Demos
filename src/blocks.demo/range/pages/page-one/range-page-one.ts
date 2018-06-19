import { Component } from '@angular/core';

@Component({
  templateUrl: 'range-page-one.html'
})
export class RangePageOne {
  brightness: number = 20;
  saturation: number = 0;
  warmth: number = 1300;
  structure: any = {lower: 33, upper: 60};

  onChange(ev: any) {
    console.log('Changed', ev);
  }
}
