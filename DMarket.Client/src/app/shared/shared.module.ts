import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input/text-input.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { StepperComponent } from './stepper/stepper.component';
import { BasketSummaryComponent } from './basket-summary/basket-summary.component';

@NgModule({
  declarations: [
    TextInputComponent,
    OrderSummaryComponent,
    StepperComponent,
    BasketSummaryComponent,
    //BasketSummaryComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(), 
    RouterModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    CdkStepperModule
  ],
  exports: [
    PaginationModule,
    ReactiveFormsModule,
    TextInputComponent,
    CarouselModule,
    OrderSummaryComponent,
    CdkStepperModule,
    StepperComponent,
    //BasketSummaryComponent
  ]
  
})
export class SharedModule { }
