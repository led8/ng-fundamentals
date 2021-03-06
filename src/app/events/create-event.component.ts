import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { EventService } from './shared/event.service';

@Component({
	templateUrl: './create-event.component.html',
	styles: [`
		em { float:right; color:red; padding-left: 10px }
    .error input { background: #E3C3C5 }
	`]
})

export class CreateEventComponent {
	newEvent:any
	isDirty:boolean = true
	
	constructor(private router:Router, private eventService:EventService){}

	cancel(){
		this.router.navigate(['/events'])
	}

	saveEvent(formValues){
		this.eventService.saveEvent(formValues)
		this.isDirty = false
		this.router.navigate(['/events'])
	}
}