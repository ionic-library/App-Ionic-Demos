import { Component, ElementRef, ViewChild } from '@angular/core';
import { PopoverController } from '../../../../../src';
import { ConfigTabsPageTwo } from '../page-two/page-two';

@Component({
  templateUrl: 'popover-page-one.html'
})
export class PopoverPageOne {
  @ViewChild('popoverContent', {read: ElementRef}) content: ElementRef;
  @ViewChild('popoverText', {read: ElementRef}) text: ElementRef;

  constructor(private popoverCtrl: PopoverController) {}

  presentRadioPopover(ev: UIEvent) {
    let popover = this.popoverCtrl.create(ConfigTabsPageTwo, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    });
  }
}