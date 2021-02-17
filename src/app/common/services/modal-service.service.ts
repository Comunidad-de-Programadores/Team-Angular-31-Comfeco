import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ModalTerminosComponent } from '../components/atoms/modal-terminos/modal-terminos.component';
import { IDataDialog } from '../models/data-dialog';

@Injectable()
export class ModalServiceService {
	constructor(private dialog: MatDialog) {}
	dialogRef!: MatDialogRef<ModalTerminosComponent>;

	public open(options: IDataDialog) {
		this.dialogRef = this.dialog.open(ModalTerminosComponent, {
			data: {
				titleModal: options.titleModal,
				contentModal: options.contentModal
			}
		});
	}
	public confirmed(): Observable<any> {
		return this.dialogRef.afterClosed().pipe(
			take(1),
			map((res) => {
				return res;
			})
		);
	}
}
