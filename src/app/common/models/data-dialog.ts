export interface IDataDialog {
	titleModal: string;
	contentModal: string;
	buttonsModal: IButton[];
}

export interface IButton {
	value: string;
	close: boolean;
}
