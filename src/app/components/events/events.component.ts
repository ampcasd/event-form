import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { NavigationBarUpdate } from 'src/app/store/actions/navigation-bar-update.action';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

  createMode: boolean;

  constructor(store: Store) {
    store.dispatch(new NavigationBarUpdate('New event'));
  }

}
