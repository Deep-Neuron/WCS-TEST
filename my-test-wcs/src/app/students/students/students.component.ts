import { Component, OnInit } from '@angular/core';

//Services
import { ApiService } from '../../../model/services/api.service';
import { UtilService } from '../../../common/util.service';

//DAO
import { Student } from '../../../model/dao/student.dao';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

	theStudents: Student[];

	constructor(public apiCtrl: ApiService, public utilCtrl: UtilService) { }

	ngOnInit(): void {
		this.getStudentsList();
	}
	
	/*********************** GET STUDENTS LIST ***********************/
	getStudentsList() {
		let studentsTMP: Student[] = [];
		this.apiCtrl.getStudents().pipe(
		).subscribe(
			res => { // success path
				studentsTMP = res;
				this.theStudents = this.utilCtrl.sortArray(studentsTMP);
				//this.theStudents.sort((a,b) => a.name.localeCompare(b.name));
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
