import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { LibraryComponent } from './Library/library.component';
import { ArtistComponent } from './artist/artist.component';


@Component({
  selector: 'app-musictool',
  standalone: true,
  imports: [RouterOutlet,LibraryComponent,ArtistComponent],
  templateUrl: './musictool.component.html',
  styleUrl: './musictool.component.css'
})
export class MusictoolComponent implements OnInit {
  constructor(public icRoute:ActivatedRoute) { }
  ngOnInit(): void {

  }
}
