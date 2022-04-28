import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../interfaces/movies.interface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  GetData(): Observable<Movies[]> {
    return this.http.get<Movies[]>('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json')
  }
}
