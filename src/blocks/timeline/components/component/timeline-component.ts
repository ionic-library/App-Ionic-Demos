import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-timeline-component',
  templateUrl: 'timeline-component.html'
})
export class TimelineComponent {
  @Input('endIcon') endIcon = 'ionic';
  constructor() { }
}

@Component({
  selector: 'page-timeline-component',
  template: '<ng-content></ng-content>'
})
export class TimelineItemComponent{
  constructor() { }
}

@Component({
  selector:'timeline-time',
  template: '<span>{{time.subtitle}}</span> <span>{{time.title}}</span>'
})
export class TimelineTimeComponent{
  @Input('time') time: { title?: string, subtitle?: string} = {};
  constructor() { }
}
