import { Component, OnInit } from '@angular/core';

//Services
import { ApiService } from '../../../model/services/api.service';

//DAO
import { Teacher } from '../../../model/dao/teacher.dao';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

	theTeachers: Teacher[];

	constructor(public apiCtrl: ApiService) { }

	ngOnInit(): void {
		this.getTeachersList();
	}
	
	/*********************** GET TEACHERS LIST ***********************/
	getTeachersList() {
		this.apiCtrl.getTeachers().pipe(
		).subscribe(
			res => { // success path
				this.theTeachers = res;
				this.theTeachers.sort((a,b) => a.name.localeCompare(b.name));
				console.log(this.theTeachers);
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
