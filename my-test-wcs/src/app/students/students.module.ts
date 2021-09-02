import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentsRoutingModule } from './students-routing.module';

import { MaterialAngularModule } from '../material-angular/material-angular.module';
import { SharedsModule } from '../shareds/shareds.module';
import { RequestNewStudentComponent } from './request-new-student/request-new-student.component';
import { RequestsListComponent } from './requests-list/requests-list.component';



@NgModule({
  declarations: [StudentsComponent, RequestNewStudentComponent, RequestsListComponent],
  imports: [
    CommonModule,
	FormsModule,
    ReactiveFormsModule,
    StudentsRoutingModule,
	MaterialAngularModule,
	SharedsModule
  ]
})
export class StudentsModule { }
