import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { Rest } from '../models/rest';
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient, private notification: NzNotificationService) {}

  handleError(err: any): Observable<any> {
    this.notification.create(
      'error',
      '请求错误',
      JSON.stringify(err)
    );
    console.error(err);
    return throwError(err);
  }

  request<T, R>(request: HttpRequest<T> | Rest.Request<T>, config?: Rest.Config, api?: string): Observable<R> {
    config = config || ({} as Rest.Config);
    const { observe = Rest.Observe.Body, skipHandleError } = config;
    const url = (api || 'http://localhost:3000') + request.url;
    const { method, params, ...options } = request;

    return this.http
      .request<T>(method, url, {
        observe,
        ...(params && {
          params: Object.keys(params).reduce(
            (acc, key) => ({
              ...acc,
              ...(typeof params[key] !== 'undefined' && params[key] !== '' && { [key]: params[key] }),
            }),
            {},
          ),
        }),
        ...options,
      } as any)
      .pipe(
        observe === Rest.Observe.Body ? take(1) : tap(),
        catchError(err => {
          if (skipHandleError) {
            return throwError(err);
          }

          return this.handleError(err);
        }),
      );
  }
}
