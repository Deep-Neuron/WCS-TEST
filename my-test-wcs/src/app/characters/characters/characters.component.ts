import { Component, OnInit } from '@angular/core';

//Services
import { ParamService } from '../../../model/services/param.service';
import { ApiService } from '../../../model/services/api.service';

//DAO
import { Characters } from '../../../model/dao/characters.dao';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

	selectedOptionHouseName: string = '';
	theCharacters: Characters[];
	

	constructor(public paramCtrl: ParamService,
		public apiCtrl: ApiService) { 
		
	}

	ngOnInit(): void {
		
		
	}
	
	/*********************** UPDATE LANGUAGE APP ***********************/
	getHouseName(val: string) {
		this.apiCtrl.getCharactersHouse(val).pipe(
		).subscribe(
			res => { // success path
				this.theCharacters = res;
				this.theCharacters.sort((a,b) => a.name.localeCompare(b.name));
				console.log(this.theCharacters);
			},
			error => {
				console.log(error); // error path
			},
			() => {  // complete callback
				console.log('complete callback');
			}
		);			
	
	}

}
