import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialAngularModule } from '../material-angular/material-angular.module';

import { ReusableTableComponent } from './reusable-table/reusable-table.component';

import { AgePipe } from '../../common/age.pipe';


@NgModule({
  declarations: [ReusableTableComponent, AgePipe],
  imports: [
    CommonModule,
	FormsModule,
    ReactiveFormsModule,
	MaterialAngularModule
  ],
  exports: [
    ReusableTableComponent
  ]
})
export class SharedsModule { }
