import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {environment} from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }
  //API_KEY="8dc2a09fce56ed80b43b7548c1377e67";
  public getTrending():Observable<any>{
    //return this.httpClient.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${this.API_KEY}`);
    return this.httpClient.get(environment.starturl+`/trending/all/day?api_key=`+environment.API_KEY);
  }
  // public getSearch(query):Observable<any>{
  //   //return this.httpClient.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${this.API_KEY}`);
  //   return this.httpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=`+query);
      
  // }
  public getPopular():Observable<any>{
    return this.httpClient.get(environment.starturl+`/movie/popular?api_key=`+environment.API_KEY);
  }

}
