import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public service:AppService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.reset_session();
    this.router.navigateByUrl('/login');
  }

  

}
