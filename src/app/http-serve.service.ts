import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class HttpServeService {

  public booksId='/books/1'
  public basicUrl:any ='https://anapioficeandfire.com/api';
  public chId:any = '/characters/1';
  public houseId= '/houses/378'
  public allBooks='/books';
  public allCha='/characters';
  public allHouse= '/houses'
  
  constructor(public _http:HttpClient) { }

public getBookApi():any{
  let response= this._http.get(this.basicUrl+this.allBooks);
  console.log(response);
  return (response);

}
public getChaApi():any{
  let cha = this._http.get(this.basicUrl+this.allCha);
  console.log("ch:"+cha);
  return(cha);
}

public getHouseApi():any{
  let house = this._http.get(this.basicUrl+this.allHouse);
  console.log("house:"+house);
  return(house);
}

public getSingleBookInformation(booksId):any{
  let myResponseOfBooks = this._http.get(this.basicUrl+'/'+ booksId)
  return myResponseOfBooks;
}
public getSingleChaInformation(chaId):any{
  let myResponseOfCha = this._http.get(this.basicUrl+'/'+ chaId)
  return myResponseOfCha;

}
public getSingleHouseInformation(houseId):any{
  let myResponseOfhouse=this._http.get(this.basicUrl+'/'+ houseId)
  return myResponseOfhouse;

}
}


