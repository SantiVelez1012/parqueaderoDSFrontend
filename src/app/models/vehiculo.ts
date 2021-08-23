export class Vehiculo{
    id!:number;
    placa!:string;
    fechaIngreso!:string;
    fechaSalida!:string;
    minutosParqueado!:number;
    estado!:boolean;

    constructor(placa:string, fechaIngreso:string){
        this.placa = placa;
        this.fechaIngreso = fechaIngreso;
    }

}