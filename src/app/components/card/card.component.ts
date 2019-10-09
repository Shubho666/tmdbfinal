import { Component, OnInit, Input } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router) { }
  @Input() movie;str;
  @Input() flag;
  @Input() flag1;
  ngOnInit() {
  }
  movieDetails() {
    // console.log('card working');
    this.router.navigate(['/movie-details/' + this.movie.id]); //on being clicked goes to the specified router link

  }
  addCollection(): void{
    if(localStorage.length){
    this.str=localStorage.getItem('id');
    let collection:Array<string>;
    collection=this.str.split(",");let y=0;
    //console.log(collection);
    for (var item in collection)
    {
      //console.log(collection[item]);console.log(this.movie.id);console.log(collection[item]==this.movie.id);
      if(collection[item]==this.movie.id) {y=1;break;}
    }
    if(y==0)
    {collection.push(this.movie.id);}
    this.str=collection.toString();
    localStorage.setItem('id',this.str);
    }
    else{
      localStorage.setItem('id',this.movie.id);
    }
  }

  // addCollection(){
  //   localStorage.setItem(this.movie.original_title,this.movie.id)
  // }
  deleteCollection():void {
    this.str = localStorage.getItem('id');
    let collection: Array<string>;
    collection = this.str.split(',');
    let index = -1;
    collection.forEach(movieId => {
      index++;
      if (movieId == this.movie.id) {
        collection.splice(index, 1);
      }
    });
    this.str = collection.toString();
    localStorage.setItem('id', this.str);
    

  } 

}
