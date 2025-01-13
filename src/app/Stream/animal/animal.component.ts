import { Component, Input, OnInit } from '@angular/core';
import { Animal } from '../../models/animal';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [
    RouterLink,
    
  ],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent implements OnInit{
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
