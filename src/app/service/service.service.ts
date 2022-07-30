import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { Sebastian } from '../component/sebastian.model';
import { Estudios } from '../component/estudios.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  Url='https://argportafolio.herokuapp.com/api/sebastian';
  //Url= 'http://localhost:8080/api/sebastian';

  getAllPersons(){
    return this.http.get<Sebastian[]>(this.Url+'/all');
  }
  updatePerson(id:string,nombre:string,apellido:string,descripcion:string){
    let obj = {id,nombre,apellido,descripcion}
    return this.http.put<Sebastian>(this.Url,obj)
  }
  
  getAllEstudios(){
    return this.http.get<Estudios[]>(this.Url+'/estudios/all');
  }
  updateEstudios(id:number,titulo:string,anio:string,establecimiento:string){
    let obj = {id,titulo,anio,establecimiento}
    return this.http.put<Estudios>(this.Url+'/estudios/',obj);
  }

  saveEstudio(titulo:string,anio:string,establecimiento:string){
    let obj = {titulo,anio,establecimiento}
    return this.http.post<Estudios>(this.Url+'/estudios',obj) 
  }
  
  getEstudiosByID(id:string):Observable<Estudios>{
    return this.http.get<Estudios>(this.Url+'/'+id);
  }
  removeEstudio(id:string){
    return this.http.delete<Estudios>(this.Url +'/estudios/'+ id)
  }
}
