import { Component, OnInit, DoCheck } from '@angular/core';
import {SearchService} from '../../services/search.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, DoCheck {

  movieSearch; query: string;
  constructor(private searchService: SearchService, private route: ActivatedRoute) {}
  ngOnInit() {
    // this.getTrending();
    // console.log(this.route.snapshot.paramMap.get('searchQuery'));

    this.query = this.route.snapshot.paramMap.get('searchQuery');
    this.searchService.getSearch(this.route.snapshot.paramMap.get('searchQuery')).subscribe(movie => this.movieSearch = movie.results);

  }
  ngDoCheck(): void {
    // console.log(this.route.snapshot.paramMap.get('query'),this.query);
     if (this.query !== this.route.snapshot.paramMap.get('searchQuery')) {
       console.log('done');
       this.query = this.route.snapshot.paramMap.get('searchQuery');
       this.searchService.getSearch(this.route.snapshot.paramMap.get('searchQuery')).subscribe(movie => this.movieSearch = movie.results);

     }
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
