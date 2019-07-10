import { Injectable, LOCALE_ID } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { of, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { SocialEventForm } from 'src/app/models/social-event-form.model';
import { SocialEvent } from 'src/app/models/social-event.model';
import { AppState } from 'src/app/interfaces/app-state.interface';
import { UserInfoService } from 'src/app/services/user-info.service';
import { Employee } from 'src/app/interfaces/employee.interface';


@Injectable()
export class EventFormService {

  eventForm$: Observable<SocialEventForm>;

  public get formValid(): boolean {
    let valid: boolean;
    this.eventForm$.pipe(take(1)).subscribe((eventForm: SocialEventForm) => {
      valid = eventForm.formGroup.valid;
    });
    return valid;
  }

  private get newForm() {
    return new SocialEventForm(
      new SocialEvent(this.generateUniqueId(), this.getUser()),
      this.fb
    );
  }

  private datePipe: DatePipe;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private userInfoService: UserInfoService,
  ) {
    this.eventForm$ = of(this.newForm);
    this.datePipe = new DatePipe('en-US');
  }

  resetForm(): void {
    this.eventForm$.pipe(take(1)).subscribe(form => form.formGroup.reset());
  }

  submit(): void {
    this.eventForm$.pipe(take(1)).subscribe((form: SocialEventForm) => {
      form = this.flattenCategoryId(form);
      form = this.convertDatetime(form);

      console.log(JSON.stringify(
        {
          ...form.formGroup.value.about,
          ...form.formGroup.value.when,
          coordinator: form.formGroup.value.coordinator
        }
      ));
    });
  }

  private getUser(): Employee {
    return this.userInfoService.currentUser;
  }

  private generateUniqueId(): string {
    let newUniqueId = 0;

    this.store.select((state: AppState) => {
      return [...state.eventsApp.events.keys()].reduce((previous, current) => {
        return Number(current) > Number(previous) ? current : previous;
      });
    }).pipe(take(1)).subscribe(highestId => {
      if (Number(highestId) >= 0) {
        newUniqueId = Number(highestId) + 1;
      }
    });
    return String(newUniqueId);
  }

  private flattenCategoryId(form: SocialEventForm) {
    if (form.formGroup.value.about.categoryId) {
      form.formGroup.value.about.categoryId = form.formGroup.value.about.categoryId.id;
    }
    return form;
  }

  private convertDatetime(form: SocialEventForm) {
    let convertedDate: string;
    let convertedTime: string;
    if (form.formGroup.value.when.meridian === 'pm') {
      const timeSplit = form.formGroup.value.when.time.split(':');
      convertedTime = `${Number(timeSplit[0]) + 12}:${timeSplit[1]}`;
    }

    convertedDate = this.datePipe.transform(form.formGroup.value.when.day, 'yyyy-MM-dd');

    form.formGroup.value.when = {
      date: `${convertedDate}T${convertedTime || form.formGroup.value.when.time}`,
      duration: form.formGroup.value.when.duration * 3600
    };
    return form;
  }
}
