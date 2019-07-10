import { Component, SimpleChanges, OnChanges, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';

import { FormSectionBaseComponent } from 'src/app/components/shared/form-section/form-section.component';
import { HttpService } from 'src/app/services/http.service';
import { SocialEventCategory } from 'src/app/interfaces/social-event.interfaces';

@Component({
  selector: 'app-form-section-about',
  templateUrl: './form-section-about.component.html',
  styleUrls: [
    './form-section-about.component.scss',
    '../../../../shared/form-section/form-section.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSectionAboutComponent extends FormSectionBaseComponent implements OnChanges, OnInit, OnDestroy {

  categories$: Observable<SocialEventCategory[]>;

  get paidEvent(): AbstractControl { return this.form.controls.about.get('paidEvent'); }

  get descriptionLength(): number {
    const description: string = this.form.value.about.description;
    return description ? description.length : 0;
  }

  private validationSubscription: Subscription;

  constructor(private httpService: HttpService) {
    super();
    this.categories$ = this.httpService.pullJSON('categories');
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('form' in changes) {
      return;
    }
  }

  ngOnInit() {
    this.setEventFeeValidation();
  }

  ngOnDestroy() {
    this.validationSubscription.unsubscribe();
  }

  private setEventFeeValidation() {
    const fee = this.form.controls.about.get('eventFee');

    this.validationSubscription = this.form.controls.about.get('paidEvent').valueChanges
      .subscribe((paid: boolean) => {

        if (paid) {
          fee.setValidators([Validators.required]);
        }
        if (!paid) {
          fee.setValidators(null);
        }
        fee.updateValueAndValidity();
      });
  }

}
