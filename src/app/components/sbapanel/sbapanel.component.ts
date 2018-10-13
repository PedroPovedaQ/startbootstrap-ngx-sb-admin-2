import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'sba-panel',
	templateUrl: './sbapanel.component.html'
})
export class SBAPanelComponent implements OnInit {
	@Input() headerText;
	@Input() footerText;
	constructor() {}

	ngOnInit() {}
}
