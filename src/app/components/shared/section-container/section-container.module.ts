import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SectionContainerComponent } from './section-container.component';
import { SimpleHeaderModule } from '../simple-header/simple-header.module';
import { SuccessHeaderModule } from '../success-header/success-header.module';

@NgModule({
  declarations: [
    SectionContainerComponent
  ],
  imports: [
    BrowserModule,
    SimpleHeaderModule,
    SuccessHeaderModule
  ],
  exports: [
    SectionContainerComponent
  ],
  providers: []
})
export class SectionContainerModule { }
