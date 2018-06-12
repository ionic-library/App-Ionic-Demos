import { Component, NgModule } from '@angular/core';
import { IonicApp, IonicModule, NavController, Refresher } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class RefresherNavigationModule {
  items: string[] = [];

  constructor(public nav: NavController) {
    for (var i = 0; i < 15; i++) {
      this.items.push( getRandomData() );
    }
  }

  doRefresh(refresher: Refresher) {
    console.info('Begin async operation');

    getAsyncData().then((newData: string[]) => {
      for (var i = 0; i < newData.length; i++) {
        this.items.unshift( newData[i] );
      }

      console.info('Finished receiving data, async operation complete');
      refresher.complete();
    });
  }

  doStart() {
    console.info('Refresher, start');
  }

  doPulling(refresher: Refresher) {
    console.info('Pulling', refresher.progress);
  }

  navigate() {
    this.nav.setRoot(RefresherNavigation);
  }

}

function getAsyncData() {
  // async return mock data
  return new Promise(resolve => {

    setTimeout(() => {
      let data: string[] = [];
      for (var i = 0; i < 3; i++) {
        data.push( getRandomData() );
      }

      resolve(data);
    }, 3000);

  });
}

function getRandomData() {
  let i = Math.floor( Math.random() * data.length );
  return data[i];
}

const data = [
  'Fast Times at Ridgemont High',
  'Peggy Sue Got Married',
  'Raising Arizona',
  'Moonstruck',
  'Fire Birds',
  'Honeymoon in Vegas',
  'Amos & Andrew',
  'It Could Happen to You',
  'Trapped in Paradise',
  'Leaving Las Vegas',
  'The Rock',
  'Con Air',
  'Face/Off',
  'City of Angels',
  'Gone in Sixty Seconds',
  'The Family Man',
  'Windtalkers',
  'Matchstick Men',
  'National Treasure',
  'Ghost Rider',
  'Grindhouse',
  'Next',
  'Kick-Ass',
  'Drive Angry'
];

@Component({
  templateUrl: 'page2.html'
})
export class RefresherNavigationModule {
  constructor() {}
}

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class RefresherNavigationModule {
  rootPage = RefresherNavigation;
}

@NgModule({
  declarations: [
    RefresherNavigation,
    RefresherNavigation,
    RefresherNavigation
  ],
  imports: [
    IonicModule.forRoot(RefresherNavigation)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    RefresherNavigation,
    RefresherNavigation,
    RefresherNavigation
  ]
})
export class RefresherNavigationModule {}
