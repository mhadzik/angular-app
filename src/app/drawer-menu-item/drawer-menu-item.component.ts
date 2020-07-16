import { Component, OnInit, Input } from '@angular/core';
import { MenuBar } from '../shared/menuBar.model'

@Component({
  selector: 'app-drawer-menu-item',
  templateUrl: './drawer-menu-item.component.html',
  styleUrls: ['./drawer-menu-item.component.scss']
})
export class DrawerMenuItemComponent implements OnInit {
  @Input()
  menuBar: MenuBar

  constructor() { }

  ngOnInit(): void {
  }

}
