import { Routes } from '@angular/router';
import { MusictoolComponent } from './components/musictool/musictool.component';
import { LibraryComponent } from './components/musictool/Library/library.component';
import { ListLibraryComponent } from './components/musictool/Library/list-library/list-library.component';
import { ListPlanComponent } from './components/musictool/plan/list-plan/list-plan.component';
import { PlanComponent } from './components/musictool/plan/plan.component';
import { CreaeditaPlanComponent } from './components/musictool/plan/creaedita-plan/creaedita-plan.component';

export const routes: Routes = [{
    path:'musictool', component:MusictoolComponent,
    children:[
        {path:'library',component:LibraryComponent,children:[
            {path:'list',component:ListLibraryComponent}
        ]
    },
    {path:'plans',component:PlanComponent,
    children:[
        {path:'creaeditaplan',component:CreaeditaPlanComponent},
    ]},
    
    ]
}];
