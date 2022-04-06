import { Component } from '@angular/core'

import { Router } from '@angular/router'

import { AuthService } from './auth.service'

@Component({
  templateUrl: './login.component.html',
  styles: [`
  	em { color: red; margin-left: 150px; }
  `]
})

export class LoginComponent {
	userName
	password
	mouseoverLogin

	constructor(private authService:AuthService, private router:Router){

	}

	login(formValues){
		this.authService.longinUser(formValues.userName, formValues.password)
		this.router.navigate(['/events'])
	}
}