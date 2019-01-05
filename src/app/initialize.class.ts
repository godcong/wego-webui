import {Router} from '@angular/router';
import {AppService} from './app.service';
import {OnInit} from '@angular/core';

export class InitializeClass implements OnInit {


  private router: Router;
  private service: AppService;

  constructor(router: Router, service: AppService) {
    this.router = router;
    this.service = service;
  }


  ngOnInit(): void {
    // setTimeout(() => {
    //   this.router.navigateByUrl('/pages');
    // }, 5000);
    if (!this.service.isInstalled()) {
      console.log('navigate');
      let promise = this.router.navigate(['install']);
      console.log(promise);
      return;
    }
  }

}
