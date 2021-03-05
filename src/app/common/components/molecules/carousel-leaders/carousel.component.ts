import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { ITeamLeaderItem } from '@team31/models/interfaces/team-leader-item.interface';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
	@ViewChild('myCarousel') myCarousel: NguCarousel<unknown> | undefined;
	// @Input() type: string | undefined;
	@Input() carouselItems: Array<ITeamLeaderItem> | undefined;
	name = 'Angular';
	slideNo = 0;
	withAnim = true;
	resetAnim = true;
	// carouselItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	carouselConfig: NguCarouselConfig = {
		grid: { xs: 1, sm: 3, md: 3, lg: 4, xl: 4, all: 0 },
		// gridBreakpoints: { sm: 768, md: 992, lg: 1200, xl: 1400 },
		slide: 4,
		interval: { timing: 3000, initialDelay: 1000 },
		loop: true,
		touch: true,
		velocity: 0.2,
		load: 4
		// animation: 'lazy'
	};
	constructor(private cdr: ChangeDetectorRef) {}

	ngAfterViewInit(): void {
		this.cdr.detectChanges();
	}

	moveTo(slide: number): void {
		this.myCarousel?.moveTo(slide, !this.withAnim);
	}
}
