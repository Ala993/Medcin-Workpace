import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {environment} from '../../../environments/environment';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorage: LocalStorageService, private sessionStorage: SessionStorageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request || !request.url || (/^http/.test(request.url) && !(environment._api && request.url.startsWith(environment._api)))) {
      return next.handle(request);
    }

    const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');

    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    });

    return next.handle(request);
  }
}
