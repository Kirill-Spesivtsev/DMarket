import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './error-handling/not-found/not-found.component';
import { ServerErrorComponent } from './error-handling/server-error/server-error.component';
import { BadRequestComponent } from './error-handling/bad-request/bad-request.component';



@NgModule({
  declarations: [
    NavBarComponent,
    NotFoundComponent,
    ServerErrorComponent,
    BadRequestComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavBarComponent,
    NotFoundComponent,
    ServerErrorComponent,
    BadRequestComponent,
  ]
})
export class CoreModule { }
