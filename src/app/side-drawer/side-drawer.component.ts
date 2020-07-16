import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss']
})
export class SideDrawerComponent implements OnInit {

  @Input()
  isVisible: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {

  }

}
