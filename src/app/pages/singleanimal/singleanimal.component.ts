import { Component, Input, OnInit } from '@angular/core';
import { AnimalComponent } from '../../Stream/animal/animal.component';
import { Animal } from '../../models/animal';
import { AnimalsService } from '../../Services/animals.service';


@Component({
  selector: 'app-singleanimal',
  standalone: true,
  imports: [
AnimalComponent
  ],
  templateUrl: './singleanimal.component.html',
  styleUrl: './singleanimal.component.css'
})
export class SingleanimalComponent implements OnInit{
  @Input() animal! : Animal;

  id! : number;
  specie! : string;
  habitat! : string;
  regime! : string;
  height! : number;
  weight! : number;
  image! : string;

  ngOnInit(): void{
    this.id = 1;
    this.specie = "Renard";
    this.habitat = "Forêt";
    this.regime = "Carnivore";
    this.height = 50;
    this.weight = 10;
    this.image ="assets/img/fox.jpeg"
  }
}
