import { Component, Input } from '@angular/core';
import { IGroups } from 'src/app/pages/principal/profile-page/common/models/group.interface';

@Component({
	selector: 'app-card-group',
	templateUrl: './card-group.component.html',
	styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent {
	@Input() group: IGroups = <IGroups>{};
}
