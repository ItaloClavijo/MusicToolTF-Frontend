import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListPlanComponent } from './list-plan/list-plan.component';
import { CreaeditaPlanComponent } from './creaedita-plan/creaedita-plan.component';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [RouterOutlet, ListPlanComponent, CreaeditaPlanComponent],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent implements OnInit{
  constructor(public icRoute:ActivatedRoute) { }
  ngOnInit(): void {

  }
}
