import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService } from './auth.service'

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float:right; color:red; padding-left: 10px }
    .error input { background: #E3C3C5 }
  `]
})

export class ProfileComponent implements OnInit {
  profileForm:FormGroup
  private firstName:FormControl
  private lastName:FormControl

  constructor(private authService:AuthService, private router:Router){

  }

  ngOnInit(){
    this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required)
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
    
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  cancel(){
    this.router.navigate(['/events'])
  }

  saveProfile(formValues){
    if (this.profileForm.valid){
      this.authService.updateUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['/events'])
    }
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }
}


