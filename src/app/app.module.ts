import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnvServiceProvider } from './services/env.service.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EnvServiceProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
