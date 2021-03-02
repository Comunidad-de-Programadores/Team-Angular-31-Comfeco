import { Pipe, PipeTransform } from '@angular/core';
import { ITeamLeaderItem } from '@team31/models/interfaces/team-leader-item.interface';

@Pipe({
	name: 'image'
})
export class ImagePipe implements PipeTransform {
	transform(teamLeader: ITeamLeaderItem): string {
		return teamLeader.image;
	}
}
