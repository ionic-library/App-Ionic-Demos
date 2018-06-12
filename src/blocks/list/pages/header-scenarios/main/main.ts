import { Component } from '@angular/core';

@Component({
  templateUrl: 'main.html'
})
export class ListHeaderScenarios {
  testClick(ev: UIEvent) {
    console.log(ev);
  }
}
