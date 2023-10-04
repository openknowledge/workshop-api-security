import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SpaServerService} from "../spa-server.service";

@Component({
  selector: 'app-case15',
  templateUrl: './case15.component.html',
  styleUrls: ['./case15.component.css']
})
export class Case15Component implements OnInit {

  @ViewChild('message') message: ElementRef;
  search = '';

  constructor(private serverService: SpaServerService) {
  }

  ngOnInit(): void {}

  findProfile() {
    this.serverService.findProfileByUsername(this.search).subscribe(response => {
      this.message.nativeElement.innerHTML = response.message
    });
  }
}
