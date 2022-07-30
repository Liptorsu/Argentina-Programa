import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { BotonesService } from './service/botones.service';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { ServiceService } from './service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './component/editar/editar.component';
import { interceptorProvider } from './interceptor-service';
import { ContactosComponent } from './component/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
    ProyectosComponent,
    EditarComponent,
    ContactosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ BotonesService,ServiceService,interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
