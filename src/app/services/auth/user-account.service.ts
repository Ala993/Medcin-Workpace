import {environment} from '../../../environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import { IUser } from 'app/models/user';




@Injectable({providedIn: 'root'})
export class UserAccountService {
  private userIdentity: any;
  private authenticated = false;
  private authenticationState = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  fetch(): Observable<HttpResponse<IUser>> {
    return this.http.get<IUser>(environment._api + 'api/account', {observe: 'response'});
  }

  authenticate(identity) {
    this.userIdentity = identity;
    this.authenticated = identity !== null;
    this.authenticationState.next(this.userIdentity);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get<any>(environment._api + 'api/account');
  }

/*  getCurrentUserType(): Observable<any> {
    return  this.http.get<any>(environment.apiUrl + 'api/user-current-type' );
  }*/

  identity(force?: boolean): Promise<IUser> {
    if (force) {
      this.userIdentity = undefined;
    }


    if (this.userIdentity) {
      return Promise.resolve(this.userIdentity);
    }

    return this.fetch()
      .toPromise()
      .then(response => {
        
        const account: IUser = response.body;
        if (account) {
          this.userIdentity = account;
          this.authenticated = true;
        } else {
          this.userIdentity = null;
          this.authenticated = false;
        }
        this.authenticationState.next(this.userIdentity);
        return this.userIdentity;
      })
      .catch(err => {
        this.userIdentity = null;
        this.authenticated = false;
        this.authenticationState.next(this.userIdentity);
        return null;
      });


  }


  isAuthenticated(): boolean {
    return this.authenticated;
  }


  verifUniqueEmail (email: string): Observable<boolean> {
    return this.http.get<boolean>(environment._api + 'api/account-email/' + email);
  }

  requestPasswordReset(mailOrLogin: string): Observable<any> {
    return this.http.post(environment._api + 'api/account/reset-password/init', mailOrLogin);
  }

  finishPasswordReset(key: string, newPassword: string): Observable<any> {
    return this.http.get(environment._api + 'api/account/reset-password/finish/' + key + '?newPassword=' + newPassword);
  }


}
