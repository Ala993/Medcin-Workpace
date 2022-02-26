import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthServerProvider } from 'app/services/auth/auth-jwt.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 
  date:Date =new Date(); 
  openeSideNav = false;
  constructor(
    private authService: AuthServerProvider,
    private router: Router,
  ){
    
  }
 
  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date()
    }, 1000)

   
  }
  setSideName(){
    this.openeSideNav = !this.openeSideNav
  }
  
  logout() {
    this.authService.logout().subscribe();
    this.router.navigateByUrl('/session')
  }
}
