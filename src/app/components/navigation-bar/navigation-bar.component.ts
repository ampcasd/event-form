import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';

import { AppState } from 'src/app/interfaces/app-state.interface';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnDestroy {

  header: string;

  private storeSubscription: Subscription;

  constructor(store: Store) {
    this.storeSubscription = store
      .select((state: AppState) => this.header = state.navigationBar.header)
      .subscribe();
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

}
