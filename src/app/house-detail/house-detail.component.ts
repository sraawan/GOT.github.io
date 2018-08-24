import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServeService } from '../http-serve.service';
@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  public houseId:any= [];

  constructor(public _route:ActivatedRoute,public _http:HttpServeService) { }

  ngOnInit() {
    let houseId = this._route.snapshot.params['houseId'];
       console.log(houseId);

    this._http.getSingleHouseInformation(houseId).subscribe(
      data=>{
        console.log("loading....");
          this.houseId=data;
          console.log("id:",this.houseId);
      }
    )
  }

}
