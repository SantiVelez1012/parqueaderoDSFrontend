import { Component, OnInit } from '@angular/core';
import { SecondService, clockValue } from 'src/app/services/clock.service';
import { Observable } from 'rxjs';


@Component({
    selector:'app-clock',
    templateUrl:'./clock.component.html',
    styleUrls:['./clock.component.css']
})

export class ClockComponent implements OnInit {

    datos$!:Observable<clockValue>;
    hora!:number;
    minutos!:string;
    segundos!:string;

    constructor(private segundo : SecondService){ }

    ngOnInit(){
        this.datos$ = this.segundo.getInfoClock();
        this.datos$.subscribe(x => {
            this.hora = x.hora
            this.minutos = x.minutos
            this.segundos = x.segundos
        });
        
    }
}