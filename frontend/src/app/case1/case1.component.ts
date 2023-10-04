import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProfilesService} from "../profiles.service";

/**
 * @source ActivatedRoute.queryParams
 * @sink   ElementRef.nativeElement.innerHTML
 * @url    URL über welche die Komponente erreichbar ist
 *
 * Schritt 1: Aufruf der Webseite mit Payload: {url}?username=<img%20src%3D"aaa"%20onerror%3D"javascript:alert(1)">
 * Schritt 2: Initialisierung der Variable mit Payload in Zeile 23
 * Schritt 3: Rendern des Payloads mittels innerHTML in Zeile 28
 */

@Component({
  selector: 'app-case1',
  templateUrl: './case1.component.html',
  styleUrls: ['./case1.component.css']
})
export class Case1Component implements AfterViewInit, OnInit {

  @ViewChild('usernameElement') usernameElement: ElementRef;
  profileData: { bio: string; image: string; }
  username: string;

  constructor(private route: ActivatedRoute, private profileService: ProfilesService, private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.usernameElement.nativeElement.innerHTML = this.username;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.profileData = this.profileService.getProfile(params.username);
      this.username = params.username;
      if (this.usernameElement) {
        this.usernameElement.nativeElement.innerHTML = this.username;
      }
    });
  }

  update() {
    this.cd.detectChanges();
  }
}
