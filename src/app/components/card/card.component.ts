import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Router} from '@angular/router';

import {LibraryComponent} from './../library/library.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router) { }
  @Input() movie; str;
  @Input() flag;
  @Input() flag1;
  @Input() flagcard;
  @Output() someEvent = new EventEmitter<string>();
  ngOnInit() {
  }
  movieDetails() {
    // console.log('card working');
    this.router.navigate(['/movie-details/' + this.movie.id]); // on being clicked goes to the specified router link

  }
  // cout(){
  //   LibraryComponent.movieCollection;
  //   console.log(this.libcom.movieCollection);
  // }


  addCollection(): void {
    if (localStorage.length) {
    this.str = localStorage.getItem('id');
    let collection: Array<string>;
    collection = this.str.split(','); let y = 0;
    for (const item in collection) {

      if (collection[item] === (JSON.stringify(this.movie.id))) {y = 1; break; }
      // console.log(typeof(collection[item]));
      // console.log(typeof(JSON.stringify(this.movie.id)));
    }
    if (y === 0) {collection.push(this.movie.id); }
    this.str = collection.toString();
    localStorage.setItem('id', this.str);
    } else {
      console.log(this.movie);
      localStorage.setItem('id', this.movie.id);
    }
  }





  // addCollection(): void {
  //   if (localStorage.length) {
  //   this.str = localStorage.getItem('id');
  //   let collection: Array<any>;
  //   collection = this.str.split(';;;'); let y = 0;
  //   // console.log('-jijhfiuhfoskdfskhfkjdfhskhdfksldf-');
  //   for (const item in collection) {
  //     // console.log("item:"+collection[item]);console.log("movie"+JSON.stringify(this.movie));
  //     if ( collection[item] == JSON.stringify(this.movie)) {y = 1; break; }
  //   }
  //   if (y == 0) {localStorage.setItem('id', this.str + ';;;' + JSON.stringify(this.movie)); }
  //   } else {
  //     // console.log(this.movie);
  //     localStorage.setItem('id', JSON.stringify(this.movie));
  //   }
  // }







  deleteCollection(): void {

    this.str = localStorage.getItem('id');
    let collection: Array<string>;
    collection = this.str.split(',');
    let index = -1;
    collection.forEach(movieId => {
      index++;
      if (movieId === (this.movie.id).toString()) {
        // console.log(typeof(movieId));console.log(typeof(this.movie.id));
        collection.splice(index, 1);
      }
    });
    this.str = collection.toString();
    localStorage.setItem('id', this.str);

    this.someEvent.next(this.movie.id);

    // this.flagcard = false;


  }

}
