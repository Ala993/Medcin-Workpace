import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutes, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { DashBoardComponent } from './core/dashboard/dash-board/dash-board.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './core/dashboard/chart/chart.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AuthInterceptor } from './services/auth/auth.interceptor';
import { AuthGuard } from './services/auth/auth.guard';
import { SocialAuthService } from 'angularx-social-login';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes, {useHash: true, enableTracing: false, initialNavigation: 'disabled' }),
    MatSidenavModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatIconModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    SharedModule,
    NgxWebstorageModule.forRoot(),
    
  ],
  providers: [
   
    {
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
