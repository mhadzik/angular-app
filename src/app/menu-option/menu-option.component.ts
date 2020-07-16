import { Component, OnInit, Input } from '@angular/core';
import { Notification } from '../shared/notification.model'

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.scss']
})
export class MenuOptionComponent implements OnInit {

  @Input()
  notification: Notification


  moveChange() {
    this.notification.isMoved = !this.notification.isMoved
  }
  constructor() {

  }

  ngOnInit(): void {

  }


}
