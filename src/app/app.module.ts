import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { MdSelectModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
      AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCk5LN6UZWnnl8vQxd1LP_HIIgj7Izje9U'
    }),
    BrowserModule,
    BrowserAnimationsModule,
    MdSelectModule, 
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
