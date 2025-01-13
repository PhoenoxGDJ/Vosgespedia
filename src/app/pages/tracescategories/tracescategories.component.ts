import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Trace } from '../../models/trace';
import { CategoryService } from '../../Services/categories.service';
import { TraceComponent } from '../../Stream/trace/trace.component';
import { Category } from '../../models/category';

@Component({
  selector: 'app-tracescategories',
  standalone: true,
  imports: [RouterLink, TraceComponent, RouterOutlet],
  templateUrl: './tracescategories.component.html',
  styleUrl: './tracescategories.component.css'
})
export class TracescategoriesComponent implements OnInit {
  myTraces!: Trace[];

  constructor(private categoryService: CategoryService){

  }
  ngOnInit(): void{
    this.categoryService.getCategoryListByAPI()
    .subscribe({
      next: (data) => this.myTraces = data,
      error: (err) => console.error('Erreur lors de la récupération des Categories', err),
      complete: () => console.log('Récupération des traces terminée')
    });
  }

}
