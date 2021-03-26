import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormControlDirective } from '@angular/forms';
import swal from 'sweetalert2'
import { AppService } from '../../app.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnDestroy {
  
  @ViewChild('login_form') login_form: FormControlDirective;
  public submitted = false;
  public loading = false;
  public login_data = {
    username: "",
    password: ""
  }

  constructor(public service: AppService, private router: Router) {
  }

  ngOnDestroy() {
  }

  login() {
    if (this.login_form.valid) {
      this.submitted = false;
      this.loading = true;
      var response;
      var load = {
        username: this.login_data.username,
        password: this.login_data.password
      };
      this.service.login(load).subscribe(
        data => response = data,
        err => {
          if (err.status == 400) {
            swal.fire({
              title: 'Error de Autenticación,Las credenciales proporcionadas son incorrectas',
              icon: 'error'
            });
          } else {
            swal.fire({
              title: 'Error interno del servidor',
              icon: 'error'
            });
          }
          this.loading = false;
        },
        () => {
          try {
            if (response) {
              //this.service.set_usuarioLogueado(this.login_data.username);
              this.service.set_session(response);
              this.router.navigateByUrl('/listado_vehiculos');
            } else {
              swal.fire({
                title: 'Error interno del servidor',
                icon: 'error'
              });
              this.loading = false;
            }
            this.loading = false;
          } catch (error) {
            swal.fire({
              title: 'Error interno del servidor',
              icon: 'error'
            });
            this.loading = false;
          }
        }
      );
    } else {
      this.submitted = true;
    }
  }
}
