import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { from } from 'rxjs';

//DAO
import { Characters } from '../dao/characters.dao';
import { Student } from '../dao/student.dao';

//Services
import { ParamService } from './param.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



	// URL WEB
	rootConex: string = 'http://hp-api.herokuapp.com/api/';
	charactersConex: string = '/api/characters/house/';
	studentsConex: string = '/api/characters/students';
	
	public dataLocal: any[] = [];
	

	constructor(private HTTP: HttpClient, public paramCtrl: ParamService) { }
	
	/************************ GET Characters ****************************************/ 
	getCharactersHouse(houseName: string): Observable<Characters[]> {
		return this.HTTP.get<Characters[]>(this.charactersConex+houseName);	
	}	
	
	/************************ GET Students ****************************************/ 
	getStudents(): Observable<Student[]> {
		return this.HTTP.get<Student[]>(this.studentsConex);	
	}
	
	
	/************************ Verify suppoort browser storage ****************************************/ 
	verifyStorage(): boolean {
		let result = false;
		if (typeof(Storage) !== "undefined") {
			// LocalStorage disponible
			alert('LocalStorage disponible');
			result = true;
		} else {
			// LocalStorage no soportado en este navegador
			alert('LocalStorage no soportado en este navegador');
		}		
		return result;
			
	}	
	
	/************************ Get local Data ****************************************/ 
	getLocalData()  {
		
		try {
			let retrievedData = localStorage.getItem(this.paramCtrl.labelStorage);
			if(retrievedData !== null) {
				this.dataLocal = JSON.parse(retrievedData);
				console.log(this.dataLocal);
			} 		
		} catch(e) {
			alert('falla en recuperar local data');
		}	
				

	}

	/************************ set local Data ****************************************/ 
	setLocalData(n: string, p: string) {
		
		try {
			let item = <any>{};
			item ["name"] = n;
			item ["patronus"] = p;
			this.dataLocal.push(item);
			console.log(JSON.stringify(this.dataLocal));
			localStorage.setItem(this.paramCtrl.labelStorage, JSON.stringify(this.dataLocal));
			alert('Valores exitosamente almacenados localmente');
		} catch(e) {
			alert('Valores fallaron en ser almacenados localmente');
		}	
		
	}

	
	/************************ Clear local Data ****************************************/ 
	clearLocalData() {
		localStorage.clear();
		this.dataLocal = [];
		alert('Data Local exitosamente eliminada');
	}



	
}
