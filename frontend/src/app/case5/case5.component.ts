import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-case5',
  templateUrl: './case5.component.html',
  styleUrls: ['./case5.component.css']
})
export class Case5Component implements OnInit {

  input = '';
  safeInput: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  setSafe() {
    this.safeInput = this.sanitizer.bypassSecurityTrustHtml(this.input);
  }
}
