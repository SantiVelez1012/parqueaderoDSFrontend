import { Injectable } from "@angular/core";
import { timer, Observable, Subject } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Injectable({
    providedIn:'root'
})

export class clockValue {
    hora!: number;
    minutos!: string;
    segundos!:string;
}


export class SecondService{
    clock:Observable <Date>;
    infofecha$ = new Subject<clockValue>();
    cv!:clockValue;
    horas!:number;

    constructor(){
        this.clock = timer(0,1000).pipe(map(t => new Date()),shareReplay(1));
    }

    getInfoClock(): Observable<clockValue>{
        this.clock.subscribe(t=>{
            this.horas = t.getHours();
            this.cv = {
                hora:this.horas,
                minutos:( t.getMinutes() < 10) ? '0' + t.getMinutes() : t.getMinutes().toString(),
                segundos: t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds().toString()
            }
            this.infofecha$.next(this.cv);
        });
        return this.infofecha$.asObservable();
    }
}