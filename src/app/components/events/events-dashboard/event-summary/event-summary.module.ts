import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventSummaryComponent } from './event-summary.component';
import { SectionContainerModule } from 'src/app/components/shared/section-container/section-container.module';

@NgModule({
  declarations: [
    EventSummaryComponent
  ],
  imports: [
    BrowserModule,
    SectionContainerModule
  ],
  exports: [
    EventSummaryComponent
  ],
  providers: []
})
export class EventSummaryModule { }
