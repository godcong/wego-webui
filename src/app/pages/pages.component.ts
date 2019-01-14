import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pages',
  // template: '<router-outlet></router-outlet>',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log('PagesComponent');
  }

}
