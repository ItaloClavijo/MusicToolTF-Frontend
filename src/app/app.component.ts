import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LibraryComponent } from './components/musictool/Library/library.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    MatToolbarModule,
     MatIconModule,
     MatMenuModule,
    MatButtonModule,
    RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MusicToolTF-Frontend';
}
