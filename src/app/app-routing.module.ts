import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEntryComponent } from './components/form-entry/form-entry.component';
import { GetVehiculoComponent } from './components/form-get-vehiculo/form-get-vehiculo.component';
import { GetVehiculosComponent } from './components/get-vehiculos/get-vehiculos.component';
import { HomeComponent } from './components/home/home.component';
import { InformeComponent } from './components/informe/informe.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'entryVehiculo',component:FormEntryComponent},
  {path:'getVehiculos',component:GetVehiculosComponent},
  {path:'getVehiculoByPlaca',component:GetVehiculoComponent},
  {path:'informe/:placa', component:InformeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
