import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  constructor(private httpClient: HttpClient) { }
  collection: any[] = [];
  subject: BehaviorSubject<any> = new BehaviorSubject(this.collection);
  getCollection(): Observable<any> {
    return this.subject;
  }
  fetchCollection() {
    const movieList = localStorage.getItem('id');
    this.collection = JSON.parse(movieList);
    return this.subject.next(this.collection);
  }
  addCollection(movie: any): Observable<any> {
    let flag = 0;
    this.collection.forEach(n => { if (n == movie) { flag = 1; } })
    if (flag == 0) {
      this.collection.push(movie);
    }

    localStorage.setItem('id', JSON.stringify(this.collection));
    return of(this.subject.next(this.collection));
  }
  removeCollection(movieId: string): Observable<any> {
    const newMovieList = this.collection.filter(movie => movie.id !== movieId);
    this.collection = newMovieList;
    localStorage.setItem('id', JSON.stringify(this.collection));
    return of(this.subject.next(this.collection));
  }
}