import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private favoriteService: FavoriteService) { }
  str; public movieCollection = [];
  sendmovcol() {
    return this.movieCollection;
  }
  ngOnInit() {
    this.showCollection();
  }
  // showfav(){
  //   console.log(localStorage.getItem('id'));
  // }
  showCollection(): void {
    this.str = localStorage.getItem('id');
    let collection: Array<string>;
    collection = this.str.split(',');
    collection.forEach(movieId => this.favoriteService.getEachCollection(movieId).subscribe(movie => this.movieCollection.push(movie)));
  }

  deleteId(id: any): void {
    // console.log(this.movieCollection);
    // if (this.movieCollection.length) {
    // for (let item in this.movieCollection) {
    //   if (this.movieCollection[item].id === id) {
    //     this.movieCollection.splice(yy, 1); break;
    //   }
    //   yy += 1;
    // }}

    this.movieCollection.forEach((item, index) => {
      if (this.movieCollection[index].id === id) {
        this.movieCollection.splice(index, 1);
      }
    });



  }



}
