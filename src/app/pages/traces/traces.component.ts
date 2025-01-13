import { Component, Input, OnInit } from '@angular/core';
import { Trace } from '../../models/trace';

@Component({
  selector: 'app-traces',
  standalone: true,
  imports: [],
  templateUrl: './traces.component.html',
  styleUrl: './traces.component.css'
})
export class TracesComponent implements OnInit{
  @Input() trace! : Trace;

  caid! : number;
  name! : string;

  ngOnInit(): void {
    this.caid = 1;
    this.name = "arbre";
  }

}
