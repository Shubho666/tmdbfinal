import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css']
})
export class PopularMovieComponent implements OnInit {

  constructor(private movieService:MovieService ) { }

  ngOnInit() {
    this.getPopular();
  }
  moviePopular;
  getPopular():void{
    console.log('popular');
    this.movieService.getPopular().subscribe(movie => this.moviePopular=movie.results);
    
  }

}
