import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css']
})
export class AppButtonComponent implements OnInit {
  clicked = false;
  constructor() { }

  ngOnInit(): void {
  }

}
