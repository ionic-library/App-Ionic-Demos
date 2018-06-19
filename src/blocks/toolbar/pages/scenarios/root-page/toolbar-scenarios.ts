import { Component } from '@angular/core';

@Component({
  templateUrl: 'toolbar-scenarios.html'
})
export class ToolbarScenarios {

  buttonClick(button: any) {
    console.log(button);
  }

}
