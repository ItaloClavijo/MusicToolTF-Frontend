import { Routes } from '@angular/router';
import { MusictoolComponent } from './components/musictool/musictool.component';
import { LibraryComponent } from './components/musictool/Library/library.component';
import { ListLibraryComponent } from './components/musictool/Library/list-library/list-library.component';
import { ArtistComponent } from './components/musictool/artist/artist.component';
import { ListArtistComponent } from './components/musictool/artist/list-artist/list-artist.component';
import { Component } from '@angular/core';
import { CreaEditaArtistComponent } from './components/musictool/artist/crea-edita-artist/crea-edita-artist.component';

export const routes: Routes = [{
    path:'musictool', component:MusictoolComponent,
    children:[
        {path:'library',component:LibraryComponent,children:[
            {path:'list',component:ListLibraryComponent}
        ]},
        {path:'artist', component:ArtistComponent,children:[
            {path:'list',component:ListArtistComponent},
            {path:'creaEdita',component:CreaEditaArtistComponent}
        ]},
    ]
}];
