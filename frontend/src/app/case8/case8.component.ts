import {Component, OnInit} from '@angular/core';
import * as DOMPurify from 'dompurify';

@Component({
  selector: 'app-case8',
  templateUrl: './case8.component.html',
  styleUrls: ['./case8.component.css']
})
export class Case8Component implements OnInit {

  input: string;

  constructor() {
  }

  ngOnInit(): void {
    this.appendScript_secure(document, 'console.log("xss in appendScript_secure")');
    this.appendScript_insecure1(document, 'console.log("xss in appendScript_insecure1")');
    // this.appendScript_insecure2(document, 'console.log("xss in appendScript_insecure2")');
  }

  // False Positive, Skript wird nicht ausgeführt, da es type = application/json ist
  private appendScript_secure(doc: Document, input: string) {
    const state = doc.createElement('script');
    state.type = 'application/json';
    state.innerHTML = input;
    const firstScript = doc.querySelector('script');
    doc.body.insertBefore(state, firstScript);
  }

  // Cross-Site Scripting möglich
  append() {
    this.appendScript_insecure2(document, this.input);
  }

  private appendScript_insecure1(doc: Document, input: string) {
    const state = doc.createElement('script');
    state.innerHTML = input;
    const firstScript = doc.querySelector('script');
    doc.body.insertBefore(state, firstScript);
  }

  private appendScript_insecure2(doc: Document, input: string) {
    const state = doc.createElement('script');
    state.innerHTML = DOMPurify.sanitize(input);
    const firstScript = doc.querySelector('script');
    doc.body.insertBefore(state, firstScript);
  }
}
