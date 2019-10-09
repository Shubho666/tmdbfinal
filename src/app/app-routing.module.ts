import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { TrendingMovieComponent }  from './components/trending-movie/trending-movie.component';
import { PopularMovieComponent} from './components/popular-movie/popular-movie.component';
import {SearchComponent} from './components/search/search.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path:'',component:TrendingMovieComponent},
  { path: 'moviedetail', component: TrendingMovieComponent },
  { path: 'populardetail', component:PopularMovieComponent },
  { path: 'search/:searchQuery' ,component:SearchComponent},
  { path: 'search' ,component:TrendingMovieComponent},
  { path: 'movie-details/:movieId', component:MovieDetailsComponent}
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
