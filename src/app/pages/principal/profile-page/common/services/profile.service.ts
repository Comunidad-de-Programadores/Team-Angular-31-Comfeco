import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IEvents, IInsignia } from '@team31/models/interfaces/profile-module.interface';
import { Observable } from 'rxjs';
import { IGroups } from '../models/group.interface';

@Injectable()
export class ProfileService {
	constructor(private _fireStore: AngularFirestore) {}

	getEvents(): Observable<IEvents[]> {
		return this._fireStore.collection<IEvents>('events').valueChanges();
	}

	getGroups(): Observable<IGroups[]> {
		return this._fireStore.collection<IGroups>('groups').valueChanges();
	}

	getInsignias(): Observable<IInsignia[]> {
		return this._fireStore.collection<IInsignia>('insignia').valueChanges();
	}
}
