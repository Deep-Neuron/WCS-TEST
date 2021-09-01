import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CharactersRoutingModule } from './characters-routing.module';

import { MaterialAngularModule } from '../material-angular/material-angular.module';
import { SharedsModule } from '../shareds/shareds.module';


@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
	FormsModule,
    ReactiveFormsModule,
    CharactersRoutingModule,
	MaterialAngularModule,
	SharedsModule
  ]
})
export class CharactersModule { }
