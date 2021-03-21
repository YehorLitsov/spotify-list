import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {SpotifyAuthApiService} from '../services/spotify-auth-api.service';
import {catchError, first, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  setAuthToken(request: HttpRequest<unknown>): HttpRequest<unknown> {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      return request
        .clone({
          headers: request.headers.append('Authorization', `Bearer ${accessToken}`)
        });
    }
    return request;
  }

  handleResponseError(errorResponse: HttpErrorResponse, request?: HttpRequest<unknown>, next?: HttpHandler): Observable<HttpEvent<unknown>> {
    if (errorResponse.status === 401) {
      this.router.navigate(['']);
    }
    return throwError(errorResponse);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.setAuthToken(request);

    return next.handle(request).pipe(catchError((errorResponse: HttpErrorResponse) => {
      return this.handleResponseError(errorResponse, request, next);
    }));
  }
}
