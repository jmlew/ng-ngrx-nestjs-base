import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConditionalPreloadingStrategyService } from '../core/services';
import { HomeView } from '../features/home/views/home.view';
import { rootRouteConfig } from '../shared/constants/routes.constant';
import { PageNotFoundView } from '../views/page-not-found/page-not-found.view';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: rootRouteConfig.home.name,
    pathMatch: 'full',
  },
  {
    path: rootRouteConfig.home.name,
    component: HomeView,
    data: { route: rootRouteConfig.home },
  },
  {
    path: rootRouteConfig.users.name,
    data: { route: rootRouteConfig.users, preload: true },
    loadChildren: () => import('../features/user/user.module').then((m) => m.UserModule),
  },
  { path: '**', component: PageNotFoundView },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: ConditionalPreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
