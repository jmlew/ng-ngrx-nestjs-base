import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './core/components';
import { HomeComponent } from './features/home/components/home.component';
import { rootRouteConfig } from './shared/constants/routes.constant';

export const rootRoutes: Routes = [
  {
    path: '',
    redirectTo: rootRouteConfig.home.name,
    pathMatch: 'full',
  },
  {
    path: rootRouteConfig.home.name,
    component: HomeComponent,
    data: { route: rootRouteConfig.home },
  },
  {
    path: rootRouteConfig.users.name,
    data: { route: rootRouteConfig.users },
    loadChildren: () => import('./features/user/user.module').then((m) => m.UserModule),
  },
  { path: '**', component: PageNotFoundComponent },
];
