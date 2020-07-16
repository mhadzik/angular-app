import { Component, OnInit } from '@angular/core';
import { Notification } from '../../shared/notification.model'


@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.scss']
})
export class MenuOptionsComponent implements OnInit {
  notifications: Notification[] = [
    new Notification('../../assets/images/phone-icon.png', '1 minute ago', 'Mike | Creative Mints', 'Mechanical Grasshopper', false, false),
    new Notification('../../assets/images/weather-icon.png', '21 minutes ago', 'Dash', 'Assistant App - Weather Module', false, false),
    new Notification('../../assets/images/preview-icon.png', '31 minutes ago', 'Ghulam', 'Upcoming web agency', false, false),
    new Notification('../../assets/images/download-icon.png', '2 hours ago', 'Bill S Kenney', 'Bamboo Branding Wall Piecie - not flat', false, false)


  ]

  onDelete(index) {
    this.notifications.splice(index, 1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
