import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'wechat-pages',
  template: `
    <wechat-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </wechat-sample-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
