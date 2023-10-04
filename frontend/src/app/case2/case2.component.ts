import {Component, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

/**
 * @source URL Parameter im Pfad
 * @sink   innerHTML
 * @url    URL über welche die Komponente erreichbar ist
 * **Exploit**:
 * * **Schritt 1:** Aufruf der Webseite mit Payload: {url}/%3Cimg%20src%3D%22aaaa%22%20onerror%3D%22javascript%3Aalert%281%29%22%3E
 * * **Schritt 2:** Initialisierung der Variable mit Payload in Zeile 23
 * * **Schritt 3:** Einfügen des Payloads in dem DOM mittels innerHTML in Zeile 28
 */
@Component({
  selector: 'app-case2',
  templateUrl: './case2.component.html',
  styleUrls: ['./case2.component.css']
})
export class Case2Component {

  @ViewChild('idElement') idElement: ElementRef;
  id: string;
  proof = 'Aufruf der Webseite mit Payload: {url}/%3Cimg%20src%3D%22aaaa%22%20onerror%3D%22javascript%3Aalert%281%29%22%3E';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });
  }

  ngAfterViewInit(): void {
    this.idElement.nativeElement.innerHTML = this.id;
  }

}
