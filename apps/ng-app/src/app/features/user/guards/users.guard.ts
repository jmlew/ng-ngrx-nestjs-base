import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';

import { ApiLoadable } from '../../../shared/models';
import { UserStoreFacadeService } from '../services/user-store-facade.service';
import * as fromUserActions from '../store/user.actions';

@Injectable()
export class UsersGuard implements CanActivate {
  constructor(private readonly userFacade: UserStoreFacadeService) {}

  canActivate(): Observable<boolean> {
    return this.checkUserItemsLoaded().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkUserItemsLoaded(): Observable<boolean> {
    return this.userFacade.usersLoadable$.pipe(
      map((loadable: ApiLoadable) => !loadable.isSuccess && !loadable.isLoading),
      tap((shouldLoad: boolean) => {
        if (shouldLoad) {
          this.userFacade.dispatch(fromUserActions.loadUsers());
        }
      }),
      take(1)
    );
  }
}
