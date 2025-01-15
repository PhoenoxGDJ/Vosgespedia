import { Component, OnInit } from '@angular/core';
import { GenreComponent } from '../../Stream/genre/genre.component';
import { Genre } from '../../models/genre';
import { GenreService } from '../../Services/genre.service';

@Component({
  selector: 'app-genre-list',
  standalone: true,
  imports: [
    GenreComponent,
  ],
  templateUrl: './genre-list.component.html',
  styleUrl: './genre-list.component.css'
})
export class GenreListComponent implements OnInit{
  myGenres!: Genre[];
  
  constructor(private genreService: GenreService){

  }
  ngOnInit(): void {
    this.genreService.getGenreListByAPI()
    .subscribe({
      next: (data) => this.myGenres = data,
      error: (err) => console.error('Erreur lors de la récupération des Animaux', err),
      complete: () => {
        console.log('Récupération des animaux terminée');
        console.log(this.myGenres);
      }
    });
  }
}

