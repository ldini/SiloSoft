import { Component, OnInit } from '@angular/core';
import { Silo } from '../models/silo';

@Component({
    selector : 'silos',
    templateUrl : './silos.component.html'
})

export class SilosComponent implements OnInit{

    public silos_contenedor: Array<Silo>; 
    public titulo: string;

    constructor(){
        this.silos_contenedor = [
            new Silo('1','ON',33),
            new Silo('2','OFF',0),
            new Silo('3','ON',55),
            new Silo('4','ON',34),
            new Silo('5','ON',25),
            new Silo('6','OFF',0),
            new Silo('7','ON',33)
        ];
    }

    ngOnInit(){
        console.log(this.silos_contenedor);
    }

}
