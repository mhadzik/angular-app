import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notification } from '../../../shared/notification.model'

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.scss']
})
export class MenuOptionComponent implements OnInit {

  @Input()
  notification: Notification
  notLiked: String = '../../assets/images/heart-icon.png'
  isLiked: String = '../../assets/images/heart-icon-red.png'

  @Output()
  delete = new EventEmitter<any>();

  moveChange() {
    this.notification.isMoved = !this.notification.isMoved
  }

  likeChange() {
    this.notification.isLiked = !this.notification.isLiked
  }


  deleteItem() {
    this.delete.emit()
  }

  constructor() {

  }

  ngOnInit(): void {

  }


}
