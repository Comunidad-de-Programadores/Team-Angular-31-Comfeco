import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IGroups } from '../models/group.interface';
import { IEvents } from '../models/profile.interface';

@Injectable()
export class ProfileService {
	constructor(private _fireStore: AngularFirestore) {}

	getEvents(): Observable<DocumentChangeAction<IEvents>[]> {
		return this._fireStore.collection<IEvents>('events').snapshotChanges();
	}

	getGroups(): Observable<IGroups[]> {
		return this._fireStore.collection<IGroups>('groups').valueChanges();
	}
}
