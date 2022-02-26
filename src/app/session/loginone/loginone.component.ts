import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {LoginService} from './login.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { IUser, User } from 'app/models/user';
import { UserAccountService } from 'app/services/auth/user-account.service';
import { CustomTableEmitter } from 'app/services/auth/customTableEmitter';


@Component({

   selector: 'ms-loginone-session',
   templateUrl: './loginone-component.html',
   styleUrls: ['./loginone-component.scss'],
   encapsulation: ViewEncapsulation.None,
})

export class LoginoneComponent implements OnInit {

  customer: IUser;
  email: string;
  password: string;
  authenticationError: boolean;
  rememberMe: boolean;
  submitted = false;
  account: IUser;
  loginForm = this.fb.group({
    username: ['', Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required])],
    rememberMe: [false]
  });
  numberOfAttempts = 0;
  hiddenRecaptcha = true;
  forgotPasswordSubmitted = false;
  isValidUsername = true;

  constructor(private router: Router,
              private loginService: LoginService,
              private userAccountService: UserAccountService,
              private fb: FormBuilder,
              private eventEmitter: CustomTableEmitter,
              private localStorage: LocalStorageService,
              private sessionStorage: SessionStorageService,
              
  ) {
  }

  ngOnInit() {
    this.customer = new User();
    this.rememberMe = false;
  }

  checkPasswords(group: FormGroup) {

    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : {notSame: true};
  }


  login() {
    this.submitted = true;
    this.forgotPasswordSubmitted = false;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService
      .login({
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value,
        rememberMe: this.loginForm.get('rememberMe').value
      })
      .then(() => {

        this.authenticationError = false;
        this.eventEmitter.next({
          name: 'authenticationSuccess',
          content: 'Sending Authentication Success'
        });
        this.userAccountService.identity().then(account => {
          this.account = account;
          this.loginForm.get('rememberMe').value ? this.localStorage.store('user', account) : this.sessionStorage.store('user', account);
        });
        this.router.navigate(['/dashboard']);

      })
      .catch(() => {
        this.numberOfAttempts = this.numberOfAttempts + 1;
        if (this.numberOfAttempts > 3 ) {
          this.hiddenRecaptcha = false
        }
        this.authenticationError = true;
      });

  }





  forgotPassword(): void {
   /*  this.forgotPasswordSubmitted = true;
    if ( this.loginForm.get('username').value === '') {
    return;
    }
    this.userAccountService.requestPasswordReset(this.loginForm.get('username').value)
    .subscribe(res => {
    
      this.forgotPasswordSubmitted = false;
    }, err => {
      this.isValidUsername = false;
    }); */
  }


}



