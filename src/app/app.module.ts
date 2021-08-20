import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { LayoutModule } from './layout/layout.module';
import { SecondService } from './services/clock.service';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SecondService],
  bootstrap: [AppComponent]
})
export class AppModule { }
