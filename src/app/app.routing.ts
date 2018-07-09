import { Router, RouterModule, Routes} from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { VerifyComponent } from './verify//verify.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const appRoutes:Routes = [
    
        {path:'', component: LoginFormComponent},
        {path:'register',component: RegisterFormComponent},
        {path:'verify/:token',component: VerifyComponent},
        {path: 'welcome', component: WelcomeComponent},
        {path: 'forgotpassword', component: ForgetPasswordComponent}
        
    ];
    
    export const Routing = RouterModule.forRoot(appRoutes);
