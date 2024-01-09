import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input/text-input.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    TextInputComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(), 
    RouterModule,
    ReactiveFormsModule,
    CarouselModule.forRoot()
  ],
  exports: [
    PaginationModule,
    ReactiveFormsModule,
    TextInputComponent,
    CarouselModule
  ]
  
})
export class SharedModule { }
