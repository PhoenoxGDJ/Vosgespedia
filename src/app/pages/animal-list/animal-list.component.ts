import { Component, OnInit } from '@angular/core';
import { AnimalComponent } from "../../Stream/animal/animal.component";
import { Animal } from '../../models/animal';
import { AnimalsService } from '../../Services/animals.service';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [AnimalComponent],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent implements OnInit{

  animals!: Animal[];

  constructor(private animalService : AnimalsService){

  }

  ngOnInit(): void {
    this.animalService.getAnimalListByAPI()
    .subscribe({
      next: (data) => this.animals = data,
      error: (err) => console.error('Erreur lors de la récupération des Animaux', err),
      complete: () => console.log('Récupération des animaux terminée')
    });
  }
}

