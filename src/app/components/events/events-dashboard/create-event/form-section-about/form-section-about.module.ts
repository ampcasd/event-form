import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormSectionAboutComponent } from './form-section-about.component';
import { FormSectionBaseModule } from 'src/app/components/shared/form-section/form-section.module';

@NgModule({
  declarations: [
    FormSectionAboutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormSectionBaseModule
  ],
  exports: [
    FormSectionAboutComponent
  ]
})
export class FormSectionAboutModule { }
