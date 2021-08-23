import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Vehiculo } from "src/app/models/vehiculo";
import { ApiService } from "src/app/services/api.service";
import { FechaService } from "src/app/services/fecha.service";
import { VehiculoService } from "src/app/services/vehiculo.service";
import { Router } from "@angular/router";
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
    cupo!:number;
    registros!:number;

    constructor(private vehiculoService:VehiculoService, private fechaService:FechaService, private formBuilder:FormBuilder, private apiService:ApiService, private router:Router){
        this.buildForm();
    }

    ngOnInit(){


        this.vehiculoService.getCapacidad().subscribe(data =>{
            this.cupo = data;
            console.log(this.cupo)
            this.vehiculoService.getAll().subscribe(datos => {
                this.registros = datos.length
                console.log(this.registros)
                this.verificar()
            })
        })

    }

    private buildForm(){
        this.form = this.formBuilder.group({
            placa:['', [Validators.required]]
        })
    }

    ingresar(event: Event){

        event.preventDefault();
        
        const value = this.form.value;
        let fecha = this.fechaService.processDate();
        this.vehiculoxd = new Vehiculo(value.placa, fecha);
        this.vehiculoService.entryVehiculo(this.vehiculoxd).subscribe(data =>{
            console.log(data);
            this.router.navigate(['home'])
        }, error=>{
            console.log(error);
            alert('El registro no se pudo añadir, por favor vuelva a intentarlo')
        });

        
    }

    verificar(){
        this.posible = this.apiService.verificarCupo(this.registros, this.cupo);
        console.log(this.posible)
    }

}