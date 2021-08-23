import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Vehiculo } from "src/app/models/vehiculo";
import { ApiService } from "src/app/services/api.service";
import { FechaService } from "src/app/services/fecha.service";
import { VehiculoService } from "src/app/services/vehiculo.service";

@Component({
    selector:'app-formGet',
    templateUrl:'./form-get-vehiculo.component.html',
    styleUrls:['./form-get-vehiculo.component.css']
})

export class GetVehiculoComponent implements OnInit {
    encontrado!:boolean;
    vehiculo!:Vehiculo;
    form!:FormGroup;
    servicioFecha = new FechaService();

    constructor(private vehiculoService:VehiculoService, private apiService:ApiService, private formBuilder:FormBuilder){
        this.buildForm();
        
    }

    ngOnInit(){
        this.encontrado = false;
    }

    private buildForm(){
        this.form = this.formBuilder.group({
            placa:['', [Validators.required]]
        })
    }

    search() {
        const value = this.form.value;
        this.vehiculoService.getByPlaca(value.placa).subscribe(data=>{
            this.vehiculo = data;
        })
        this.encontrado = true;

      }

    
}