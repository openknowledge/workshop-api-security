import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {PICTURE_LOCALSTORAGE_KEY} from "../constants";


@Component({
  selector: 'app-case9',
  templateUrl: './case9.component.html',
  styleUrls: ['./case9.component.css']
})
export class Case9Component {

  dangerousUrl: string;


  constructor(@Inject(DOCUMENT) readonly document: Document) {
    this.dangerousUrl = localStorage.getItem(PICTURE_LOCALSTORAGE_KEY) as string;
  }

  navigate() {
    // Reflected XSS
    this.windowOpen1();
  }


  get window(): Window {
    return this.document.defaultView!!;
  }

  // Wird nicht erkannt von Snyk
  windowOpen1() {
    this.window.open(this.dangerousUrl);
  }

}
