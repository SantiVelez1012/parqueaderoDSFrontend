import { Injectable } from "@angular/core";



@Injectable({
    providedIn:'root'
})


export class FechaService{

    processDate(){
        let hoy = new Date();
        var fecha = `${hoy.getMonth() + 1}-${hoy.getDate()}-${hoy.getFullYear()} ${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`;
        return fecha
    }

    showDate(date:string){
        date = date.replace("T"," ");
        date = date.replace("Z"," ");
        return date;
    }

}