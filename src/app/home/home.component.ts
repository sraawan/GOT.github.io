import { Component, OnInit } from '@angular/core';
import { HttpServeService } from '../http-serve.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Books:any=[];
  public allData:any =[];
  public urlApi:any=[];
  public id:any;
  public char:any =[];
  public getAllBooks:any=[];
  
  constructor(public _http:HttpServeService,public _route:ActivatedRoute) { }

  ngOnInit(){   
    //--book Data
    this._http.getBookApi().subscribe(
      data =>{
    this.allData=this.allData.concat(data);
    console.log("books:" ,this.allData)
      });
      //--chacter data
    this._http.getChaApi().subscribe(
        data =>{
          this.allData=this.allData.concat(data);
          console.log("All Details :",this.allData);
        });
    this._http.getHouseApi().subscribe(
      data=>{
        this.allData=this.allData.concat(data);
        console.log("house:",this.allData);
      }
    )
    
   
    
      }
      public getBooks() {
        this._http.getBookApi().subscribe(
          data => {
            this.allData = data
          });
    }
    public getCha() {
      this._http.getChaApi().subscribe(
        data => {
          this.allData = data
        });
  }
  public getHouse() {
    this._http.getHouseApi().subscribe(
      data => {
        this.allData = data
      });
}
  
  }