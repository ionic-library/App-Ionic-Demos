import { Component } from '@angular/core';

@Component({
  templateUrl: 'toolbar-colors.html'
})
export class ToolbarColors {

  buttonClick(button: any) {
    console.log(button);
  }

}
