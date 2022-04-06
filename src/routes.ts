import { Routes } from '@angular/router';

import { EventsListComponent } from './app/events/events-list.component';
import { CreateEventComponent } from './app/events/create-event.component'; 
import { EventDetailsComponent } from './app/events/event-details/event-details.component';

export const appRoutes:Routes = [
	{ path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
	{ path: 'events', component: EventsListComponent },
	{ path: 'events/:id', component: EventDetailsComponent },
	{ path: '', redirectTo: '/events', pathMatch: 'full' }
]