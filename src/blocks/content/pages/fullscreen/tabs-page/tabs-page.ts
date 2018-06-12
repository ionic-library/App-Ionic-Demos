import { Component } from '@angular/core';
import { IonicPage } from '../../../../../..';

import { PageOne } from '../page-one/page-one';

@IonicPage()
@Component({
  templateUrl: 'tabs-page.html'
})
export class ContentFullscreen {
  rootPage = PageOne;
  page1 = 'PageTwo';
  page2 = 'PageThree';
  page3 = 'PageFour';
  page4 = 'PageFive';
}
