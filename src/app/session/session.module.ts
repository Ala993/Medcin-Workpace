import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';



import { SessionRoutes } from './session.routing';
import { LoginoneComponent } from './loginone/loginone.component';
import { NgxWebstorageModule } from 'ngx-webstorage';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(SessionRoutes),
        NgxWebstorageModule.forRoot(),
    ],
   declarations: [
      LoginoneComponent
   ]
})

export class SessionDemoModule {}
