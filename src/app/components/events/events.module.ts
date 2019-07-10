import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsComponent } from './events.component';
import { CreateEventModule } from './events-dashboard/create-event/create-event.module';
import { EventsDashboardModule } from './events-dashboard/events-dashboard.module';

@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    BrowserModule,
    CreateEventModule,
    EventsDashboardModule
  ],
  exports: [
    EventsComponent
  ],
  providers: []
})
export class EventsModule { }
