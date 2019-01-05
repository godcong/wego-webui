import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
}
