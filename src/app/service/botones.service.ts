import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BotonesService {

  constructor() { }

  toogle(p:boolean){
    console.log(p)
    if (p === false){
      return p = true
    }
    else{
       return p = false
    }
  }
}
