import { Component, OnInit, Input } from '@angular/core';
import { MenuBar } from '../shared/menuBar.model'
@Component({
  selector: 'app-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['./drawer-menu.component.scss']
})
export class DrawerMenuComponent implements OnInit {


  menuBars: MenuBar[] = [
    new MenuBar('../../assets/images/mail-icon.png', 'Mail Inbox', 5),
    new MenuBar('../../assets/images/friends-icon.png', 'Friends', 25),
    new MenuBar('../../assets/images/plane-icon.png', 'Invites', 1),
    new MenuBar('../../assets/images/v-icon.png', 'Bookmarks', 0),
    new MenuBar('../../assets/images/settings-icon.png', 'Account Settings', 0)


  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.menuBars)
  }

}
