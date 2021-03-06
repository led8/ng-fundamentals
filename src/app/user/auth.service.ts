import { Injectable } from '@angular/core';

import { IUser } from './user.model'

@Injectable()
export class AuthService {
	currentUser:IUser

	longinUser(userName:string, password:string){
		this.currentUser = {
			id:1,
			userName: userName,
			firstName: 'Lewis',
			lastName: 'HAM'
		}
	}

	isAuthenticated(){
		return this.currentUser
	}

	updateUser(firstName:string, lastName:string){
		this.currentUser = {
			id:1,
			userName: this.currentUser.userName,
			firstName: firstName,
			lastName: lastName
		}
	}
}