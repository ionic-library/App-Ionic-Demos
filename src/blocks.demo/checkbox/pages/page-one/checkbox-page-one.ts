import { Component } from '@angular/core';

@Component({
  templateUrl: 'checkbox-page-one.html'
})
export class CheckboxPageOne {

  data = {
    jon: true,
    daenerys: true,
    arya: false,
    tyroin: false,
    sansa: true,
    khal: false,
    cersei: true,
    stannis: true,
    petyr: false,
    hodor: true,
    catelyn: true,
    bronn: false
  };
}
