import { Component } from '@angular/core';

import { AuthService } from '../user/auth.service'
import { EventService } from '../events/shared/event.service'

import { ISession } from '../events/shared/event.model';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav { font-size:15px }
    #searchForm { margin-right:10px }
    li > a.active { color: orange }
  `]
})

export class NavBarComponent {
  searchTerm:string = ""
  foundSessions:ISession[] = []

  constructor(public authService:AuthService, private eventService:EventService){

  }

  searchSessions(searchTerm){
    this.foundSessions = this.eventService.searchSessions(searchTerm)
    return this.foundSessions
  }
}