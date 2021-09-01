import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu'
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';



@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatMenuModule,
		MatSliderModule,
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatSelectModule,
		MatTableModule		
	],
	exports: [
		MatMenuModule,
		MatSliderModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatSelectModule,
		MatTableModule
	]
})
export class MaterialAngularModule { }
