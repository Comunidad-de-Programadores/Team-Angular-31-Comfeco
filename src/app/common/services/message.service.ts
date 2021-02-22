import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarPositionHorizontal, SnackBarPositionVertical } from '../models/types';
@Injectable({
	providedIn: 'root'
})
export class MessageService {
	SNACKBAR_TYPE_ERROR = 2;
	SNACKBAR_TYPE_INFO = 1;

	constructor(private _snackBar: MatSnackBar) {}

	openInfo(
		message: string,
		horizontal: SnackBarPositionHorizontal,
		vertical: SnackBarPositionVertical,
		duration?: number
	): void {
		this.showSnackBar(message, horizontal, vertical, this.SNACKBAR_TYPE_INFO, duration);
	}

	openError(
		message: string,
		horizontal: SnackBarPositionHorizontal,
		vertical: SnackBarPositionVertical,
		duration?: number
	): void {
		this.showSnackBar(message, horizontal, vertical, this.SNACKBAR_TYPE_ERROR, duration);
	}

	private showSnackBar(
		message: string,
		horizontal: SnackBarPositionHorizontal,
		vertical: SnackBarPositionVertical,
		type: number,
		duration?: number
	) {
		if (!duration) duration = 2000;

		this._snackBar.open(message, '', {
			duration: duration,
			horizontalPosition: horizontal,
			verticalPosition: vertical,
			panelClass: type === 1 ? 'snackbar-info' : 'snackbar-error'
		});
	}
}
