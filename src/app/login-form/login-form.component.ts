import { Component, OnInit } from '@angular/core';
import { LoginModuleService } from '../services/login-module.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user : any = {} ;
  message : any = {};

  constructor(private loginModuleService : LoginModuleService , private route : Router) { }

  ngOnInit() {
  }

  loginUser(){
    console.log('clicked login user');
    console.log(this.user);
    this.loginModuleService.login(this.user).subscribe(
      success => {
        this.message = success;
        console.log(success);
        if(success.status == 'success' && success.jwt.token)
          {
            localStorage.setItem('currentUser', JSON.stringify(success.jwt));                        
            this.route.navigate(['welcome']);
          }
          else{

          }
      }
    )
  }
  


  navigateregister(){
    this.route.navigate(['register']);

  }

}
