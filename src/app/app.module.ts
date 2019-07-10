import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { NavigationBarModule } from './components/navigation-bar/navigation-bar.module';
import { EventsModule } from './components/events/events.module';
import { NavigationBarState } from './store/states/navigation-bar.state';
import { EventsAppState } from './store/states/events-app.state';
import { UserInfoService } from './services/user-info.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      NavigationBarState,
      EventsAppState
    ]),
    NavigationBarModule,
    EventsModule
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
