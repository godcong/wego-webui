import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [PagesComponent, DashboardComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
}
