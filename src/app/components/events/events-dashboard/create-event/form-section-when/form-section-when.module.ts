import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormSectionWhenComponent } from './form-section-when.component';

@NgModule({
  declarations: [
    FormSectionWhenComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormSectionWhenComponent
  ]
})
export class FormSectionWhenModule { }
