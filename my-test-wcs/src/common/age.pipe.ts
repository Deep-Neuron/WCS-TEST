import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

	currentTime = new Date();
	// returns the year (four digits)
	year = this.currentTime.getFullYear();
	age = 0;

  //transform(value: unknown, ...args: unknown[]): unknown {
  //  return null;
  //}

	transform(value: any, ...args: any[]): number {
				
		try{
			
			if (typeof(value) === 'string') {
				// Guess what, it's a bloody number!
				this.age = 0;
			} else if (isNaN(value)) {
				// It is not a number
				this.age = 0;
			} else {
				this.age = this.year - value;
			} 
		
	
		
		} catch(e) {

			this.age = 0;
		}

		
		return this.age;
	}  
  
  
}
