import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialAngularModule } from './material-angular/material-angular.module';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SharedsModule } from './shareds/shareds.module';
//import { ReusableTableComponent } from './shareds/reusable-table/reusable-table.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
	FormsModule,
    ReactiveFormsModule,
	MaterialAngularModule,
	AppRoutingModule,
	HttpClientModule,
	SharedsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
