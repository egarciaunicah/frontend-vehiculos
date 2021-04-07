import { importType } from '@angular/compiler/src/output/output_ast';
import {Injectable} from '@angular/core';
import { AppService } from './app.service';
import { CanActivate, Router} from '@angular/router'


@Injectable()
export class LoginGuard implements CanActivate {
    constructor(public router: Router, private service: AppService){}

    canActivate():boolean {
        if(this.service.get_vehiculos()){
            if(this.service.get_session().token){
                return true
            }
        } else {
            this.service.reset_session();
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}