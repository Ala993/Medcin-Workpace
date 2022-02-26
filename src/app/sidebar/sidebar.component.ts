import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NavigationStart, Route, Router } from '@angular/router';
import { Menu } from '../constants/menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems = Menu;
  constructor(
    public router: Router) {
   
  }

  ngOnInit(): void {    
  }

}
