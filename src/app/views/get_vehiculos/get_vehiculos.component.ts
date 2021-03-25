import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';

@Component({
    selector: 'get_vehiculos',
    templateUrl: './get_vehiculos.component.html'
})

export class GetVehiculosComponent{
 public listado_vehiculos: any[];

 public Vehiculo = {
     placa:"",
     color:"",
     marca:"",
     modelo:""
 }

 constructor(public service:AppService){
     this.listado_vehiculos = [];
 }
 
 ngOnInit(){
     this.get_vehiculos();
 }

 get_vehiculos(){
     var response;
     this.service.get_vehiculos().subscribe(
         data=>response=data,
         err => {
             console.log("Error al consultar el servicio");
         },
         ()=>{            
             this.listado_vehiculos = response;
         }
     )

 }


 insert_vehiculo(){
    var response;
    this.service.insert_vehiculo(this.Vehiculo).subscribe(
        data=>response=data,
        err => {
            console.log("Error al consultar el servicio");
        },
        ()=>{            
            this.Vehiculo = {
                placa:"",
                color:"",
                marca:"",
                modelo:""
            }
            this.get_vehiculos();
        }
    )
 }

 getDatosVehiculosForm(v){
     this.Vehiculo = {
         placa: v.placa,
         color: v.color,
         marca: v.marca,
         modelo: v.modelo
     }
 }

 update_vehiculo(){
    var response;
    this.service.update_vehiculo(this.Vehiculo).subscribe(
        data=>response=data,
        err => {
            console.log("Error al consultar el servicio");
        },
        ()=>{            
            this.Vehiculo = {
                placa:"",
                color:"",
                marca:"",
                modelo:""
            }
            this.get_vehiculos();
        }
    )

 }

 delete_vehiculo(placa){
    var response;
    var load={
        placa:placa
    }
    this.service.delete_vehiculo(load).subscribe(
        data=>response=data,
        err => {
            console.log("Error al consultar el servicio");
        },
        ()=>{            
            this.get_vehiculos();
        }
    )
 }
 
}
