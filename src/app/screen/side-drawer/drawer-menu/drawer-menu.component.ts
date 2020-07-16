import { Component, OnInit } from '@angular/core';
import { MenuBar } from '../../../shared/menu-bar.model'


@Component({
  selector: 'app-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['./drawer-menu.component.scss']
})
export class DrawerMenuComponent implements OnInit {


  menuBars: MenuBar[] = [
    new MenuBar('../../assets/images/mail-icon.png', 'Mail Inbox', 2, false),
    new MenuBar('../../assets/images/friends-icon.png', 'Friends', 8, false),
    new MenuBar('../../assets/images/plane-icon.png', 'Invites', 1, false),
    new MenuBar('../../assets/images/v-icon.png', 'Bookmarks', 0, false),
    new MenuBar('../../assets/images/settings-icon.png', 'Account Settings', 0, false)


  ]






  constructor() { }

  ngOnInit(): void { }

}
