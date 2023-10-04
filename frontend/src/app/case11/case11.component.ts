import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-case11',
  templateUrl: './case11.component.html',
  styleUrls: ['./case11.component.css']
})
export class Case11Component implements OnInit {

  dangerousInput: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: any) => {
        this.dangerousInput = queryParams.input;
        eval(this.dangerousInput);
      });
  }
}
