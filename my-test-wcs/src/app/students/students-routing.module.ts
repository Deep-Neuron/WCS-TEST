import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students/students.component';
import { RequestNewStudentComponent } from './request-new-student/request-new-student.component';
import { RequestsListComponent } from './requests-list/requests-list.component';

const routes: Routes = [
	{ path: '', component: StudentsComponent },
	{ path: 'list', component: StudentsComponent },
	{ path: 'request', component: RequestNewStudentComponent },
	{ path: 'requestPending', component: RequestsListComponent }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
