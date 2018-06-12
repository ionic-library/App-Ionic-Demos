import { Injectable } from '@angular/core';
import { Config } from '../../../../..';

@Injectable()
export class ModalServices {
  constructor(public config: Config) {
    console.log('ModalServices constructor');
  }

  getData() {
    return 'Some data';
  }
}
