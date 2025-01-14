import { Component, Input, OnInit } from '@angular/core';
import { AnimalComponent } from '../../Stream/animal/animal.component';
import { Animal } from '../../models/animal';
import { AnimalsService } from '../../Services/animals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [AnimalComponent],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css',
})
export class AnimalListComponent implements OnInit {
  animals!: Animal[];

  arg: string | null = '';

  constructor(
    private animalService: AnimalsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.arg = params.get('arg');
    });

    if (typeof(this.arg) == null || typeof(this.arg) == undefined) {
      this.arg = ""
    }

    this.animalService.getGenreAnimalListByAPI(this.arg).subscribe({
      next: (data) => {
        this.animals = data;
      },
      error: (err) =>
        console.error('Erreur lors de la récupération des Categories', err),
      complete: () => console.log('Récupération des categories terminée'),
    });
  }
}
