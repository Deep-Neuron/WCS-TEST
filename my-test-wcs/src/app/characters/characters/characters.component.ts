import { Component, OnInit } from '@angular/core';

//Services
import { ApiService } from '../../../model/services/api.service';
import { ParamService } from '../../../model/services/param.service';
import { UtilService } from '../../../common/util.service';

//DAO
import { Characters } from '../../../model/dao/characters.dao';

//Class
import { GlobalConstants } from '../../../common/global-constants';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

	selectedOptionHouseName: string = '';
	responseSelect: string = '';
	theCharacters: Characters[];
	myGlobalConstants: GlobalConstants = new GlobalConstants();
	

	constructor(public apiCtrl: ApiService, public utilCtrl: UtilService, public paramCtrl: ParamService) { 
		
	}

	ngOnInit(): void {
		
		
	}
	
	/*********************** GET HOUSE NAME LIST ***********************/
	getHouseName(val: string) {
		this.responseSelect = val;
		let charactersTMP: Characters[] = [];
		this.apiCtrl.getCharactersHouse(val).pipe(
		).subscribe(
			res => { // success path
				charactersTMP = res;
				this.theCharacters = this.utilCtrl.sortArray(charactersTMP);
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
