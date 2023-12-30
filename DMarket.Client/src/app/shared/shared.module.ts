import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaginationModule.forRoot(), 
    RouterModule
  ],
  exports: [
    PaginationModule
  ]
  
})
export class SharedModule { }
