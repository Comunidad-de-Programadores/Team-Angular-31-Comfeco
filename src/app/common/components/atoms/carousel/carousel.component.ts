import { Component, OnInit } from '@angular/core';
/* import * as Glide from '@glidejs/glide'; */
/* import Glide from '@glidejs/glide'; */

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
	/* glide: Glide | undefined; */

	ngOnInit(): void {
		console.log('hola');
		/* this.glide = new Glide('.glide', {
			type: 'carousel'
		}).mount(); */
	}
}
