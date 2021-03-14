import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ISubMenu } from './../../models/profile.interface';

@Component({
	selector: 'app-sub-menu',
	templateUrl: './sub-menu.component.html',
	styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
	@Output() clickMenu = new EventEmitter<ISubMenu>();

	menuSelected = false;
	listSubMenu: ISubMenu[] = [];

	ngOnInit(): void {
		this.listSubMenu = [
			{
				pathImage: 'assets/svg/profile_submenu.svg',
				name: 'Mi Perfil',
				select: false
			},
			{
				pathImage: 'assets/svg/insignia_submenu.svg',
				name: 'Insignias',
				select: false
			},
			{
				pathImage: 'assets/svg/team_submenu.svg',
				name: 'Grupos',
				select: false
			},
			{
				pathImage: 'assets/svg/calendar_submenu.svg',
				name: 'Eventos',
				select: false
			}
		];
	}

	onClickMenu(menu: ISubMenu): void {
		this.listSubMenu.forEach((menu) => (menu.select = false));
		menu.select = true;
		this.clickMenu.emit(menu);
	}
}
