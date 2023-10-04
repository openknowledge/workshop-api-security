import {Component, OnInit} from '@angular/core';
import {PICTURE_LOCALSTORAGE_KEY} from "../constants";

@Component({
  selector: 'app-case10',
  templateUrl: './case10.component.html',
  styleUrls: ['./case10.component.css']
})
export class Case10Component implements OnInit {

  dangerousUrl: string;

  constructor() {
  }

  ngOnInit(): void {
    this.dangerousUrl = localStorage.getItem(PICTURE_LOCALSTORAGE_KEY) as string;
  }

  // :( wird nicht erkannt von Snyk
  navigate() {
    window.open(this.dangerousUrl);
  }

}
