import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './componentes/home-page/home-page.component';
import {LoginComponent} from './componentes/login/login.component';
import {RegisterComponent} from './componentes/register/register.component';
import {PrivatePageComponent} from './componentes/private-page/private-page.component';
import {BreakfastComponent} from './componentes/breakfast/breakfast.component';
import {DinnerComponent} from './componentes/dinner/dinner.component';
import {PedidosComponent} from './componentes/pedidos/pedidos.component';
import {NotFoundPageComponent} from './componentes/not-found-page/not-found-page.component';



const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'private', component: PrivatePageComponent},
  {path: '****', component: BreakfastComponent},
  {path: '***', component: DinnerComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: '**', component: NotFoundPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
