import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormSectionCoordinatorComponent } from './form-section-coordinator.component';

@NgModule({
  declarations: [
    FormSectionCoordinatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormSectionCoordinatorComponent
  ]
})
export class FormSectionCoordinatorModule { }
