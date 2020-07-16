import { Component, OnInit, Input } from '@angular/core';
import { MenuBar } from '../../../../shared/menu-bar.model'



@Component({
  selector: 'app-drawer-menu-item',
  templateUrl: './drawer-menu-item.component.html',
  styleUrls: ['./drawer-menu-item.component.scss']
})
export class DrawerMenuItemComponent implements OnInit {
  @Input()
  menuBar: MenuBar


  mailVisible = false;

  showMails() {
    if (this.menuBar.imgPath == '../../assets/images/mail-icon.png') {
      this.mailVisible = !this.mailVisible
      this.menuBar.isOpen = !this.menuBar.isOpen
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
