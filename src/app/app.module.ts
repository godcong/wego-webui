import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './pages/navbar/navbar.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatCardModule,
  MatInputModule,
  MatOptionModule, MatSelectModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FooterComponent} from './pages/footer/footer.component';
import {OfficialAccountComponent} from './pages/official-account/official-account.component';
import {HeaderComponent} from './pages/header/header.component';
import localeZh from '@angular/common/locales/zh-Hans';
import {registerLocaleData} from '@angular/common';
import {PaymentComponent} from './pages/payment/payment.component';
import {AppRoutingModule} from './app-routing.module';
import {MiniProgramComponent} from './pages/mini-program/mini-program.component';
import {StandardComponent} from './pages/standard/standard.component';
import {FormsModule} from '@angular/forms';
import {InstallModule} from './install/install.module';
import { PagesComponent } from './pages/pages.component';

registerLocaleData(localeZh, 'zh-Hans');

@NgModule({
  declarations: [
  PagesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    InstallModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
