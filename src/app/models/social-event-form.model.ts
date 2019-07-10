import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { SocialEvent } from './social-event.model';

export class SocialEventForm {
  eventUniqueId: string;

  formGroup: FormGroup;

  // consumes event for future extension of edit mode
  constructor(event: SocialEvent, fb: FormBuilder) {
    this.eventUniqueId = event.id;

    this.formGroup = fb.group({
      about: fb.group({
        title: [event.title, Validators.required],
        description: [event.description, Validators.required],
        categoryId: [event.categoryId],
        paidEvent: [event.paidEvent || false],
        eventFee: [event.eventFee], // fee gets validator applied dynamically
        reward: [event.reward]
      }),
      coordinator: fb.group({
        email: [(event.coordinator && event.coordinator.email), Validators.email],
        id: [(event.coordinator && event.coordinator.id), Validators.required]
      }),
      when: fb.group({
        day: [event.date || Date.now(), Validators.required],
        time: ['', Validators.required],
        meridian: ['am'],
        duration: [event.duration]
      })
    });
    // set dirty for proper initial styles
    this.formGroup.controls.coordinator.get('id').markAsDirty();
    this.formGroup.controls.coordinator.get('email').markAsDirty();
  }
}
