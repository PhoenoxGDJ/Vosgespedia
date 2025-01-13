import { Component, input, Input, OnInit } from '@angular/core';
import { Trace } from '../../models/trace';
import { Category } from '../../models/category';

@Component({
  selector: 'app-trace',
  standalone: true,
  imports: [],
  templateUrl: './trace.component.html',
  styleUrl: './trace.component.css'
})
export class TraceComponent implements OnInit{
  @Input() category! : Category;

  caid! : number;
  category_name! :string;

  ngOnInit(): void {
    this.caid = 1;
    this.category_name = "Arbres";
  }

}
