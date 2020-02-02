import { PreloadingStrategy, Route, Routes } from '@angular/router';

import { Observable, of } from 'rxjs';
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
    data: { route: rootRouteConfig.users, preload: true },
    loadChildren: () => import('./features/user/user.module').then((m) => m.UserModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

/**
 * Preloading stratergy to allow individual routes to determine whether content is
 * preloaded automatically after first time to interactive by setting a 'preload' flag on
 * the route's Data object.
 */
export class RootPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? load() : of();
  }
}
