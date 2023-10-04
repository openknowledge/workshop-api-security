import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'xss-benchmark-spa';

  navigation = [{
    path: '/cases/case-1',
    name: 'Fall 1',
    subtitle: '',
    queryParams: {username: 'Tyson'},
  }, {
    path: '/cases/case-2/1',
    name: 'Fall 2',
    subtitle: '',
  }, {
    path: '/cases/case-3',
    name: 'Fall 3',
    subtitle: '',
    fragment: "Wilfred Warrior"
  }, {
    path: '/cases/case-4',
    name: 'Fall 4',
    subtitle: '',
  }, {
    path: '/cases/case-5',
    name: 'Fall 5',
    subtitle: '',
  }, {
    path: '/cases/case-6',
    name: 'Fall 6',
    subtitle: ''
  }, {
    path: '/cases/case-7',
    name: 'Fall 7',
    subtitle: ''
  }, {
    path: '/cases/case-8',
    name: 'Fall 8',
    subtitle: ''
  }, {
    path: '/cases/case-9',
    name: 'Fall 9',
    subtitle: ''
  }, {
    path: '/cases/case-10',
    name: 'Fall 10',
    subtitle: ''
  }, {
    path: '/cases/case-11',
    name: 'Fall 11',
    subtitle: ''
  }, {
    path: '/cases/case-12',
    name: 'Fall 12',
    subtitle: ''
  }, {
    path: '/cases/case-13',
    name: 'Fall 13',
    subtitle: ''
  }, {
    path: '/cases/case-14',
    name: 'Fall 14',
    subtitle: ''
  }, {
    path: '/cases/case-15',
    name: 'Fall 15',
    subtitle: ''
  }, {
    path: '/cases/case-16',
    name: 'Fall 16',
    subtitle: ''
  }];

}
