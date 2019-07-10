import { Component, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { EventFormService } from './event-form.service';
import { HeaderType } from 'src/app/components/shared/section-container/section-container.component';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEventComponent {

  exitCreateMode = new EventEmitter<void>();
  formSubmitted: boolean;
  displaySuccessMessage: boolean;

  readonly headerTypes = HeaderType;

  constructor(public formService: EventFormService) { }

  submit() {
    this.formSubmitted = true;
    if (this.formService.formValid) {
      this.displaySuccessMessage = true;
      this.formService.submit();
    }
  }
}
