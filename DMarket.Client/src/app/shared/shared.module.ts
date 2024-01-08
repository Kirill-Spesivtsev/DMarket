import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input/text-input.component';


@NgModule({
  declarations: [
    TextInputComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(), 
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    PaginationModule,
    ReactiveFormsModule,
    TextInputComponent
  ]
  
})
export class SharedModule { }
