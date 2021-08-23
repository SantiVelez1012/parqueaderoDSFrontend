import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Vehiculo } from "src/app/models/vehiculo";
import { VehiculoService } from "src/app/services/vehiculo.service";
import { FechaService } from "src/app/services/fecha.service";
@Component({
    selector:'app-formGetAll',
    templateUrl:'./get-vehiculos.component.html',
    styleUrls:['./get-vehiculos.component.css']
})

export class GetVehiculosComponent implements OnInit {

    vehiculos!:Vehiculo[];
    servicioFecha = new FechaService();
    constructor(private servicio:VehiculoService, router:Router){

    }
    
    ngOnInit(){
        this.servicio.getAll().subscribe(data=>{
            this.vehiculos = data;
        })
    }
}