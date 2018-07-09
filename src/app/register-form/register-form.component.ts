import { Component, OnInit } from '@angular/core';
import { LoginModuleService } from '../services/login-module.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private loginModuleService : LoginModuleService , private route : Router) { }

  user : any = {} ;

  ngOnInit() {
    
    
  }

  registerUser(){

    

    console.log(this.user);
    this.loginModuleService.register(this.user).subscribe(
      success => { 
       // alert(success.message);
        this.route.navigate(['']);
      }
    )
  }

  navigatelogin(){
    this.route.navigate(['']);

  }
    
}
