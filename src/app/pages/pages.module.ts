import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [PagesComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
}
