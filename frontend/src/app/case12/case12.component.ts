import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-case12',
  templateUrl: './case12.component.html',
  styleUrls: ['./case12.component.css']
})
export class Case12Component implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: any) => {
        setTimeout(queryParams.input, 5000);
      });
  }
}

