import { Component, Input, OnChanges } from '@angular/core';

import { ISession } from '../shared/index'

import { AuthService } from '../../user/auth.service'
import { VoterService } from './voter.service'

@Component({
	selector: `session-list`,
	templateUrl: './sessions-list.component.html'
})

export class SessionsListComponent implements OnChanges {
	@Input() sessions:ISession[]
	@Input() filterBy:string
	filteredSessions:ISession[] = []

	constructor(private auth:AuthService, private voterService:VoterService){}

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

	toggleVote(session:ISession){
		if(this.userHasVoted(session)){
			this.voterService.deleteVoter(session,this.auth.currentUser.userName)
		} else {
			this.voterService.addVoter(session,this.auth.currentUser.userName)
		}
	}

	userHasVoted(session:ISession){
		if(this.auth.currentUser){
			return session.voters.includes(this.auth.currentUser.userName)
		} else {
			return false
		}
	}

	userLoged(){
		return this.auth.currentUser
	}
}