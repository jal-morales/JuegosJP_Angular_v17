import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';


export const routes: Routes = [
    {path: '',redirectTo:'/home', pathMatch:'full'},
    {path: 'home',component:HomeComponent},

    {path: 'contacto',component:ContactoComponent},
    {path: 'login',component:LoginComponent},
    {path: 'register-user',component:RegisterUserComponent},



    {path: '**', redirectTo:'/home'}


];
