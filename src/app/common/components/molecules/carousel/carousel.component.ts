import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
	@ViewChild('myCarousel') myCarousel: NguCarousel<any> | undefined;

	name = 'Angular';
	slideNo = 0;
	withAnim = true;
	resetAnim = true;
	carouselItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	carouselConfig: NguCarouselConfig = {
		grid: { xs: 1, sm: 1, md: 1, lg: 5, all: 0 },
		slide: 1,
		interval: { timing: 4000, initialDelay: 1000 },
		loop: false,
		touch: true,
		velocity: 0.2
	};
	constructor(private cdr: ChangeDetectorRef) {}

	ngAfterViewInit(): void {
		this.cdr.detectChanges();
	}

	reset(): void {
		this.myCarousel?.reset(!this.resetAnim);
	}

	moveTo(slide: number): void {
		this.myCarousel?.moveTo(slide, !this.withAnim);
	}
}
