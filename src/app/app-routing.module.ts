import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatDashboardComponent } from './boards/stat-dashboard/stat-dashboard.component';
import { SignInComponent } from './boards/user/sign-in/sign-in.component';
import { UserComponent } from './boards/user/user.component';
import { Role } from './models/role.model';
import { AuthGuard } from './shared/auth/auth.guard';
import { RatingComponent } from './util/rating/rating.component';

const routes: Routes = [{
    path: '',
    redirectTo: '/login',
    pathMatch: "full"
  },
  {
    path: 'boards',
    loadChildren: () => import('./boards/boards.module').then(module => module.BoardsModule)
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(module => module.SharedModule)
  },
  {
    path: 'showAgentLocation/:randomKey',
    component: RatingComponent
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
