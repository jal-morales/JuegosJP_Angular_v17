import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { response } from 'express';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  //HTTP Options son los que nos permite trabajar con headers los cuales cuales vamos a necesitar para 
//trabajar con APIREST
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //lo que va despues de beared es el tocken que nos brindaFirebase para acceder a la api.. https://firebasestorage.googleapis.com/v0/b/jsonduoc.appspot.com/o/user.json?alt=media&token=37909f88-488d-41ff-8a61-b694d52314f9
      'Authorization': 'Bearer 37909f88-488d-41ff-8a61-b694d52314f9'
    })
  }
  private jsonUrl='https://firebasestorage.googleapis.com/v0/b/jsonduoc.appspot.com/o/user.json?alt=media&token=37909f88-488d-41ff-8a61-b694d52314f9';
  private lista:any;

  constructor(private http:HttpClient){}

    getJsonData():Observable<any>{
      return this.http.get(this.jsonUrl);
    }
  
    //creando metodo listaPersona para traer la data del json que se encuentra en Firebase
  MetodoPersona(listaPersona:any){
    console.log(listaPersona);
    this.http.post(this.jsonUrl, listaPersona,this.httpOptions).subscribe(
      response=>{
        console.log('Archivo json sobrescrito con exito', response);
      },
      error=>{
        console.error('Error al sobrescribir el archivo json ',response);
      })
  
  }

  

}