import { Injectable, ViewEncapsulation } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Vehiculo } from "../models/vehiculo";

@Injectable({
    providedIn: 'root'
})

export class VehiculoService{
    private baseEndPoint = 'http://localhost:3000/api/vehiculos';
    private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http:HttpClient) { }

    public getAll(): Observable<Vehiculo[]>{
        return this.http.get<Vehiculo[]>(`${this.baseEndPoint}`);
    }

    public getByPlaca(placa:string): Observable<Vehiculo>{
        return this.http.get<Vehiculo>(`${this.baseEndPoint}/${placa}`);
    }

    public entryVehiculo(vehiculo:Vehiculo): Observable<any>{
        return this.http.post<any>(`${this.baseEndPoint}/entry`,vehiculo,{headers:this.cabeceras});
    }

    public exitVehiculo(placa:string, fechaSalida:Object): Observable<Vehiculo>{
        return this.http.post<Vehiculo>(`${this.baseEndPoint}/${placa}`,fechaSalida, {headers:this.cabeceras});
    }

    public updateTime(placa:string): Observable<any>{
        return this.http.post<any>(`${this.baseEndPoint}/actualizarTime/${placa}`, null);
    }

    public getTime(placa:string):Observable<any>{
        return this.http.get<any>(`${this.baseEndPoint}/getTiempo/${placa}`);
    }

    public setCapacidad(capacidad:Object):Observable<any>{
        return this.http.post<any>(`${this.baseEndPoint}/cupos/set`, capacidad, {headers:this.cabeceras});
    }

    public getCapacidad():Observable<number>{
        return this.http.get<number>(`${this.baseEndPoint}/cupos/get`);
    }

}