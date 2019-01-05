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
    // setTimeout(() => {
    //   this.router.navigate(['/pages']);
    // }, 5000);
    // if (!this.service.isInstalled()) {
    //   console.log("navigate");
    //   this.router.navigate(['/install']);
    // }
  }
}
