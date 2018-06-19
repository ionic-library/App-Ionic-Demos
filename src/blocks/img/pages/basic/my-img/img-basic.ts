import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-img-basic',
  template: `<ion-img [width]="width" [height]="height" [src]="src"></ion-img>`
})
export class ImgBasic {
  @Input() public width: number;
  @Input() public height: number;
  @Input() public src: string;
}
