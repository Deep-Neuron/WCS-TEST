import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';

//Services
import { ApiService } from '../../../model/services/api.service';

@Component({
  selector: 'app-request-new-student',
  templateUrl: './request-new-student.component.html',
  styleUrls: ['./request-new-student.component.css']
})
export class RequestNewStudentComponent implements OnInit {

	public newStudentForm = new FormGroup({
		nombre: new FormControl('', [ Validators.required, Validators.minLength(10)]),
		patronus: new FormControl('', [ Validators.required, Validators.minLength(5)])
	});	
	get nombre() { return this.newStudentForm.get('nombre'); }
	get patronus() { return this.newStudentForm.get('patronus'); }

	constructor(public apiCtrl: ApiService) { }

	ngOnInit(): void {
		if(this.apiCtrl.verifyStorage()) {
			this.apiCtrl.getLocalData();
		
		}
	
	
	}
	
	/*********************** SUBMIT FORM ***********************/
	onSubmit() {
		if(this.apiCtrl.verifyStorage()) {
			this.apiCtrl.setLocalData(this.newStudentForm.value.nombre, this.newStudentForm.value.patronus);
		
		}
	}	
	
	/*********************** SUBMIT FORM ***********************/
	clear() {
		this.apiCtrl.clearLocalData();
	}	
	
	/*********************** GET ERROR MESSAGE ***********************/
 	getErrorMessageNombre() {
		return this.nombre.hasError('required') ? 'Debe ingresar Nombre' :
			this.nombre.hasError('minlength') ? 'Debe Ingresar un Nombre Válido' :
			'';
	}	
	
	/*********************** GET ERROR MESSAGE ***********************/
 	getErrorMessagePatronus() {
		return this.patronus.hasError('required') ? 'Debe ingresar Patronus' :
			this.patronus.hasError('minlength') ? 'Debe Ingresar un Patronus Válido' :
			'';
	}		

}
