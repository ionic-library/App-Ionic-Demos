import { Component } from '@angular/core';

@Component({
  templateUrl: 'root-page.html'
})
export class ToolbarColors {

  buttonClick(button: any) {
    console.log(button);
  }

}
