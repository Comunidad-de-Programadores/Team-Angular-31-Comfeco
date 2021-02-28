import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
	@ViewChild('myCarousel') myCarousel: NguCarousel<any>;

	name = 'Angular';
	slideNo = 0;
	withAnim = true;
	resetAnim = true;
	carouselItems = [1, 2, 3, 4, 5, 6, 7, 8];
	carouselConfig: NguCarouselConfig = {
		grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
		slide: 3,
		interval: { timing: 4000, initialDelay: 1000 },
		loop: false,
		touch: true,
		velocity: 0.2
	};
	constructor(private cdr: ChangeDetectorRef) {}

	ngAfterViewInit() {
		this.cdr.detectChanges();
	}

	reset() {
		this.myCarousel.reset(!this.resetAnim);
	}

	moveTo(slide) {
		this.myCarousel.moveTo(slide, !this.withAnim);
	}
}
