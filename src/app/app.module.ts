import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PinchZoomModule } from './pinch-zoom/pinch-zoom.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PinchZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
