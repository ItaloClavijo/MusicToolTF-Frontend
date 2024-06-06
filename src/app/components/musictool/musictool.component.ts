import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { LibraryComponent } from './Library/library.component';
import { PlanComponent } from './plan/plan.component';

@Component({
  selector: 'app-musictool',
  standalone: true,
  imports: [RouterOutlet,LibraryComponent,PlanComponent],
  templateUrl: './musictool.component.html',
  styleUrl: './musictool.component.css'
})
export class MusictoolComponent implements OnInit {
  constructor(public icRoute:ActivatedRoute) { }
  ngOnInit(): void {

  }
}
