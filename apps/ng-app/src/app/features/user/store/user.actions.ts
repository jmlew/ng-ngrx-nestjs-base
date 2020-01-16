import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { User, UserParams } from '@api-models';

export const loadUsers = createAction('[User/API] Load Users');

export const loadUsersSuccess = createAction(
  '[User/API] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User/API] Load Users Failure',
  props<{ error: any }>()
);

export const addUser = createAction('[User/API] Add User', props<{ user: UserParams }>());
export const addUserSuccess = createAction(
  '[User/API] Add User Success',
  props<{ user: User }>()
);
export const addUserFailure = createAction(
  '[User/API] Add User Failure',
  props<{ error: any }>()
);

export const updateUser = createAction('[User/API] Update User', props<{ user: User }>());
export const updateUserSuccess = createAction(
  '[User/API] Update User Success',
  props<{ user: User }>()
);
export const updateUserFailure = createAction(
  '[User/API] Update User Failure',
  props<{ error: any }>()
);

export const deleteUser = createAction('[User/API] Delete User', props<{ id: number }>());
export const deleteUserSuccess = createAction(
  '[User/API] Delete User Success',
  props<{ id: number }>()
);
export const deleteUserFailure = createAction(
  '[User/API] Delete User Failure',
  props<{ error: any }>()
);

export const deleteUsers = createAction(
  '[User/API] Delete Users',
  props<{ ids: number[] }>()
);
export const deleteUsersSuccess = createAction(
  '[User/API] Delete Users Success',
  props<{ ids: number[] }>()
);
export const deleteUsersFailure = createAction(
  '[User/API] Delete Users Failure',
  props<{ error: any }>()
);

export const clearUsers = createAction('[User/API] Clear Users');
