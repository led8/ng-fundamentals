import { Component, Input, OnChanges } from '@angular/core';

import { ISession } from '../shared/index'

@Component({
	selector: `session-list`,
	templateUrl: './sessions-list.component.html'
})

export class SessionsListComponent implements OnChanges {
	@Input() sessions:ISession[]
	@Input() filterBy:string
	filteredSessions:ISession[] = []

	ngOnChanges(){
		if (this.sessions){
			this.filterSessions(this.filterBy)
		}
	}

	filterSessions(filter){
		if (filter === "All") {
			this.filteredSessions = this.sessions.slice(0)
		} else {
			this.filteredSessions = this.sessions.filter(session => { return session.level === filter })
		}
	}
}