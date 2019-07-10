import { SocialEvent } from 'src/app/models/social-event.model';

export class EventsAppStateUpdate {

  static readonly type = 'SocialEventUpdate';

  constructor(public event: SocialEvent, public isDeletion = false) { }
}
