import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-case13',
  templateUrl: './case13.component.html',
  styleUrls: ['./case13.component.css']
})
export class Case13Component implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: any) => {
      setInterval(queryParams.input, 5000);
    });
  }

}
