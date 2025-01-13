import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient : HttpClient) {}

  getGenreListByAPI(arg = ""): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>(environment.api_url+'/genres/'+arg)
    }
  }
