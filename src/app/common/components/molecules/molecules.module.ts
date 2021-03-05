import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NguCarouselModule } from '@ngu/carousel';
import { AtomModule } from '@team31/components-atoms/atoms.module';
import { CarouselComponent } from './carousel-leaders/carousel.component';
import { MenuCommunityComponent } from './menu-community/menu-community.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [CarouselComponent, MenuCommunityComponent],
	imports: [NguCarouselModule, CommonModule, AtomModule, MatIconModule],

	exports: [CarouselComponent, MenuCommunityComponent],
	providers: []
})
export class MoleculesModule {}
