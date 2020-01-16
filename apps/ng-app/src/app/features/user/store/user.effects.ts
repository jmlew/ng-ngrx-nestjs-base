import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';

import { User, UserParams } from '@api-interfaces';
import { UserApiService } from '../services/user-api.service';

import * as fromActions from './user.actions';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.loadUsers),
      switchMap(() =>
        this.api.getAllUsers().pipe(
          map((users: User[]) => fromActions.loadUsersSuccess({ users })),
          catchError((error: any) => of(fromActions.loadUsersFailure({ error })))
        )
      )
    );
  });

  addUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.addUser),
      concatMap((action: { user: UserParams }) =>
        this.api.createUser(action.user).pipe(
          map((user: User) => fromActions.addUserSuccess({ user })),
          catchError((error: any) => of(fromActions.addUserFailure({ error })))
        )
      )
    );
  });

  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.updateUser),
      concatMap((action: { user: User }) =>
        this.api.updateUser(action.user).pipe(
          map((user: User) => fromActions.updateUserSuccess({ user })),
          catchError((error: any) => of(fromActions.updateUserFailure({ error })))
        )
      )
    );
  });

  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.deleteUser),
      concatMap((action: { id: number }) =>
        this.api.deleteUser(action.id).pipe(
          map((id: number) => fromActions.deleteUserSuccess({ id })),
          catchError((error: any) => of(fromActions.addUserFailure({ error })))
        )
      )
    );
  });

  deleteUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.deleteUsers),
      concatMap((action: { ids: number[] }) =>
        this.api.deleteUsers(action.ids).pipe(
          map((ids: number[]) => fromActions.deleteUsersSuccess({ ids })),
          catchError((error: any) => of(fromActions.addUserFailure({ error })))
        )
      )
    );
  });

  constructor(private readonly actions$: Actions, private readonly api: UserApiService) {}
}
