import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.carData=data
      }
    )
  }
   
  

  carData:any={}

  ngOnInit(): void {
  }

}
