import {Component, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-case3',
  templateUrl: './case3.component.html',
  styleUrls: ['./case3.component.css']
})
export class Case3Component {

  @ViewChild('usernameElement') usernameElement: ElementRef;
  username: string;
  proof = 'Aufruf der Webseite mit Payload: {url}#%3Cimg%20src%3D%22aaaa%22%20onerror%3D%22javascript%3Aalert%281%29%22%3E';

  constructor(private route: ActivatedRoute) {
    this.route.fragment.subscribe((fragment: any) => {
        this.username = fragment;
      });
  }

  ngAfterViewInit(): void {
    this.usernameElement.nativeElement.innerHTML = this.username;
  }
}
