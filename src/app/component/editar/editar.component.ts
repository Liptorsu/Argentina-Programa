import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BotonesService } from 'src/app/service/botones.service';
import { ServiceService } from 'src/app/service/service.service';
import { Estudios } from '../estudios.model';
import { Sebastian } from '../sebastian.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  sebastian:Sebastian[]=[]
  estudio:Estudios[]=[]
  nombre:FormControl =new FormControl('')
  apellido:FormControl =new FormControl('')
  descripcion:FormControl =new FormControl('')
  titulo:FormControl =new FormControl('')
  anio:FormControl =new FormControl('')
  id:FormControl =new FormControl('')
  establecimiento:FormControl =new FormControl('')
  idd="1"
  tgl:boolean=true

  constructor(public service:ServiceService,private btn:BotonesService) {}

  ngOnInit(): void {
    
    this.service.getAllPersons()
    .subscribe(data=>{
      this.sebastian=data;

    })
  }

  getAllPersons(){
    this.service.getAllPersons().subscribe(response=>{
      return this.sebastian =response;
    } ) }
  updateSebastian(){
    let nombre=this.nombre.value
    let apellido=this.apellido.value
    let descripcion=this.descripcion.value
    this.service.updatePerson(this.idd,nombre,apellido,descripcion)
    .subscribe(()=>{
      this.getAllPersons()
      this.idd = "1"
      this.nombre.setValue("")
      this.descripcion.setValue("")
      this.apellido.setValue("")
    })
    location.reload()
  }

  getAllEstudios(){
    this.service.getAllEstudios().subscribe(response=>{
      return this.estudio =response;
    } ) }
  saveEstudio():void{
    let titulo = this.titulo.value;
    let anio= this.anio.value;
    let establecimiento= this.establecimiento.value;
    this.service.saveEstudio(titulo,anio,establecimiento)
    .subscribe(()=>{
    this.getAllEstudios()
    this.titulo.setValue("")
    this.anio.setValue("")
    this.establecimiento.setValue("")
    })
    location.reload()
  }
  updateEstudios(){
    let id=this.id.value;
   let titulo=this.titulo.value;
    let establecimiento=this.establecimiento.value;
    let anio=this.anio.value;
    if(this.id.value>1){
    this.service.updateEstudios(id,titulo,anio,establecimiento)
    .subscribe(()=>{
      this.getAllEstudios()
      this.id.setValue("")
      this.titulo.setValue("")
      this.anio.setValue("")
      this.establecimiento.setValue("")
    })
    location.reload()
  }
  else{
    console.log("No existe el estudio a editar.")
  }
  }
  toggle(){
    if(this.tgl==false){
      this.tgl=true
    }
    else{
      this.tgl=false
    }
  }
  
  removerEstudio(){
    this.service.removeEstudio(this.id.value).subscribe()
    location.reload()
  }
  }


