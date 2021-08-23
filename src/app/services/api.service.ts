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

    constructor(private router: Router, private fechaService: FechaService, private vehiculoService: VehiculoService) {

    }

    generarInforme(placa: string) {
        this.router.navigate(['informe', placa]);
    }

    salidaVehiculo(placa: string) {
        let fechaActual = this.fechaService.processDate();
        this.vehiculoService.exitVehiculo(placa, fechaActual);
        this.generarInforme(placa);
    }

    verificarCupo():boolean {
        this.vehiculoService.getAll().subscribe(data => {
            this.registros = data;
        })
        console.log();
        if (this.registros.length > 2) {
            return false;
        } else {
            return true;
        }

    }

}