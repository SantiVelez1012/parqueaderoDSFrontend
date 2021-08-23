import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Vehiculo } from "src/app/models/vehiculo";
import { VehiculoService } from "src/app/services/vehiculo.service";
import { FechaService } from "src/app/services/fecha.service";
@Component({
    selector:'app-informe',
    templateUrl:'./informe.component.html',
    styleUrls:['./informe.component.css']
})

export class InformeComponent implements OnInit {
    placa!:any;
    minutos!:number;
    vehiculo!:Vehiculo;
    servicioFecha:FechaService = new FechaService();

    constructor(private router:Router, private activatedRoute:ActivatedRoute,
        private vehiculoService:VehiculoService){

    }

    ngOnInit(){
        this.placa = this.activatedRoute.snapshot.paramMap.get('placa');
        console.log(this.placa);

        this.vehiculoService.updateTime(this.placa).subscribe(data =>{
            console.log(data);
        })
        
        this.vehiculoService.getByPlaca(this.placa).subscribe(data =>{
            this.vehiculo = data;
        })

    }
}