import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { EventService } from './shared/event.service';

import { IEvent } from './shared/event.model';

@Component({
  selector: 'events-list',
  template:  `
  	<div>
		 	<h1>Upcoming Angular Events List</h1>
		 	<hr>
		 	<div class="row">
		 		<div *ngFor="let theEvent of events" class="col-md-5">
		 			<event-thumbnail [event]="theEvent"></event-thumbnail>
		 		</div>
		 	</div>
		</div>
  `
})

export class EventsListComponent implements OnInit {
	events:IEvent

	constructor(private eventService: EventService, private route:ActivatedRoute){}

	ngOnInit(){
		this.events = this.route.snapshot.data['events']
	}
}