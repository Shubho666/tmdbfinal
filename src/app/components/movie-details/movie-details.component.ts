import { Component, OnInit } from '@angular/core';
import {DescriptionService} from '../../services/description.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDescription; 
  constructor(private descriptionService:DescriptionService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.descriptionService.getDescription(this.route.snapshot.paramMap.get('movieId')).subscribe(movie => this.movieDescription=movie);
    
  }

}
