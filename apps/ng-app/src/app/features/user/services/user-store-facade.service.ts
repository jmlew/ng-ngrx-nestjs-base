import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ApiLoadable } from '../../../shared/models';
import { User } from '../models';
import * as fromReducer from '../store/user.reducer';
import * as fromSelectors from '../store/user.selectors';

@Injectable()
export class UserStoreFacadeService {
  usersLoadable$: Observable<ApiLoadable>;
  users$: Observable<User[]>;
  userEntities$: Observable<Dictionary<User>>;

  constructor(private readonly store: Store<fromReducer.UserState>) {
    this.users$ = this.store.pipe(select(fromSelectors.selectAllUsers));
    this.userEntities$ = this.store.pipe(select(fromSelectors.selectUserEntities));
    this.usersLoadable$ = this.store.pipe(select(fromSelectors.selectUsersApiLoadable));
  }

  /**
   * This implementation of the Facade pattern exposes actions via the dispatch method
   * only, as opposed to methods which call actions directly. This is to promote good
   * action hygene (discouraging the reuse of actions), and to limit the abstration over
   * the intended indirection of the NgRx pattern.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
