import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-case4',
  templateUrl: './case4.component.html',
  styleUrls: ['./case4.component.css']
})
export class Case4Component implements AfterViewInit {

  @ViewChild('usernameElement') usernameElement: ElementRef;
  username: any;
  showInputField: boolean;
  private defaultUsername = "Wilfred Warrior";

  proof= "<img src=\"aaa\" onerror=\"alert(1)\">\n";

  constructor() {
  }

  ngAfterViewInit(): void {
    this.setInnerHTMLDirectFromLocalStorage();
  }

  editUsername() {
    this.showInputField = true;
    const username = localStorage.getItem('case-4-input');
    this.username = username ? username : this.defaultUsername;
  }

  saveInLocalStorage() {
    localStorage.setItem('case-4-input', this.username);
    this.showInputField = false;
    this.setInnerHTMLDirectFromLocalStorage();
  }

  deleteFromLocalStorage() {
    localStorage.removeItem('case-4-input');
    this.setInnerHTMLDirectFromLocalStorage();
  }

  private setInnerHTMLDirectFromLocalStorage() {
    const username = localStorage.getItem('case-4-input');
    this.usernameElement.nativeElement.innerHTML = username ? username : this.defaultUsername;
  }
}
