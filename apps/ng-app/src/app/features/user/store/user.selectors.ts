import { createSelector } from '@ngrx/store';

import * as fromSharedUtils from '../../../shared/utils';

import { getUsersFeatureState, UsersFeatureState } from './index';
import * as fromReducer from './user.reducer';

export const selectUsersState = createSelector(
  getUsersFeatureState,
  (state: UsersFeatureState): fromReducer.UserState => state.users
);

export const {
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = fromReducer.userAdapter.getSelectors(selectUsersState);

export const selectUsersApiLoadable = createSelector(
  selectUsersState,
  fromSharedUtils.getApiLoadable
);
