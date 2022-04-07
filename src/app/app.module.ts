import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'

import {
  EventsListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventDetailsComponent,
  CreateSessionComponent,
  SessionsListComponent,
  CollapsibleWellComponent,
  EventService,
  ToastrService,
  EventsListResolver,
  DurationPipe,
} from './events/index'

import { AuthService } from './user/auth.service'

import { appRoutes } from '../routes'

@NgModule({
  declarations: [
    EventsAppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionsListComponent,
    EventDetailsComponent,
    CollapsibleWellComponent,
    DurationPipe,
  ],
  providers: [
    EventService,
    ToastrService,
    EventsListResolver,
    AuthService,
    {
      provide: "canDeactivateCreateEvent", 
      useValue: checkDirtyState
    }
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if (component.isDirty)
    return window.confirm('You have not saved this event, are you sure?')
  return true
}
