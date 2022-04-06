import { Routes } from '@angular/router'

import {
  EventsListComponent,
  CreateEventComponent,
  EventDetailsComponent,
  CreateSessionComponent
} from './app/events/index'

import { EventsListResolver } from './app/events/events-list-resolver.service'

export const appRoutes:Routes = [
	{ path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
	{ path: 'events', component: EventsListComponent, resolve: { events:EventsListResolver } },
	{ path: 'events/:id', component: EventDetailsComponent },
	{ path: 'events/sessions/new', component: CreateSessionComponent },
	{ path: '', redirectTo: '/events', pathMatch: 'full' },

	{ 
		path: 'user', 
		loadChildren: () => import('./app/user/user.module').then(m => m.UserModule) 
	}
]