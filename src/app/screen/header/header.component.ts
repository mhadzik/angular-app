import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output()
  toggle = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit(): void {
  }

  toggleDrawer() {
    this.toggle.emit();
  }

}
