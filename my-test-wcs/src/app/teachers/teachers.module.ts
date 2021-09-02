import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers/teachers.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TeachersRoutingModule } from './teachers-routing.module';

import { MaterialAngularModule } from '../material-angular/material-angular.module';
import { SharedsModule } from '../shareds/shareds.module';



@NgModule({
  declarations: [TeachersComponent],
  imports: [
    CommonModule,
	FormsModule,
    ReactiveFormsModule,
    TeachersRoutingModule,
	MaterialAngularModule,
	SharedsModule
  ]
})
export class TeachersModule { }
