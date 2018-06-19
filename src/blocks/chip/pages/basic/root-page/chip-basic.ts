import { Component } from '@angular/core';


@Component({
  templateUrl: 'chip-basic.html'
})
export class ChipBasic {
  delete(chip: Element) {
    chip.remove();
  }
}
