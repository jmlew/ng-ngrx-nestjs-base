import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { User } from '@api-models';
import { ApiLoadable } from '../../../shared/models';
import * as fromSharedUtils from '../../../shared/utils';

import * as fromActions from './user.actions';

export interface UserState extends EntityState<User>, ApiLoadable {}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (item: User) => item.id,
});

export const initialUserState: UserState = userAdapter.getInitialState({
  ...fromSharedUtils.createApiLoadable(),
});

const reducer = createReducer(
  initialUserState,
  on(fromActions.loadUsers, (state, action) => fromSharedUtils.onApiLoadableLoad(state)),
  on(fromActions.loadUsersSuccess, (state, action) =>
    userAdapter.addAll(action.users, fromSharedUtils.onApiLoadableSuccess(state))
  ),
  on(fromActions.loadUsersFailure, (state, action) =>
    fromSharedUtils.onApiLoadableError(state, action.error)
  ),
  on(fromActions.addUser, (state, action) => fromSharedUtils.onApiLoadableLoad(state)),
  on(fromActions.addUserSuccess, (state, action) =>
    userAdapter.upsertOne(action.user, fromSharedUtils.onApiLoadableSuccess(state))
  ),
  on(fromActions.addUserFailure, (state, action) =>
    fromSharedUtils.onApiLoadableError(state, action.error)
  ),
  on(fromActions.updateUser, (state, action) => fromSharedUtils.onApiLoadableLoad(state)),
  on(fromActions.updateUserSuccess, (state, action) =>
    userAdapter.upsertOne(action.user, fromSharedUtils.onApiLoadableSuccess(state))
  ),
  on(fromActions.updateUserFailure, (state, action) =>
    fromSharedUtils.onApiLoadableError(state, action.error)
  ),
  on(fromActions.deleteUser, (state, action) => fromSharedUtils.onApiLoadableLoad(state)),
  on(fromActions.deleteUserSuccess, (state, action) =>
    userAdapter.removeOne(action.id, fromSharedUtils.onApiLoadableSuccess(state))
  ),
  on(fromActions.deleteUserFailure, (state, action) =>
    fromSharedUtils.onApiLoadableError(state, action.error)
  ),
  on(fromActions.deleteUsers, (state, action) =>
    fromSharedUtils.onApiLoadableLoad(state)
  ),
  on(fromActions.deleteUsersSuccess, (state, action) =>
    userAdapter.removeMany(action.ids, fromSharedUtils.onApiLoadableSuccess(state))
  ),
  on(fromActions.deleteUsersFailure, (state, action) =>
    fromSharedUtils.onApiLoadableError(state, action.error)
  ),
  on(fromActions.clearUsers, (state) => userAdapter.removeAll(state))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
