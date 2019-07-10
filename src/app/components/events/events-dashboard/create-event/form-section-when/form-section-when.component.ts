import { Component, OnInit } from '@angular/core';

import { FormSectionBaseComponent } from 'src/app/components/shared/form-section/form-section.component';

@Component({
  selector: 'app-form-section-when',
  templateUrl: './form-section-when.component.html',
  styleUrls: [
    './form-section-when.component.scss',
    '../../../../shared/form-section/form-section.component.scss'
  ]
})
export class FormSectionWhenComponent extends FormSectionBaseComponent implements OnInit {

  today: number = Date.now();
  time: string;
  maxTime: string;
  meridian: string;
  hours: number;
  minutes: number;

  constructor() {
    super();
  }

  ngOnInit() {
    this.listenToMeridianChanges();
  }

  onTimeChange(event) {
    const timeSplit = event.target.value.split(':');
    const minutes = timeSplit[1] || 0;

    let hours = timeSplit[0];

    if (hours > 12) {
      hours -= 12;
      this.form.controls.when.get('time').setValue(`0${hours}:${minutes}`);

      if (this.meridian !== 'pm') {
        this.form.controls.when.get('meridian').setValue('pm');
      }
    }
    this.hours = hours;
    this.minutes = minutes;
  }

  private listenToMeridianChanges() {
    this.form.controls.when.get('meridian').valueChanges.subscribe(meridian => {
      const timeSplit = this.form.controls.when.get('time').value.split(':');

      this.hours = timeSplit[0];
      this.minutes = timeSplit[1];

      if (meridian === 'am' && this.hours > 12) {
        this.hours -= 12;
        this.form.controls.when.get('time').setValue(`0${this.hours}:${this.minutes}`);
      }
      this.meridian = meridian;
    });
  }
}
