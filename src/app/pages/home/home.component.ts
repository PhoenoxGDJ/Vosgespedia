import { Component } from '@angular/core';
import { AnimalListComponent } from '../animal-list/animal-list.component';
import { GenreListComponent } from '../genre-list/genre-list.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AnimalListComponent, GenreListComponent, RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
