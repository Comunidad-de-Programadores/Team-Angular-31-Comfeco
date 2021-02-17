import { Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDataDialog } from '../../../models/data-dialog';

@Component({
	selector: 'app-modal-terminos',
	templateUrl: './modal-terminos.component.html',
	styleUrls: ['./modal-terminos.component.scss']
})
export class ModalTerminosComponent {
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: IDataDialog,
		private mdDialogRef: MatDialogRef<ModalTerminosComponent>
	) {}

	public cancel(): void {
		this.close(false);
	}

	private close(value: boolean): void {
		this.mdDialogRef.close(value);
	}

	public confirm(): void {
		this.close(true);
	}

	@HostListener('keydown.esc')
	public onEsc(): void {
		this.close(false);
	}
}
