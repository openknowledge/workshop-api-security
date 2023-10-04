import {Component, OnInit} from '@angular/core';
import {PICTURE_LOCALSTORAGE_KEY} from "../constants";

@Component({
  selector: 'app-case7',
  templateUrl: './case7.component.html',
  styleUrls: ['./case7.component.css']
})
export class Case7Component implements OnInit {

  url: any;

  constructor() {
  }

  ngOnInit(): void {
    this.url = localStorage.getItem(PICTURE_LOCALSTORAGE_KEY);
  }

  assign() {
    window.location.assign(this.url);
  }
}
