import { Routes } from '@angular/router';

import { usersRouteConfig } from './constants';
import * as fromContainerrs from './containers';
import * as fromGuards from './guards';

export const userRoutes: Routes = [
  {
    path: '',
    redirectTo: usersRouteConfig.list.name,
    pathMatch: 'full',
  },
  {
    path: usersRouteConfig.list.name,
    component: fromContainerrs.UsersComponent,
    canActivate: [fromGuards.UsersGuard],
    data: { route: usersRouteConfig.list },
  },
];
