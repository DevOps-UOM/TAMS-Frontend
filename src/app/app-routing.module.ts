import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    redirectTo: '/boards/itinerary-map',
    pathMatch: "full"
  },
  {
    path: 'boards',
    loadChildren: () => import('./boards/boards.module').then(module => module.BoardsModule)
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(module => module.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
