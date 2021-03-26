import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {CommonModule} from '@angular/common'
import {GetVehiculosComponent} from './views/get_vehiculos/get_vehiculos.component';
import {LoginComponent} from './views/login/login.component';

const routes: Routes = [
    {
        path: 'listado_vehiculos',
        component: GetVehiculosComponent
    },
    
    {
	    path: 'login',
	 component: LoginComponent
    },


];

@NgModule({
    imports:[CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule{}

