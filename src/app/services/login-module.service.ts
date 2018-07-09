import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers } from '@angular/http';


@Injectable()
export class LoginModuleService {

  constructor(private http : Http) { }

  register(registerdata) {
    return this.http.post('http://localhost:3000/register/', registerdata, this.jwt()).map((response:Response) => response.json());
    
  }

  verify(token){
    return this.http.get('http://localhost:3000/verify/' + token,  this.jwt()).map((response:Response) => response.json());
  }

  login(logindata){
    console.log('logindata', logindata);
    return this.http.post('http://localhost:3000/login', logindata, this.jwt()).map((response:Response) => response.json());
  }
  
  welcome(){
    return this.http.get('http://localhost:3000/welcome',this.jwt()).map((response:Response) => response.json());
  }


  private jwt() {
    
            // create authorization header with jwt token
    
            let loginuser = JSON.parse(localStorage.getItem('currentUser'));
             if ( loginuser && loginuser.token) {
                let headers = new Headers({ 'Authorization': 'Bearer ' + loginuser.token });
                headers.append('Content-Type', 'application/json');  
                return new RequestOptions({ headers:headers });
    
            }
    
        }

}
