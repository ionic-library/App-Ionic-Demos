import { Injectable } from '@angular/core';
import { Config } from '../../../../../..';

@Injectable()
export class ModalModalPassData {
  constructor(public config: Config) {
  }

  getName() {
    return 'Jenny';
  }
}
