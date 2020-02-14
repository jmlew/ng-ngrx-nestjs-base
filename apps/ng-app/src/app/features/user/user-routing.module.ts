import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { usersRouteConfig } from './constants';
import * as fromGuards from './guards';
import * as fromViews from './views';

const userRoutes: Routes = [
  {
    path: '',
    redirectTo: usersRouteConfig.list.name,
    pathMatch: 'full',
  },
  {
    path: usersRouteConfig.list.name,
    component: fromViews.UsersView,
    canActivate: [fromGuards.UsersGuard],
    data: { route: usersRouteConfig.list },
  },
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
