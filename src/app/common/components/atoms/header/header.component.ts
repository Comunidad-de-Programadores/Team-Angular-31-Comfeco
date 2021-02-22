import { Component } from '@angular/core';
import { HeaderService } from '@team31/services/header.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	constructor(public headerService: HeaderService) {}
}
