import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {CommonModule} from '@angular/common'
import {GetVehiculosComponent} from './views/get_vehiculos/get_vehiculos.component';

const routes: Routes = [
    {
        path: 'listado_vehiculos',
        component: GetVehiculosComponent
    },
];

@NgModule({
    imports:[CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule{}

