import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { User, UserParams } from '@api-models';
import * as fromUtilsLib from '@shared-utils';

import * as fromUsersDb from '../../../assets/db/users.json';
import * as fromSharedUtils from '../../shared/utils';

@Injectable()
export class UserService {
  private users: User[];

  constructor() {
    this.users = fromUsersDb['default'];
  }

  getAllUsers(): Observable<User[]> {
    return fromSharedUtils.toStreamWithDelay(this.users);
  }

  getUserById(id: number): Observable<User> {
    const user: User = fromUtilsLib.getById(this.users, id);
    return fromSharedUtils.toStreamWithDelay(user);
  }

  createUser(params: UserParams): Observable<User> {
    const user: User = this.normaliseNewUser(params);
    this.addUserToDb(user);
    return fromSharedUtils.toStreamWithDelay(user);
  }

  // TODO: Create alt version which replaces the element using the id param.
  updateUser(id: number, params: User): Observable<User> {
    const user: User = this.normaliseEditedUser(params);
    this.updateUserInDb(user);
    return fromSharedUtils.toStreamWithDelay(user);
  }

  deleteUser(id: number): Observable<number> {
    this.removeUserFromDb(id);
    return fromSharedUtils.toStreamWithDelay(id);
  }

  deleteUsers(ids: number[]): Observable<number[]> {
    this.removeUsersFromDb(ids);
    return fromSharedUtils.toStreamWithDelay(ids);
  }

  private updateUserInDb(user: User) {
    this.users = fromUtilsLib.updateInCollection(user, this.users);
  }

  private addUserToDb(user: User) {
    this.users = fromUtilsLib.addToCollection(user, this.users);
  }

  private removeUserFromDb(id: number) {
    this.users = fromUtilsLib.removeIdFromCollection(id, this.users);
  }

  private removeUsersFromDb(ids: number[]) {
    this.users = fromUtilsLib.removeIdsFromCollection(ids, this.users);
  }

  private normaliseNewUser(params: UserParams) {
    const id: number = fromUtilsLib.getNextCollectionId(this.users);
    const createdAt: string = fromUtilsLib.getCurrentDateString();
    return { ...params, id, createdAt };
  }

  private normaliseEditedUser(user: User) {
    const updatedAt: string = fromUtilsLib.getCurrentDateString();
    return { ...user, updatedAt };
  }
}
