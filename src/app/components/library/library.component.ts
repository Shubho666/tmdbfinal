import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private favoriteService:FavoriteService) { }
  str;movieCollection=[];
  ngOnInit() {
    this.showCollection();
  }
  // showfav(){
  //   console.log(localStorage.getItem('id'));
  // }
  showCollection():void{
    this.str=localStorage.getItem('id');
    let collection:Array<string>;
    collection=this.str.split(',');
    collection.forEach(movieId=>this.favoriteService.getEachCollection(movieId).subscribe(movie=>this.movieCollection.push(movie)));
  }

  

}
