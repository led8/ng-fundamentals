import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
  	<div class="well hoverwell thumbnail">

	 		<h2>{{event?.name}}</h2>

			<div>Date: {{event?.date}}</div>

	 		<div [ngSwitch]="event?.time">
	 			Time: {{event?.time}}
	 			<span *ngSwitchCase="'8:00 am'"> (Early start)</span>
	 			<span *ngSwitchCase="'10:00 am'"> (Late start)</span>
	 			<span *ngSwitchDefault> (Normal start)</span>
	 		</div>

	 		<div>Price: {{event?.price}}$</div>

			<div *ngIf event?.location>
	 			<span>Location: {{event?.location?.address}}</span>
	 			<span>&nbsp;</span>
	 			<span>{{event?.location?.city}}, {{event?.location?.country}}</span>
	 		</div>

	 		<div [hidden]="!event?.onlineUrl">Online URL: {{event?.onlineUrl}}</div>

 		</div>
  `,
  styles: [ `
  	.thumbnail { min-height:210px }
	`]
})

export class EventThumbnailComponent {
	@Input() event:any
}