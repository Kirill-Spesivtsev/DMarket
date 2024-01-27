import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BadRequestComponent } from './core/error-pages/bad-request/bad-request.component';
import { ServerErrorComponent } from './core/error-pages/server-error/server-error.component';
import { NotFoundComponent } from './core/error-pages/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path: "", component: HomeComponent, data: {breadcrumb: "Home"}},
  {path: "error", loadChildren: () => import("./core/error-pages/error.module").then(m => m.ErrorModule)},
  {path: "error/not-found", component: NotFoundComponent},
  {path: "error/bad-request", component: BadRequestComponent},
  {path: "error/server-error", component: ServerErrorComponent},
  {path: "shop", loadChildren: () => import("./shop/shop.module").then(m => m.ShopModule), data: {breadcrumb: "Shop"}},
  {path: "account", loadChildren: () => import("./account/account.module").then(m => m.AccountModule)},
  {path: "basket", loadChildren: () => import("./basket/basket.module").then(m => m.BasketModule)},
  {path: "**", redirectTo: "", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
