import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonService } from '../../app/service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ ]
})
export class HomeComponent implements OnInit{
  
    productos:any[]=[];

    name:string ='';
    price:string ='';
    rating:string ='';  
    description:string =''; 
    image:string =''; 

    constructor(private jsonService:JsonService){}

    ngOnInit(): void {
        this.jsonService.getJsonData().subscribe(data=>{
          this.productos=data;
        })
    }
  
}
