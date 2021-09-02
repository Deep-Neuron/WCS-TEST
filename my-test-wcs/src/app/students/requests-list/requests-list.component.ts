import { Component, OnInit } from '@angular/core';

//Services
import { ApiService } from '../../../model/services/api.service';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css']
})
export class RequestsListComponent implements OnInit {

	theRequestsStudents: any[];

	constructor(public apiCtrl: ApiService) { }

	ngOnInit(): void {
		if(this.apiCtrl.verifyStorage()) {
			this.apiCtrl.getLocalData();
			
		}
	}
	


}
