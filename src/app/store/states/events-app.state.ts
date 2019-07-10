import { State, Action, StateContext, Selector } from '@ngxs/store';

import { EventID } from 'src/app/interfaces/social-event.interfaces';
import { SocialEvent } from 'src/app/models/social-event.model';
import { EventsAppStateUpdate } from '../actions/events-app-state-update.action';

export class EventsAppStateModel {
  events: Map<EventID, SocialEvent>;
}

@State<EventsAppStateModel>({
  name: 'eventsApp',
  defaults: {
    events: new Map()
  }
})
export class EventsAppState {

  @Action(EventsAppStateUpdate)
  add({ getState, patchState }: StateContext<EventsAppStateModel>, { event, isDeletion }: EventsAppStateUpdate) {
    const events: Map<EventID, SocialEvent> = getState().events;

    isDeletion ?
      events.delete(event.id) :
      events.set(event.id, event);

    patchState({
      events
    });
  }
}
