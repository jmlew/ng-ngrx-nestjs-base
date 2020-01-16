import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ApiService } from '../../../shared/services';
import { User, UserParams } from '../models/user.model';

enum ApiEndpoint {
  User = 'user',
}

@Injectable()
export class UserApiService {
  constructor(private api: ApiService) {}

  getAllUsers(): Observable<User[]> {
    return this.api
      .get<User[]>(ApiEndpoint.User)
      .pipe(catchError((error: any) => throwError(error)));
  }

  getUserById(id: number): Observable<User> {
    return this.api
      .get<User>(`${ApiEndpoint.User}/${id}`)
      .pipe(catchError((error: any) => throwError(error)));
  }

  createUser(user: UserParams): Observable<User> {
    return this.api
      .post<User>(ApiEndpoint.User, user)
      .pipe(catchError((error: any) => throwError(error)));
  }

  updateUser(user: User): Observable<User> {
    return this.api
      .put<User>(`${ApiEndpoint.User}/${user.id}`, user)
      .pipe(catchError((error: any) => throwError(error)));
  }

  deleteUser(id: number): Observable<number> {
    return this.api
      .delete<number>(`${ApiEndpoint.User}/${id}`)
      .pipe(catchError((error: any) => throwError(error)));
  }

  deleteUsers(ids: number[]): Observable<number[]> {
    return this.api
      .deleteMany<number[]>(ApiEndpoint.User, ids)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
