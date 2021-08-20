import { Injectable, ViewEncapsulation } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Vehiculo } from "../models/vehiculo";

@Injectable({
    providedIn: 'root'
})

export class VehiculoService{
    private baseEndPoint = 'http://localhost:3000/api';
    private cabeceras: HttpHeaders = new HttpHeaders({'Content-Tpe': 'application/json'});
    constructor(private http:HttpClient) { }

    public getAll(): Observable<Vehiculo[]>{
        return this.http.get<Vehiculo[]>(`${this.baseEndPoint}/vehiculos`);
    }

    public getByPlaca(placa:string): Observable<Vehiculo>{
        return this.http.get<Vehiculo>(`${this.baseEndPoint}/vehiculos/${placa}`);
    }

    public entryVehiculo(vehiculo:Vehiculo): Observable<Vehiculo>{
        return this.http.post<Vehiculo>(`${this.baseEndPoint}`,vehiculo,{headers:this.cabeceras});
    }

    public exitVehiculo(placa:string, fechaSalida:string): Observable<Vehiculo>{
        return this.http.post<Vehiculo>(`${this.baseEndPoint}/${placa}`,fechaSalida, {headers:this.cabeceras});
    }

    public updateTime(placa:string): Observable<Vehiculo>{
        return this.http.post<Vehiculo>(`${this.baseEndPoint}/actualizarTime/${placa}`, null);
    }

    public getTime(placa:string):Observable<Vehiculo>{
        return this.http.get<Vehiculo>(`${this.baseEndPoint}/getTiempo/${placa}`);
    }

}