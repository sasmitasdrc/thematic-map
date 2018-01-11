import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SDRCThematicMapDirective } from './sdrc-thematic-map.directive';


@NgModule({
  declarations: [
    AppComponent,
    SDRCThematicMapDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
