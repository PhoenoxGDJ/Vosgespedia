import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient : HttpClient) {}

  getCategoryListByAPI(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(environment.api_url+'/categories/')
  }
}
