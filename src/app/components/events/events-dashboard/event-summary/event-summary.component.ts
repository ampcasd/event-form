import { Component, Input } from '@angular/core';

import { SocialEvent } from 'src/app/models/social-event.model';

@Component({
  selector: 'app-event-summary',
  templateUrl: './event-summary.component.html',
  styleUrls: ['./event-summary.component.scss']
})
export class EventSummaryComponent {

  @Input() event: SocialEvent;

}
