import { Component } from '@angular/core';

@Component({
  selector: 'counter-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weeks = 0;
	days = 0;
	hours = 0;
	minutes = 0;
	seconds = 0;

	constructor(){
		var millsInOneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds

		var endDate = new Date(2017,3,30);

		var now = new Date();
		var today19h = new Date();
		this.setTimeTo19(today19h);
		var tomorrow = new Date();
		tomorrow.setTime(now.getTime() + millsInOneDay);
		this.resetDateTo0(tomorrow);

		var diffDays = Math.round((endDate.getTime() - tomorrow.getTime())/(millsInOneDay))+1;

		this.weeks = Math.floor(diffDays / 7);

		var remainingDays = diffDays - this.weeks * 7;

		if (remainingDays >= 2)
			remainingDays -= 2;

		this.days = remainingDays;

		if (now.getHours() < 10){
			this.hours = 8;
		} else if (now.getHours() < 19){
			var diffHours = today19h.getHours() - now.getHours();
			if (now.getMinutes() > 0){
				diffHours -= 1;
				// compute remaining minutes
				this.minutes = 60 - now.getMinutes();
				if (now.getSeconds() > 0){
					this.minutes -= 1;
					this.seconds = 60 - now.getSeconds();
				}
			}

			this.hours = diffHours;
		}
	}

	resetDateTo0(date : Date){
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);

		return date;
	}

	setTimeTo19(date : Date){
		date.setHours(19);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);

		return date;
	}
}
