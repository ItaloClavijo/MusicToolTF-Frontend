import { Routes } from '@angular/router';
import { MusictoolComponent } from './components/musictool/musictool.component';
import { LibraryComponent } from './components/musictool/Library/library.component';
import { ListLibraryComponent } from './components/musictool/Library/list-library/list-library.component';
import { CreateEditLibraryComponent } from './components/musictool/Library/create-edit-library/create-edit-library.component';

export const routes: Routes = [{
    path:'musictool', component:MusictoolComponent,
    children:[
        {path:'library',component:LibraryComponent,children:[
            {path:'list',component:ListLibraryComponent},
            {path:'new',component:CreateEditLibraryComponent}
            ]
        }
    ]
}];
