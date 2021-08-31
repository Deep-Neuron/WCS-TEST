import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu'
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatMenuModule,
		MatSliderModule,
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatSelectModule	
	],
	exports: [
		MatMenuModule,
		MatSliderModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatSelectModule
	]
})
export class MaterialAngularModule { }
