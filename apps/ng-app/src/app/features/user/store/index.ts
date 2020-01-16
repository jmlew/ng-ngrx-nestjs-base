import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { UsersEffects } from './user.effects';
import { userReducer, UserState } from './user.reducer';

export const usersFeatureKey = 'usersFeature';

export interface UsersFeatureState {
  users: UserState;
}

export const getUsersFeatureState = createFeatureSelector<UsersFeatureState>(
  usersFeatureKey
);

export const reducers: ActionReducerMap<UsersFeatureState> = {
  users: userReducer,
};

export const effects: any[] = [UsersEffects];
