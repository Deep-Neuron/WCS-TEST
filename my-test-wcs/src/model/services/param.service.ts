import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamService {


	housesName: any[] = [
		{value: 'slytherin', viewValue: 'slytherin'},
		{value: 'gryffindor', viewValue: 'gryffindor'},
		{value: 'ravenclaw', viewValue: 'ravenclaw'},
		{value: 'hufflepuff', viewValue: 'hufflepuff'}
	];
	constructor() { }
}
