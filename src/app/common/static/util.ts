import { TypeActivity } from '@team31/models/types';

export class Util {
	static getDescriptionActivity(nameActivity: string, typeActivity: TypeActivity): string {
		const activity = `Te has unido al ${typeActivity} ${nameActivity}`;
		return activity;
	}
}
