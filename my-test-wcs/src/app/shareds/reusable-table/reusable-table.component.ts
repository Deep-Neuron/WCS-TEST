import { Component, OnInit, Input } from '@angular/core';

//DAO
import { Characters } from '../../../model/dao/characters.dao';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css']
})
export class ReusableTableComponent implements OnInit {


	@Input() items: Characters[] = [];
	displayedColumns: string[] = ['name', 'patronus', 'yearOfBirth', 'image'];

	constructor() { }

	ngOnInit(): void {
		
	}

}
