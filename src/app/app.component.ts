import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { UserAccountService } from './services/auth/user-account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private userAccountService: UserAccountService,
    private localStorage: LocalStorageService,
  ) {}

  ngOnInit(): void {
  
    const token = localStorage.getItem('authenticationToken') || sessionStorage.getItem('authenticationToken');
    if (token) {
      this.userAccountService.identity().then((account) => {
        this.router.initialNavigation();
      });
    }
    else {
      this.router.initialNavigation();
    }

  }
  title = 'medecin';


}
