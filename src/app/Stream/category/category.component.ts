import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
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
