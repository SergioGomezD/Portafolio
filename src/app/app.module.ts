import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MenudebrrComponent } from './menudebrr/menudebrr.component';

@NgModule({
  declarations: [
    AppComponent,
    MenudebrrComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



