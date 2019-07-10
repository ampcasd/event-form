import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavigationBarComponent } from './navigation-bar.component';

@NgModule({
  declarations: [
    NavigationBarComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    NavigationBarComponent
  ],
  providers: []
})
export class NavigationBarModule { }
