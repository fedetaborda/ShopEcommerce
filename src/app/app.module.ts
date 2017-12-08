import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from "./app.routes";

//componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { UserComponent } from './components/user/user.component';

//service
import { ProductosService } from './services/productos.service';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BarraLateralComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
