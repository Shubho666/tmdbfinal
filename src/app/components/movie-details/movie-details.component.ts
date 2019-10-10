import { Component, OnInit } from '@angular/core';
import {DescriptionService} from '../../services/description.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDescription; str;
  constructor(private descriptionService: DescriptionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.descriptionService.getDescription(this.route.snapshot.paramMap.get('movieId')).subscribe(movie => this.movieDescription = movie);
    // gets the movieId from link and fetches the details

  }
  // addCollection(): void {
  //   if (localStorage.length) {
  //   this.str = localStorage.getItem('id');
  //   let collection: Array<string>;
  //   collection = this.str.split(','); let y = 0;
  //   for (const item in collection) {
  //     if (collection[item] === this.movieDescription.id) {y = 1; break; }
  //   }
  //   if (y === 0) {collection.push(this.movieDescription.id); }
  //   this.str = collection.toString();
  //   localStorage.setItem('id', this.str);
  //   } else {
  //     localStorage.setItem('id', this.movieDescription.id);
  //   }
  // }

  addCollection(): void {
    if (localStorage.length) {
    this.str = localStorage.getItem('id');
    let collection: Array<string>;
    collection = this.str.split(','); let y = 0;
    for (const item in collection) {

      if (collection[item] === (JSON.stringify(this.movieDescription.id))) {y = 1; break; }
    }
    if (y === 0) {collection.push(this.movieDescription.id); }
    this.str = collection.toString();
    localStorage.setItem('id', this.str);
    } else {
      // console.log(this.movieDescription);
      localStorage.setItem('id', this.movieDescription.id);
    }
  }

}
