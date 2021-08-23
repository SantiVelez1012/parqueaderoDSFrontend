import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule} from "../app-routing.module";
import { ClockComponent } from '../components/clock/clock.component';


@NgModule({
    declarations: [
      NavbarComponent,
      ClockComponent
    ],
    exports: [
      NavbarComponent
    ],
    imports: [
      CommonModule,
      AppRoutingModule
    ]
  })
  export class LayoutModule { }