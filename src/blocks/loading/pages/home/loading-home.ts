import { Component } from '@angular/core';
import { IonicPage } from '../../../../../..';

import { PageOne} from '../page-one/page-one';

@IonicPage()
@Component({
  templateUrl: 'loading-home.html'
})
export class LoadingHome {
 root1 = PageOne;
 root2 = 'PageTwo';
 root3 = PageOne;
}
