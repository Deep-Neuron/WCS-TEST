import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

	constructor() { }
	
	/*********************** GET HOUSE NAME LIST ***********************/
	sortArray(array: any[]): any[] {
		array.sort((a,b) => a.name.localeCompare(b.name));
		return array;
	}	
}
