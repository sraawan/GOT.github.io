import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServeService } from '../http-serve.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  public BooksId:any=[];

  constructor(public _route:ActivatedRoute,public _http:HttpServeService) { }

  ngOnInit() {
    
    let booksId = this._route.snapshot.params['booksId']
    console.log(booksId);


    this._http.getSingleBookInformation(booksId).subscribe(
      data=>{
        console.log("loading Data...");
        this.BooksId=data;
        console.log(this.BooksId);
        
      }

    )



        
  }

}
