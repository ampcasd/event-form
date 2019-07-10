import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsDashboardComponent } from './events-dashboard.component';
import { EventSummaryModule } from './event-summary/event-summary.module';
import { CreateEventModule } from './create-event/create-event.module';
import { EventFormService } from './create-event/event-form.service';

@NgModule({
  declarations: [
    EventsDashboardComponent
  ],
  imports: [
    BrowserModule,
    EventSummaryModule,
    CreateEventModule
  ],
  exports: [
    EventsDashboardComponent
  ],
  providers: [EventFormService]
})
export class EventsDashboardModule { }
