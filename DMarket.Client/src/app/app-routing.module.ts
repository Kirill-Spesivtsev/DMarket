import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BadRequestComponent } from './core/error-handling/bad-request/bad-request.component';
import { ServerErrorComponent } from './core/error-handling/server-error/server-error.component';
import { NotFoundComponent } from './core/error-handling/not-found/not-found.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "not-found", component: NotFoundComponent},
  {path: "bad-request", component: BadRequestComponent},
  {path: "server-error", component: ServerErrorComponent},
  {path: "shop", loadChildren: () => import("./shop/shop.module").then(m => m.ShopModule)},
  {path: "account", loadChildren: () => import("./account/account.module").then(m => m.AccountModule)},
  {path: "**", redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
