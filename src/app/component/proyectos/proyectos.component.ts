import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Estudios } from '../estudios.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  estudios:Estudios[]=[]
  constructor(public service:ServiceService) { }

  ngOnInit(): void {
    
    this.service.getAllEstudios()
    .subscribe(data=>{
      this.estudios=data;

    })
  }
  
  getAllEstudios(){
    this.service.getAllEstudios().subscribe(response=>{
      return this.estudios= response;
    })
  }

}
