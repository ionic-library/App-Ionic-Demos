import { Component } from '@angular/core';

@Component({
  templateUrl: 'root-page.html'
})
export class ToolbarScenarios {

  buttonClick(button: any) {
    console.log(button);
  }

}
