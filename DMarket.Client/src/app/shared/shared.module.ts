import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaginationModule.forRoot(), 
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    PaginationModule,
    ReactiveFormsModule
  ]
  
})
export class SharedModule { }
