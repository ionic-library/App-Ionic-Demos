import { NgModule }						from '@angular/core';

import { CapitalizePipe }				from '../pipes/capitalize/pipe/capitalize';
import { InitialPipe }					from '../pipes/initial/pipe/initial';
import { MomentPipe }					from '../pipes/moment/pipe/moment';
import { OrderByPipe }					from '../pipes/orderby/pipe/orderby';
import { RomanizePipe }					from '../pipes/romanize/pipe/romanize';
import { ShortenStringPipe }			from '../pipes/shorten/pipe/shorten';
import { TemperaturePipe }				from '../pipes/temperature/pipe/temperature';

export const pipes = [
	CapitalizePipe,
	InitialPipe,
	MomentPipe,
	OrderByPipe,
	RomanizePipe,
	ShortenStringPipe,
	TemperaturePipe,
  ];

@NgModule({
	declarations: [pipes],
	exports: [pipes]
})
export class PipesModule { }
