import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Vehiculo } from "src/app/models/vehiculo";
import { ApiService } from "src/app/services/api.service";
import { FechaService } from "src/app/services/fecha.service";
import { VehiculoService } from "src/app/services/vehiculo.service";
@Component({
    selector:'app-formEntry',
    templateUrl:'./form-entry.component.html',
    styleUrls:['./form-entry.component.css']
})

export class FormEntryComponent implements OnInit {
    fechaIngreso!:string;
    form!:FormGroup;
    vehiculoxd!:Vehiculo;
    posible!:boolean;

    constructor(private vehiculoService:VehiculoService, private fechaService:FechaService, private formBuilder:FormBuilder, private apiService:ApiService){
        this.buildForm();
    }

    ngOnInit(){
        //this.posible = this.apiService.verificarCupo();
    }

    private buildForm(){
        this.form = this.formBuilder.group({
            placa:['', [Validators.required]]
        })
    }

    ingresar(event: Event){
        event.preventDefault();
        this.vehiculoxd = new Vehiculo();
        const value = this.form.value;
        this.vehiculoxd.placa = value.placa;
        this.vehiculoxd.fechaIngreso = this.fechaService.processDate();
        this.vehiculoService.entryVehiculo(this.vehiculoxd);
        
    }

}