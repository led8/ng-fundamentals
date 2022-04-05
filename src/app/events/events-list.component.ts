import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template:  `
  	<div>
		 	<h1>Upcoming Angular Events List</h1>
		 	<hr>

		 	<event-thumbnail [event]="eventsList"></event-thumbnail>
		</div>
  `
})

export class EventsListComponent {
	eventsList = {
		id:1,
		name:'Angular Connect',
		date:"9/26/2036",
		time:"10:00 am",
		price:599.99,
		imageUrl:'assets/images/angularconnect-shiled.png',
		location: {
			address:'1057 DT',
			city:'London',
			country:"England"
		}
	}
}