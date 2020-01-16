import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpErrorInterceptor } from './http-error.interceptor';

export const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  },
];

export * from './http-error.interceptor';
