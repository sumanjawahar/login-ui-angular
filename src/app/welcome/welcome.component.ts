import { Component, OnInit } from '@angular/core';
import { LoginModuleService } from '../services/login-module.service';
import { Observable} from 'rxjs/Observable'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message :  any ={}

  constructor(private loginModuleService:LoginModuleService, private route : Router) { }

  ngOnInit() {

    this.loginModuleService.welcome().subscribe(
      success => { 
       // alert(success.message);
       console.log(success);
       this.message = success;
        
      }
    )

  }

}
