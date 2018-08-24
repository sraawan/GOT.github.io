import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { HttpServeService } from './http-serve.service';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksComponent } from './books/books.component';
import { ChaDetailComponent } from './cha-detail/cha-detail.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    BooksComponent,
    ChaDetailComponent,
    HouseDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'books/:booksId',component:BookDetailComponent},
      {path:'cha/:chaId',component:ChaDetailComponent},
      {path:'house/:houseId',component:HouseDetailComponent}
    ])
  ],
  providers: [HttpServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
