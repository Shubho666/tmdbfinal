import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }
  public getSearch(query):Observable<any>{
    
    //console.log(query);
    //return this.httpClient.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${this.API_KEY}`);return this.httpClient.get(environment.starturl+`/trending/all/day?api_key=`+environment.API_KEY);
    return this.httpClient.get(environment.starturl+`/search/movie?api_key=`+environment.API_KEY+`&query=`+query);
    
  }
  
}
