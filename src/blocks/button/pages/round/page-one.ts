import { Component } from '@angular/core';

@Component({
  templateUrl: 'page-one.html'
})
export class ButtonRound {
  dynamicColor: string = 'secondary';

  toggleColor() {
    this.dynamicColor = (this.dynamicColor === 'secondary' ? 'danger' : 'secondary');
  }
}
