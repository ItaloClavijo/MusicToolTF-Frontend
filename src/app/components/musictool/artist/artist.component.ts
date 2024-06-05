import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Router } from 'express';
@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {
  constructor(public Route:ActivatedRoute) { }
  ngOnInit(): void {

  }
}
