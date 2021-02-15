import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDataDialog } from '@team31/models/data-dialog';

@Component({
	selector: 'app-modal-terminos',
	templateUrl: './modal-terminos.component.html',
	styleUrls: ['./modal-terminos.component.scss']
})
export class ModalTerminosComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data: IDataDialog) {}
}
