import { Component } from '@angular/core';

import { PageTwo } from '../page-two/page-two';
import { PageThree } from '../page-three/page-three';
import { PageFour } from '../page-four/page-four';

@Component({
  templateUrl: 'split-pane-nested.html'
})
export class SplitPaneNested {
  root = PageTwo;
  root2 = PageThree;
  root3 = PageFour;
}
