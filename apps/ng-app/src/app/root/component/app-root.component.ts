import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { rootRouteConfig } from '../../shared/constants';
import { RouteItem } from '../../shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss'],
})
export class AppRootComponent {
  routes: RouteItem[];

  constructor(private readonly router: Router) {
    this.routes = [rootRouteConfig.home, rootRouteConfig.users];
  }

  onItemClick(item: RouteItem) {
    if (item.path) {
      this.router.navigate([item.path]);
    }
  }
}
