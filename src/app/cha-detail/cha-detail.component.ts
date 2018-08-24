import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServeService } from '../http-serve.service';

@Component({
  selector: 'app-cha-detail',
  templateUrl: './cha-detail.component.html',
  styleUrls: ['./cha-detail.component.css']
})
export class ChaDetailComponent implements OnInit {
  public chaId:any=[];

  constructor(public _route:ActivatedRoute,public _http:HttpServeService) { }

  ngOnInit() {
    let chaId = this._route.snapshot.params['chaId']
    console.log(chaId);

    this._http.getSingleChaInformation(chaId).subscribe(
        data=>{
          console.log("Loading...");
          this.chaId=data;
          console.log("cha:",this.chaId)
        }
    )
  }

}
