import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';


@NgModule({
  declarations: [PagesComponent],

  imports: [
    BrowserModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
}
