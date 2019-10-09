import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movieSearch;
  constructor(private searchService:SearchService,private route: ActivatedRoute){}
  ngOnInit(){
    //this.getTrending();
    //console.log(this.route.snapshot.paramMap.get('searchQuery'));
    

    this.searchService.getSearch(this.route.snapshot.paramMap.get('searchQuery')).subscribe(movie => this.movieSearch=movie.results);
    
  }

  // loadsearch(){
  //   this.searchService.getSearch(this.route.snapshot.paramMap.get('searchQuery')).subscribe(movie => this.movieSearch=movie.results);
    
  // }

  // reloadwindow(){
  //   window.location.reload();
  // }
  // getSearch():void{
  //   console.log('woking');
  //   //this.movieService.getSearch(query).subscribe(movie => this.movieSearch=movie.results);
  // }
}
