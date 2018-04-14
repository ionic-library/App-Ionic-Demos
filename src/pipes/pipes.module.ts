import { NgModule }						from '@angular/core';

import { CapitalizePipe }				from './capitalize/pipe/capitalize';
import { InitialPipe }					from './initial/pipe/initial';
import { MomentPipe }					from './moment/pipe/moment';
import { OrderByPipe }					from './orderby/pipe/orderby';
import { RomanizePipe }					from './romanize/pipe/romanize';
import { ShortenStringPipe }			from './shorten/pipe/shorten';
import { TemperaturePipe }				from './temperature/pipe/temperature';

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
	declarations:[ pipes ],
	exports: [ pipes ]
  })


export class PipesModule { }
