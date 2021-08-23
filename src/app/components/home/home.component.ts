import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ApiService } from "src/app/services/api.service";
import { VehiculoService } from "src/app/services/vehiculo.service";

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent implements OnInit {

    form!:FormGroup;
    constructor(private formBuilder:FormBuilder, private vehiculoService:VehiculoService){
        this.buildForm();
    }

    ngOnInit(){
        
    }

    private buildForm(){
        this.form = this.formBuilder.group({
            capacidad:['', [Validators.required]]
        })
    }

    setCapacidad(){
        const value = this.form.value;
        let capacidad = value.capacidad;
        console.log(capacidad);
        this.vehiculoService.setCapacidad(capacidad);
    }
}