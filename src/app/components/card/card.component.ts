import { Component, OnInit,Input } from '@angular/core';
import {MovieService}  from '../../services/movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private movieService: MovieService,private router:Router) { }
  @Input() movie;
  ngOnInit() {
  }
  movieDetails(){
    //console.log('card working');
    this.router.navigate(["/movie-details/"+this.movie.id]);

  }

}
