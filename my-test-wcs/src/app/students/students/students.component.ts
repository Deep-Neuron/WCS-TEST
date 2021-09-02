import { Component, OnInit } from '@angular/core';

//Services
import { ApiService } from '../../../model/services/api.service';

//DAO
import { Student } from '../../../model/dao/student.dao';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

	theStudents: Student[];

	constructor(public apiCtrl: ApiService) { }

	ngOnInit(): void {
		this.getStudentsList();
	}
	
	/*********************** GET STUDENTS LIST ***********************/
	getStudentsList() {
		this.apiCtrl.getStudents().pipe(
		).subscribe(
			res => { // success path
				this.theStudents = res;
				this.theStudents.sort((a,b) => a.name.localeCompare(b.name));
				console.log(this.theStudents);
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
