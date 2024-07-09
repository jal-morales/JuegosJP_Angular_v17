import { Component } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})



export class RegisterUserComponent {
FormularioEnviado: String='No se ha enviado nada, este es una prueba unitaria';
nombre:String ="";
usuario:String ="";
password:String ="";
password2:String ="";
correo:String="";
telefono:String="";


  registerUserArray:Usuario[]=[
    { usuario:"jlopez", password:"12354"},
  ];

}
