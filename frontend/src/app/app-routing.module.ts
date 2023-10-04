import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Case1Component} from "./case1/case1.component";
import {Case2Component} from "./case2/case2.component";
import {Case3Component} from "./case3/case3.component";
import {Case4Component} from "./case4/case4.component";
import {Case5Component} from "./case5/case5.component";
import {Case6Component} from "./case6/case6.component";
import {Case7Component} from "./case7/case7.component";
import {Case8Component} from "./case8/case8.component";
import {Case9Component} from "./case9/case9.component";
import {Case10Component} from "./case10/case10.component";
import {Case11Component} from "./case11/case11.component";
import {Case12Component} from "./case12/case12.component";
import {Case13Component} from "./case13/case13.component";
import {Case14Component} from "./case14/case14.component";
import {Case15Component} from "./case15/case15.component";
import {Case16Component} from "./case16/case16.component";

const routes: Routes = [
  {
    path: 'cases',
    children: [{
      path: 'case-1',
      component: Case1Component
    }, {
      path: 'case-2/:id',
      component: Case2Component
    }, {
      path: 'case-3',
      children: [{
        path: 'profile',
        component: Case3Component
      },
        {
          path: '',
          redirectTo: 'profile', // Empty path will redirect to content route.
          pathMatch: 'full'
        }]
    }, {
      path: 'case-4',
      component: Case4Component
    }, {
      path: 'case-5',
      component: Case5Component
    }, {
      path: 'case-6',
      component: Case6Component
    }, {
      path: 'case-7',
      component: Case7Component
    }, {
      path: 'case-8',
      component: Case8Component
    }, {
      path: 'case-9',
      component: Case9Component
    }, {
      path: 'case-10',
      component: Case10Component
    }, {
      path: 'case-11',
      component: Case11Component
    }, {
      path: 'case-12',
      component: Case12Component
    }, {
      path: 'case-13',
      component: Case13Component
    }, {
      path: 'case-14',
      component: Case14Component
    }, {
      path: 'case-15',
      component: Case15Component
    }, {
      path: 'case-16',
      component: Case16Component
    }, {
      path: 'case-17',
      component: Case16Component
    }]
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
