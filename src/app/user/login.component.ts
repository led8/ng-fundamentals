import { Component } from '@angular/core'

import { Router } from '@angular/router'

import { AuthService } from './auth.service'

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
	userName
	userPassword

	constructor(private authService:AuthService, private router:Router){

	}

	login(formValues){
		this.authService.longinUser(formValues.userName, formValues.userPassword)
		this.router.navigate(['/events'])
	}
}