import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';

import { EventID } from 'src/app/interfaces/social-event.interfaces';
import { SocialEvent } from 'src/app/models/social-event.model';
import { AppState } from 'src/app/interfaces/app-state.interface';
import { EventFormService } from './create-event/event-form.service';

@Component({
  selector: 'app-events-dashboard',
  templateUrl: './events-dashboard.component.html',
  styleUrls: ['./events-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsDashboardComponent implements OnDestroy {

  createMode = true;

  events: Map<EventID, SocialEvent>;

  get noEvents(): boolean {
    return !this.events || this.events.size === 0;
  }

  private storeSubscription: Subscription;

  constructor(store: Store, private formService: EventFormService) {
    this.storeSubscription = store.select((state: AppState) => {
      this.events = state.eventsApp.events;
    }).subscribe();
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

  createSocialEvent() {
    this.formService.resetForm();
    this.createMode = true;
  }
}
