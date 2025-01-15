import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../Services/categories.service';
import { GenreListComponent } from '../genre-list/genre-list.component';
@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [
    GenreListComponent
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

