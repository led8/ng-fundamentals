import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service'

@Component({
	selector:'simple-modal',
	template:`
		<div id="simple_modal" #simplemodal class="modal fade" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">
							<span>&times;</span>
						</button>
						<h4 class="modal-title">{{title}}</h4>
					</div>

					<div class="modal-body" (click)="closeModal()">
						<ng-content></ng-content>
					</div>
				</div>
			</div>
		</div>
	`
})

export class SimpleModalComponent {
	@Input() title:string
	@ViewChild('simplemodal') containerEl: ElementRef

	constructor(@Inject(JQ_TOKEN) private $:any){
	}

	closeModal(){
		this.$(this.containerEl.nativeElement).modal('hide')
	}
}