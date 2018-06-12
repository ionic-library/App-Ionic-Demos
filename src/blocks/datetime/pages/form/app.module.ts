import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicApp, IonicModule } from '../../../..';



@Component({
  templateUrl: 'main.html'
})
export class DatetimeFormModule {
  stackedCtrl = new FormControl('1994-12-15T13:47:20.789');
  floatingCtrl = new FormControl('1995-04-15');
  floatingCtrl2 = new FormControl('');
  fixedCtrl = new FormControl({value: '2002-09-23T15:03:46.789', disabled: true});
  inlineCtrl = new FormControl({value: '2005-06-17T11:06Z', disabled: true});

  datetimeForm = new FormGroup({
    'stacked': this.stackedCtrl,
    'floating': this.floatingCtrl,
    'floating2': this.floatingCtrl2,
    'fixed': this.fixedCtrl,
    'inline': this.inlineCtrl
  });

}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class DatetimeFormModule {
  root = DatetimeForm;
}

@NgModule({
  declarations: [
    DatetimeForm,
    DatetimeForm
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(DatetimeForm)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DatetimeForm
  ]
})
export class DatetimeFormModule {}
