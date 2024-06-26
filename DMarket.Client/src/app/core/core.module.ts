import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component';
import { BadRequestComponent } from './error-pages/bad-request/bad-request.component';
import { ToastrModule } from 'ngx-toastr';
import { UnauthorizedComponent } from './error-pages/unauthorized/unauthorized.component';
import { ForbiddenComponent } from './error-pages/forbidden/forbidden.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    NavBarComponent,
    NotFoundComponent,
    ServerErrorComponent,
    BadRequestComponent,
    UnauthorizedComponent,
    ForbiddenComponent,
    PageHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-left",
      preventDuplicates: true
    }),
    BreadcrumbModule, 
    NgxSpinnerModule
  ],
  exports:[
    NavBarComponent,
    NotFoundComponent,
    ServerErrorComponent,
    BadRequestComponent,
    PageHeaderComponent,
    NgxSpinnerModule
  ]
})
export class CoreModule { }
