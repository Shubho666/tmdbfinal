import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable} from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor(private httpClient: HttpClient) { }
  public getDescription(movieId):Observable<any>{
    
    return this.httpClient.get(environment.starturl+`/movie/`+movieId+`?api_key=`+environment.API_KEY);
    
  }
   
}
