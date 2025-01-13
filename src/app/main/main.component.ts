import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AnimalListComponent } from '../pages/animal-list/animal-list.component';
import { GenreListComponent } from "../pages/genre-list/genre-list.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
}

