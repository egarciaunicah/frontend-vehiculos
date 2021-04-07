import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {CommonModule} from '@angular/common'
import {GetVehiculosComponent} from './views/get_vehiculos/get_vehiculos.component';
import {LoginComponent} from './views/login/login.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { MenuComponent } from './views/menu/menu.component';
import { LoginGuard } from './app.loginguard';

const routes: Routes = [
    {
        path: 'listado_vehiculos',
        component: GetVehiculosComponent,
        canActivate:[LoginGuard]
    },
    
    {
	    path: 'login',
	 component: LoginComponent
    },
    {
	 path: 'usuarios',
	 component: UsuariosComponent,
     canActivate:[LoginGuard]
    },
    {
        path: 'menu',
        component: MenuComponent,
        canActivate:[LoginGuard]
    },
    {
        path: '**',
        component: LoginComponent
    },

];

@NgModule({
    imports:[CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule{}

