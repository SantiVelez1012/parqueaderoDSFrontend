import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector:'app-informe',
    templateUrl:'./informe.component.html',
    styleUrls:['./informe.component.css']
})

export class InformeComponent implements OnInit {
    constructor(private router:Router, private activatedRoute:ActivatedRoute){

    }

    ngOnInit(){
        let placa = this.activatedRoute.snapshot.paramMap.get('placa');
        console.log(placa);
    }
}