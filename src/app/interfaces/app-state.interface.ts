import { EventID } from 'src/app/interfaces/social-event.interfaces';
import { SocialEvent } from 'src/app/models/social-event.model';

export interface AppState {

  navigationBar: {
    header: string,
    links: string[]
  };

  eventsApp: {
    events: Map<EventID, SocialEvent>;
  };
}
