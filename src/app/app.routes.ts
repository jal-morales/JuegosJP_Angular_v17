import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '',redirectTo:'/home', pathMatch:'full'},
    {path: 'home',component:HomeComponent},

    {path: 'contacto',component:ContactoComponent},
    {path: 'login',component:LoginComponent},
  



    {path: '**', redirectTo:'/home'}


];
