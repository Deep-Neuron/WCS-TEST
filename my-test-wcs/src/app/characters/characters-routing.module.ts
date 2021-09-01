import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
	{ path: '', component: CharactersComponent },
	{ path: 'house', component: CharactersComponent }
];


@NgModule({
   imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
