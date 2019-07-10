import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CreateEventComponent } from './create-event.component';
import { FormSectionAboutModule } from './form-section-about/form-section-about.module';
import { FormSectionCoordinatorModule } from './form-section-coordinator/form-section-coordinator.module';
import { FormSectionWhenModule } from './form-section-when/form-section-when.module';
import { SectionContainerModule } from 'src/app/components/shared/section-container/section-container.module';
import { HttpService } from 'src/app/services/http.service';

@NgModule({
  declarations: [
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SectionContainerModule,
    FormSectionAboutModule,
    FormSectionCoordinatorModule,
    FormSectionWhenModule,
    HttpClientModule
  ],
  exports: [
    CreateEventComponent
  ],
  providers: [
    HttpService
  ]
})
export class CreateEventModule { }
