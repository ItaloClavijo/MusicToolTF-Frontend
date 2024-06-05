import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-musictool',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './musictool.component.html',
  styleUrl: './musictool.component.css'
})
export class MusictoolComponent implements OnInit {
  constructor(public icRoute:ActivatedRoute) { }
  ngOnInit(): void {

  }
}
