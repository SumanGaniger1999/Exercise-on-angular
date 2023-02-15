import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   

   personData:Array<any>=[];

  constructor(private ApiService:ApiService) {
    this.ApiService.getAllPersons().subscribe(
      (responce)=>{
        // console.log(responce)
        this.personData=responce;
      }
    )
   }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
  }

}
