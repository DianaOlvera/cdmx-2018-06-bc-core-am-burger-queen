import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterComponent } from './componentes/register/register.component';
import { PrivatePageComponent } from './componentes/private-page/private-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { BreakfastComponent } from './componentes/breakfast/breakfast.component';
import { DinnerComponent } from './componentes/dinner/dinner.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    PrivatePageComponent,
    NotFoundPageComponent,
    HomePageComponent,
    BreakfastComponent,
    DinnerComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
