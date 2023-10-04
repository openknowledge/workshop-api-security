import {Component, OnInit} from '@angular/core';
import {PICTURE_LOCALSTORAGE_KEY} from "../constants";

@Component({
  selector: 'app-case6',
  templateUrl: './case6.component.html',
  styleUrls: ['./case6.component.css']
})
export class Case6Component implements OnInit {

  dangerousUrl: string;
  name = "Hacker Kitty";
  editing = false;

  constructor() {
  }

  ngOnInit(): void {
    let website = localStorage.getItem(PICTURE_LOCALSTORAGE_KEY);
    if (website) {
      this.dangerousUrl = website;
    }
  }

  saveImageUrl() {
    localStorage.setItem(PICTURE_LOCALSTORAGE_KEY, this.dangerousUrl);
    this.editing = false;
  }

  navigate() {
    let input = localStorage.getItem(PICTURE_LOCALSTORAGE_KEY);
    if (input) {
      window.location.href = input;
    }
  }
}
