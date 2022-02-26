import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import {environment} from '../../../environments/environment';



@Injectable({providedIn: 'root'})
export class AuthServerProvider {
  constructor(private http: HttpClient, private $localStorage: LocalStorageService, private $sessionStorage: SessionStorageService) {}


  login(credentials): Observable<any> {
    const data = {
      username: credentials.username,
      password: credentials.password,
      rememberMe: credentials.rememberMe
    };
    return this.http.post(environment._api + 'api/authenticate', data, { observe: 'response' }).pipe(map(authenticateSuccess.bind(this)));
    function authenticateSuccess(resp) {
      const bearerToken = resp.headers.get('Authorization');
      if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
        const jwt = bearerToken.slice(7, bearerToken.length);
        this.storeAuthenticationToken(jwt, credentials.rememberMe);
        return jwt;
      }
    }
  }



  storeAuthenticationToken(jwt, rememberMe) {
    if (rememberMe) {
      this.$localStorage.store('authenticationToken', jwt);
      localStorage.setItem('authenticationToken', jwt);
    } else {
      this.$sessionStorage.store('authenticationToken', jwt);
      sessionStorage.setItem('authenticationToken', jwt);
    }
  }

  logout(): Observable<any> {
  
    return new Observable(observer => {
      this.$localStorage.clear('authenticationToken');
      localStorage.clear()
      this.$sessionStorage.clear('authenticationToken');
      sessionStorage.clear();
      observer.complete();
    });
  }
}
