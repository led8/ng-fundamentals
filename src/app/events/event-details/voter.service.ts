import { Injectable } from '@angular/core';

import { ISession } from '../shared/index'

@Injectable()
export class VoterService  {
	
	addVoter(session:ISession,userName:string){
		session.voters.push(userName)
	}

	deleteVoter(session:ISession,userName:string){
		let index:number = session.voters.indexOf(userName)

		if (index > -1) {
		  session.voters.splice(index, 1);
		}
	}
}
