import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  isVisible = false
  constructor() { }


  ngOnInit(): void {
  }

  toggleSideDrawer() {
    this.isVisible = !this.isVisible
  }
}
