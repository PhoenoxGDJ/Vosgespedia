import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Trace } from '../models/trace';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private animals : Animal[] = [
  new Animal(
    1,
    "Renard Roux",
    "Forêt",
    "Carnivore",
    50,
    10,
    "assets/img/fox.jpeg",
    "oreo"
  ),
  new Animal(
    2,
    "Sanglier",
    "Forêt",
    "Omnivore",
    50,
    10,
    "assets/img/sanglier.jpg",
    "oreo"
  )
];
  constructor(private httpClient : HttpClient) {}

  getAnimalListByAPI(arg: string | null): Observable<Animal[]>{
    return this.httpClient.get<Animal[]>(environment.api_url+'/animals/'+arg)
  }

  getAnimalByAPI(arg: string | null): Observable<Animal>{
    return this.httpClient.get<Animal>(environment.api_url+'/animals/'+arg)
  }

  getGenreAnimalListByAPI(arg: string | null): Observable<Animal[]>{
    return this.httpClient.get<Animal[]>(environment.api_url+'/genran/'+arg)
  }

  getAnimTraces(arg: string | null) : Observable<Trace[]>{
    return this.httpClient.get<Trace[]>(environment.api_url+'/cattr/'+arg)
  }
}
