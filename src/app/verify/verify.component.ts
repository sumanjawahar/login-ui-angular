import { Component, OnInit } from '@angular/core';
import { LoginModuleService } from '../services/login-module.service';
import { Observable} from 'rxjs/Observable'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  
  token:any={};
  message: any={};
    
  constructor(private  loginmoduleservice : LoginModuleService , private route : Router ,private aroute : ActivatedRoute) { }

  ngOnInit() {
    //console.log(this.aroute.params);

    this.aroute.params.subscribe(tokenfromurl => { this.token = tokenfromurl.token });

 

    this.loginmoduleservice.verify(this.token)
    .subscribe(
      tokenverify => {
        this.message = tokenverify;

        console.log(this.message.status);
        if(tokenverify.status == 'success'){
          
        this.route.navigate(['']);
        }
        else{
          

        }
        
      },
      error =>{
     
      }
   );

  }

}
