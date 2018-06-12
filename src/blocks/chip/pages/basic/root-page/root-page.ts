import { Component } from '@angular/core';


@Component({
  templateUrl: 'root-page.html'
})
export class ChipBasic {
  delete(chip: Element) {
    chip.remove();
  }
}
