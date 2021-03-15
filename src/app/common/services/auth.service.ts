import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IUserProfile } from '@team31/models/interfaces/user-profile.interface';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
	constructor(private _authService: AngularFireAuth, private _fireStore: AngularFirestore) {}

	usersCollection: AngularFirestoreCollection<IUserProfile> | undefined;

	singInWithEmailAndPassword(
		email: string,
		password: string
	): Promise<firebase.auth.UserCredential> {
		return this._authService.signInWithEmailAndPassword(email, password);
	}

	sendPasswordResetEmail(email: string): Promise<void> {
		return this._authService.sendPasswordResetEmail(email);
	}

	verifyPasswordresetCode(actionCode: string): Promise<string> {
		return this._authService.verifyPasswordResetCode(actionCode);
	}

	confirmPasswordReset(actioncode: string, newPassword: string): Promise<void> {
		return this._authService.confirmPasswordReset(actioncode, newPassword);
	}

	createUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
		return this._authService.createUserWithEmailAndPassword(email, password);
	}

	async createProfileData(username: string): Promise<void> {
		const currentUser = await this._authService.currentUser;
		void currentUser?.updateProfile({
			displayName: username
		});
		const uid = currentUser?.uid;
		const tutorialsRef = this._fireStore.collection('users').doc(uid);
		void tutorialsRef.set({
			profile: {
				uid,
				nick: username,
				email: currentUser?.email
			}
		});
	}

	logout(): void {
		void this._authService.signOut();
	}

	loadProfileData(uid: string): Observable<IUserProfile[]> {
		this.usersCollection = this._fireStore.collection<IUserProfile>('users', (ref) =>
			ref.where('uid', '==', uid).limit(1)
		);

		return this.usersCollection.valueChanges();
	}
	updateProfileData(uid: string, data: IUserProfile): void {
		const profileData = this._fireStore.collection('users').doc(uid);
		void profileData.update(data);
	}

	test(uid: string): void {
		// const tutorialsRef = this._fireStore.collection('users').doc('xddd');
		// // console.log(tutorialsRef);
		// const tutorial = { nick: 'zkoder Tutorial', url: 'bezkoder.com/zkoder-tutorial' };
		// void tutorialsRef.set({
		// 	...tutorialsRef,
		// });

		const tutorialsRef = this._fireStore.collection('users');
		// void tutorialsRef.doc('xddd').update({ title: 'zkoder new Tut#1' });
		// void tutorialsRef.doc('xddd').delete();
		void tutorialsRef.doc(uid.toString()).update({
			nick: 'StilDavila',
			email: 'kevin@comfeco.com',
			gender: 1,
			dateB: '06-21-1998',
			country: 1,
			area: 1,
			facebook: 'facebook.com',
			github: 'github.com',
			linkedin: 'linkedin.com',
			twitter: 'twitter.com',
			biography: 'bio'
		});
	}

	async verifyPassword(password: string): Promise<firebase.auth.UserCredential | undefined> {
		const currentUser = await this._authService.currentUser;
		if (currentUser && currentUser.email) {
			const validated = await currentUser.reauthenticateWithCredential(
				firebase.auth.EmailAuthProvider.credential(currentUser.email, password)
			);
			return validated;
		}
		return undefined;
	}

	async updatePassword(newPassword: string): Promise<void> {
		const currentUser = await this._authService.currentUser;
		return currentUser?.updatePassword(newPassword);
	}
}
