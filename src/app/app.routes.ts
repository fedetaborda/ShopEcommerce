import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from "./components/inicio/inicio.component";
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { UserComponent } from './components/user/user.component';


const APP_ROUTES: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'users', component: UserComponent },
  { path: 'lateral', component: BarraLateralComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{ useHash:true });
