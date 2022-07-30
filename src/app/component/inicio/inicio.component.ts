import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BotonesService } from 'src/app/service/botones.service';
import { ServiceService } from 'src/app/service/service.service';
import { Sebastian } from '../sebastian.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  sebastian:Sebastian[]=[];

  constructor(public boton:BotonesService, public service:ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.service.getAllPersons()
    .subscribe(data=>{
      this.sebastian=data;

    })
  }
  siguiente:boolean=true;
 
  next(){
    if(this.siguiente == true){
      this.siguiente=false
    }
    else{
      this.siguiente=true
    }
  }
  getAllSebastian(){
    this.service.getAllPersons().subscribe(response=>{
      return this.sebastian= response;
    })
  }
}
