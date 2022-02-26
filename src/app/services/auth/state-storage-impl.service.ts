import {Injectable} from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';


@Injectable({providedIn: 'root'})
export class StateStorageImplService {

  constructor(private  $sessionStorage: SessionStorageService,
              private  $localStorage: LocalStorageService,
              ) {
  }

  clearAllData() {
    try {
      localStorage.clear();
      sessionStorage.clear();
      this.$localStorage.clear('authenticationToken');
      this.$localStorage.clear('localeId');
      this.$sessionStorage.clear('authenticationToken');
      this.$localStorage.clear('user');
      this.$sessionStorage.clear('user');
    } finally {
    
    }
  }

}
