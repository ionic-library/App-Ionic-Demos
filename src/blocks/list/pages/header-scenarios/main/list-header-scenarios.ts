import { Component } from '@angular/core';

@Component({
  templateUrl: 'list-header-scenarios.html'
})
export class ListHeaderScenarios {
  testClick(ev: UIEvent) {
    console.log(ev);
  }
}
