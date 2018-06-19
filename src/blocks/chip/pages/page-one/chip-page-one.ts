import { Component } from '@angular/core';

@Component({
  templateUrl: 'chip-page-one.html'
})
export class ChipPageOne {
  delete(chip: Element) {
    chip.remove();
  }
}
