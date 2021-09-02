import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
	{ path: 'characters', loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule) },
	{ path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
	{ path: 'teachers', loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule) },

	//{ path: 'perceptrons', loadChildren: () => import('./perceptrons/perceptrons.module').then(m => m.PerceptronsModule) },
	//{ path: 'adalines', loadChildren: () => import('./adalines/adalines.module').then(m => m.AdalinesModule) },
	//{ path: 'config', component: ConfigComponent },
	//{ path: 'figure2-component', component: Figure2Component },
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
	RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
