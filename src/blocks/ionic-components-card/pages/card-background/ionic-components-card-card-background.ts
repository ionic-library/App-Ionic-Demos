import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ionic-components-card-card-background',
  templateUrl: 'ionic-components-card-card-background.html'
})
export class IonicComponentsCardCardBackground {
  cards = [
    {
      imageUrl: 'assets/img/card/card-saopaolo.png',
      title: 'São Paulo',
      subtitle: '41 Listings'
    },
    {
      imageUrl: 'assets/img/card/card-amsterdam.png',
      title: 'Amsterdam',
      subtitle: '64 Listings'
    },
    {
      imageUrl: 'assets/img/card/card-sf.png',
      title: 'San Francisco',
      subtitle: '72 Listings'
    },
    {
      imageUrl: 'assets/img/card/card-madison.png',
      title: 'Madison',
      subtitle: '28 Listings'
    }];

  constructor(public navCtrl: NavController) {

  }

  cardTapped(card) {
    alert(card.title + ' was tapped.');
  }

}
