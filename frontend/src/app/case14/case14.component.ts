import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-case14',
  templateUrl: './case14.component.html',
  styleUrls: ['./case14.component.css']
})
export class Case14Component implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: any) => {
      let a = Function(queryParams.input);
      a();
    });
  }
}
