import { Component, Input, OnInit } from '@angular/core';
import { Genre } from '../../models/genre';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-genre',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css'
})
export class GenreComponent implements OnInit{
  @Input() genre! : Genre;

  gid! : number;
  name! : string;

  ngOnInit(): void {
    this.gid = 1;
    this.name = "mammifere";
  }
}
