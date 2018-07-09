import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginModuleService } from './services/login-module.service';
import { Routing } from './app.routing';
import { HttpModule} from '@angular/http';
import { VerifyComponent } from './verify/verify.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    VerifyComponent,
    WelcomeComponent,
    ForgetPasswordComponent    
  ],
  imports: [
    BrowserModule,Routing,FormsModule,HttpModule
  ],
  providers: [LoginModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
