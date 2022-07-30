import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { TokenService } from 'src/app/service/token.service';
import { Sebastian } from '../sebastian.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  sebastian:Sebastian[]=[];
  constructor(private router:Router,public service:ServiceService,public tokenService:TokenService) { }
  toggle:boolean=false;
  isLogged=false;

  ngOnInit(): void {
    this.service.getAllPersons()
    .subscribe(data=>{
      this.sebastian=data;

    })
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }
    else{
      this.isLogged=false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
  


  inicio(){
    this.router.navigate(["inicio"])
  }
  login(){
    this.router.navigate(["login"])
  }
  registrarse(){
    this.router.navigate(["registrarse"])
  }
  proyectos(){
    this.router.navigate(["estudios"])
  }
  editar(){
    this.router.navigate(["editar"])
  }
  contacto(){
    this.router.navigate(["contacto"])
  }
  desplegar(){
    if(this.toggle==true){
      this.toggle=false
    }
    else{
      this.toggle=true
    }
  }
}
