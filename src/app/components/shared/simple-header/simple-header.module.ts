import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SimpleHeaderComponent } from './simple-header.component';

@NgModule({
  declarations: [
    SimpleHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    SimpleHeaderComponent
  ],
  providers: []
})
export class SimpleHeaderModule { }
