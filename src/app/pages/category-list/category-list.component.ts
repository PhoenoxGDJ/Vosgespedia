import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from "../../Stream/category/category.component";
import { Category } from '../../models/category';
import { CategoryService } from '../../Services/categories.service';
import { GenreListComponent } from '../genre-list/genre-list.component';
import { AnimalListComponent } from '../animal-list/animal-list.component';
@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [
    AnimalListComponent,
    GenreListComponent,
    CategoryComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{

  categories!: Category[];

  constructor(private categoryService : CategoryService){

  }

  ngOnInit(): void {
    this.categoryService.getCategoryListByAPI()
    .subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.error('Erreur lors de la récupération des Categories', err),
      complete: () => console.log('Récupération des categories terminée')
    });
  }
}

