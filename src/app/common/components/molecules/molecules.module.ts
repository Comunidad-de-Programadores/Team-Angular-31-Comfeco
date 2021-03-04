import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NguCarouselModule } from '@ngu/carousel';
import { CarouselComponent } from './carousel-leaders/carousel.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [CarouselComponent],
	imports: [NguCarouselModule, CommonModule],

	exports: [CarouselComponent],
	providers: []
})
export class MoleculesModule {}
