import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { from } from 'rxjs';

//DAO
import { Characters } from '../dao/characters.dao';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



	// URL WEB
	rootConex: string = 'http://hp-api.herokuapp.com/api/';
	charactersConex: string = '/api/characters/house/';

	constructor(private HTTP: HttpClient) { }
	
	/************************ GET LOGIN WEB ****************************************/ 
	getCharactersHouse(houseName: string): Observable<Characters[]> {
		return this.HTTP.get<Characters[]>(this.charactersConex+houseName);	
	}	
}
