import { Component, OnInit } from '@angular/core';
import Glide from '@glidejs/glide';
@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
	glide: any;

	ngOnInit(): void {
		this.glide = new Glide('.glide', {
			type: 'carousel'
		}).mount();
	}
}
