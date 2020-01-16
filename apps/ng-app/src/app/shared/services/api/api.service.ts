import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { buildDetails } from '../../constants';
import { SharedModule } from '../../shared.module';

@Injectable({ providedIn: SharedModule })
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  get<T>(endPoint: string): Observable<T> {
    const url: string = this.getUrl(endPoint);
    return this.http
      .get<T>(url)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }

  post<T>(endPoint: string, body: any | null): Observable<T> {
    const url: string = this.getUrl(endPoint);
    return this.http
      .post<T>(url, body)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }

  put<T>(endPoint: string, body: any | null): Observable<T> {
    const url: string = this.getUrl(endPoint);
    return this.http
      .put<T>(url, body)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }

  delete<T>(endPoint: string): Observable<T> {
    const url: string = this.getUrl(endPoint);
    return this.http
      .delete<T>(url)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }

  deleteMany<T>(endPoint: string, body: any | null = null): Observable<T> {
    const url: string = this.getUrl(endPoint);
    return this.http
      .request<T>('delete', url, { body })
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }

  private getUrl(endPoint: string): string {
    return buildDetails.apiUrl + endPoint;
  }
}
