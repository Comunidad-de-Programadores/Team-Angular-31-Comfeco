import { Component, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDataDialog } from '@team31/models/data-dialog';
import { ModalTerminosComponent } from '../modal-terminos/modal-terminos.component';

@Component({
	selector: 'app-terminos-condiciones',
	templateUrl: './terminos-condiciones.component.html',
	styleUrls: ['./terminos-condiciones.component.scss']
})
export class TerminosCondicionesComponent {
	@Output() request = false;
	@Input() data: IDataDialog;

	blur = false;

	constructor(public dialog: MatDialog) {
		this.data = {
			titleModal: 'Terminos y Condiciones',
			contentModal: `
                        Al marcar la opción "Acepto las Condiciones de uso" usted está de acuerdo en aceptar los siguientes términos y condiciones ("Condiciones de uso"). Cualquier nueva característica o herramienta que pueda añadirse al actual servicio estarán también sujetas a los términos y condiciones de uso.

                       Utilizando el servicio, usted ha leído estos términos y condiciones y está de acuerdo con ellos. Si usted no está de acuerdo con todos los términos y condiciones, por favor, no utilice el servicio.

                       El Suscriptor declara tener la capacidad de contratar y disponer de autorizaciones y delegaciones necesarias para ello.

                     Comfeco, en adelante Comfeco, se reserva el derecho a actualizar y cambiar los términos de servicio mediante la publicación de actualizaciones y cambios en el servicio web. Se aconseja que compruebe los términos y condiciones de servicio regularmente por si alguna actualización le pueda afectar.`,
			buttonsModal: [
				{ value: 'Aceptar', close: true },
				{ value: 'Cacelar', close: false }
			]
		};
	}

	openDialog(): void {
		this.blur = true;
		const dialogRef = this.dialog.open(ModalTerminosComponent, {
			panelClass: 'modal-terms',
			data: this.data
		});

		dialogRef.afterClosed().subscribe((result: boolean) => {
			this.blur = false;
			if (result) this.request = result;
		});
	}
}
