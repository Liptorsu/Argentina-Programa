import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './component/contactos/contactos.component';
import { EditarComponent } from './component/editar/editar.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { LoginComponent } from './component/login/login.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:InicioComponent},
  {path:'inicio',component:InicioComponent},
  {path:'estudios',component:ProyectosComponent},
  {path:'editar',component:EditarComponent},
  {path:'contacto',component:ContactosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
