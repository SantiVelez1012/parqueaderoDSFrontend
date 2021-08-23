import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEntryComponent } from './components/form-entry/form-entry.component';
import { GetVehiculoComponent } from './components/form-get-vehiculo/form-get-vehiculo.component';
import { GetVehiculosComponent } from './components/get-vehiculos/get-vehiculos.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutModule } from './layout/layout.module';
import { SecondService } from './services/clock.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InformeComponent } from './components/informe/informe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormEntryComponent,
    GetVehiculoComponent,
    GetVehiculosComponent,
    InformeComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SecondService],
  bootstrap: [AppComponent]
})
export class AppModule { }
