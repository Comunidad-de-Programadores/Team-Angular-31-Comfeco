import { Injectable } from '@angular/core';
import { IEvents } from '@team31/models/interfaces/profile-module.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChannelEventsService {
	private subject = new BehaviorSubject<IEvents>(<IEvents>{});
	channel$ = this.subject.asObservable();

	sendEvent(event: IEvents): void {
		this.subject.next(event);
	}
}
