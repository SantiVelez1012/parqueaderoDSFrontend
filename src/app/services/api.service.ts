import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { FechaService } from "./fecha.service";
import { VehiculoService } from "./vehiculo.service";
import { Vehiculo } from "src/app/models/vehiculo";

@Injectable({
    providedIn: 'root'
})



export class ApiService {
    registros: Vehiculo[] = [];
    cupo!:number;

    constructor(private router: Router, private fechaService: FechaService, private vehiculoService: VehiculoService) {

    }

    generarInforme(placa: string) {
        this.router.navigate(['informe', placa]);
    }

    salidaVehiculo(placa: string) {
        let fechaActual = this.fechaService.processDate();
        let valores = {
            "fechaSalida":fechaActual
        }
        this.vehiculoService.exitVehiculo(placa, valores).subscribe(data =>{
                console.log(data);
            });
        this.generarInforme(placa);
    }

    verificarCupo(cantidad:number, cupos:number):boolean {

        if (cantidad > cupos) {
            return false;
        } else {
            return true;
        }

    }

}