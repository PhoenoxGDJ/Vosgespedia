import { Component, OnInit } from '@angular/core';
import { TraceComponent } from '../../Stream/trace/trace.component';
import { Trace } from '../../models/trace';
import { CategoryService } from '../../Services/categories.service';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Category } from '../../models/category';

@Component({
  selector: 'app-traces-list',
  standalone: true,
  imports: [
    TraceComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './traces-list.component.html',
  styleUrl: './traces-list.component.css'
})
export class TracesListComponent implements OnInit{
  myTraces!: Category[];

  constructor(private categoryService: CategoryService){

  }
  ngOnInit(): void {
    this.categoryService.getCategoryListByAPI()
    .subscribe({
      next: (data) => this.myTraces = data,
      error: (err) => console.error('Erreur lors de la récupération des categories de traces', err),
      complete: () => console.log('Récupération des traces terminée')
    });
  }

}
