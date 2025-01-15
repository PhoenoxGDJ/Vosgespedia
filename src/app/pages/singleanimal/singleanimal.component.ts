import { Component, Input, OnInit } from '@angular/core';
import { Animal } from '../../models/animal';
import { AnimalsService } from '../../Services/animals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleanimal',
  standalone: true,
  imports: [],
  templateUrl: './singleanimal.component.html',
  styleUrl: './singleanimal.component.css',
})
export class SingleanimalComponent implements OnInit {
  animal!: Animal;

  arg: string | null = '';

  constructor(
    private animalService: AnimalsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {


    this.route.paramMap.subscribe((params) => {
      this.arg = params.get('arg');
    });

    console.log(this.arg);

    this.animalService.getAnimalByAPI(this.arg).subscribe({
      next: (data) => {
        this.animal = data;
      },
      error: (err) =>
        console.error('Erreur lors de la récupération des Categories', err),
      complete: () => {
        console.log('Récupération des categories terminée')
      },
    });
  }
}
