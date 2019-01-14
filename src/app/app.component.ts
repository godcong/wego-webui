import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  private router: Router;
  private service: AppService;

  constructor(router: Router, service: AppService) {
    this.router = router;
    this.service = service;
  }


  ngOnInit(): void {
    console.log('AppComponent');
    // setTimeout(() => {
    //   this.router.navigateByUrl('/pages');
    // }, 3000);
    // if (!this.service.isInstalled()) {
    //   console.log('navigate');
      // let promise = this.router.navigateByUrl('install');
      // console.log(promise);
      // return;
    // }
  }
}
