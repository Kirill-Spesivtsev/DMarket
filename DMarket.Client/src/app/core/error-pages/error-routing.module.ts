import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BadRequestComponent } from './bad-request/bad-request.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes: Routes = [
  {path: "not-found", component: NotFoundComponent},
  {path: "bad-request", component: BadRequestComponent},
  {path: "server-error", component: ServerErrorComponent},
  {path: "unauthorized", component: UnauthorizedComponent},
  {path: "forbidden", component: ForbiddenComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ErrorRoutingModule { }
