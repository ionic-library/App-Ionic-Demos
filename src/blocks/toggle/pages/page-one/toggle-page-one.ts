import { Component } from '@angular/core';

@Component({
  templateUrl: 'toggle-page-one.html'
})
export class TogglePageOne {
  data = {
    frodo: true,
    sam: false,
    eowyn: true,
    legolas: true,
    gimli: false,
    saruman: true,
    gandalf: true,
    arwen: false,
    boromir: false,
    gollum: true,
    galadriel: false
  };
}
