import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NguCarouselModule } from '@ngu/carousel';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [CarouselComponent],
	imports: [NguCarouselModule],

	exports: [CarouselComponent],
	providers: []
})
export class MoleculesModule {}
