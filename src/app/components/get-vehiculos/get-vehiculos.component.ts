import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Vehiculo } from "src/app/models/vehiculo";
import { VehiculoService } from "src/app/services/vehiculo.service";
import { FechaService } from "src/app/services/fecha.service";
import { ApiService } from "src/app/services/api.service";
@Component({
    selector:'app-formGetAll',
    templateUrl:'./get-vehiculos.component.html',
    styleUrls:['./get-vehiculos.component.css']
})

export class GetVehiculosComponent implements OnInit {

    vehiculos!:Vehiculo[];
    servicioFecha = new FechaService();
    constructor(private servicio:VehiculoService, private router:Router, private apiService:ApiService){

    }
    
    ngOnInit(){
        this.servicio.getAll().subscribe(data=>{
            this.vehiculos = data;
        })
    }

    salir(placa:string){
        this.apiService.salidaVehiculo(placa);
    }

}