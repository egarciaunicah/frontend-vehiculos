import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { AppService } from './app.service';
import { GetVehiculosComponent } from './views/get_vehiculos/get_vehiculos.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { MenuComponent } from './views/menu/menu.component';
import { LoginGuard } from './app.loginguard';

@NgModule({
  declarations: [
    AppComponent,
    GetVehiculosComponent,
    LoginComponent,
    UsuariosComponent,
    MenuComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
