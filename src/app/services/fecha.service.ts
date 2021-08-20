import { Injectable } from "@angular/core";



@Injectable({
    providedIn:'root'
})


export class FechaService{

    processDate(){
        let hoy = new Date();
        var fecha = `${hoy.getMonth() + 1}-${hoy.getDay}-${hoy.getFullYear} ${hoy.getHours}:${hoy.getMinutes}:${hoy.getSeconds}`;
        return fecha
    }

}