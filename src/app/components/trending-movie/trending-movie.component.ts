import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-trending-movie',
  templateUrl: './trending-movie.component.html',
  styleUrls: ['./trending-movie.component.css']
})
export class TrendingMovieComponent implements OnInit {
  


  movieTrending;
  constructor(private movieService:MovieService){}
  ngOnInit(){
    this.getTrending();
  }


  getTrending():void{
    //console.log('movie-detail');
    this.movieService.getTrending().subscribe(movie => this.movieTrending=movie.results);
  }
  

}
