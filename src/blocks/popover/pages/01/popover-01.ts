import { Component, ElementRef, ViewChild } from '@angular/core';
import { PopoverController } from '../../../../../src';
import { PageTwo } from '../page-two/page-two';

@Component({
  templateUrl: 'popover-01.html'
})
export class Popover01 {
  @ViewChild('popoverContent', {read: ElementRef}) content: ElementRef;
  @ViewChild('popoverText', {read: ElementRef}) text: ElementRef;

  constructor(private popoverCtrl: PopoverController) {}

  presentRadioPopover(ev: UIEvent) {
    let popover = this.popoverCtrl.create(PageTwo, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    });
  }
}
