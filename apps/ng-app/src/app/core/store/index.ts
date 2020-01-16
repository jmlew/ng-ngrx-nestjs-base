import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import { environment } from '../../../environments/environment';

export interface CoreState {}

export const reducers: ActionReducerMap<CoreState> = {};

export const metaReducers: MetaReducer<CoreState>[] = !environment.production ? [] : [];

export const effects: any = [];
