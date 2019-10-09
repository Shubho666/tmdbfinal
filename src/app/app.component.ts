import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'theMovieDataBaseApp';
  constructor(private router:Router,private fb:FormBuilder){}
  // getTrending(){
    formVar: FormGroup;

  ngOnInit() {
    this.formVar = this.fb.group({
      searchname: ''
    });

  }
  onSubmit() {
    //console.log(this.formVar.value.searchname);
    this.router.navigate(["/search/"+this.formVar.value.searchname]);
  }
  // }
  // movieSearch;
  // getSearch():void{
  //   //console.log('working');
  //   this.subscribe(movie => this.movieSearch=movie.results);
  // }
  // searchForm = new FormGroup({
  //   searchInput: new FormControl(''),
  // });
  // onSubmit():void{
  //   console.log(this.searchForm.value.searchInput);
  //   //this.router.navigate(["/search/"+this.searchForm.value.searchInput])
  //   // window.location.href="/search/"+this.searchForm.value.searchInput;
  // }
  
  // getSearch(h): void{
  //   console.log('submit working');
  //   console.log(typeof(h));
  // }
  
}
