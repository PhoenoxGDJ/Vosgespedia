import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  @Input() category! : Category;

  id! : number;
  name! : string;

  ngOnInit(): void{
    this.id = 1;
    this.name = "mammifere";
   
  }
  
}
