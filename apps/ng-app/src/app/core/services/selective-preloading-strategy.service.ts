import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

/**
 * Preloading stratergy to allow individual routes to determine whether content is
 * preloaded automatically after first time to interactive by setting a 'preload' flag on
 * the route's Data object.
 */
@Injectable()
export class ConditionalPreloadingStrategyService implements PreloadingStrategy {
  preloadedModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preload) {
      this.preloadedModules.push(route.path);
      return load();
    } else {
      return of();
    }
  }
}
