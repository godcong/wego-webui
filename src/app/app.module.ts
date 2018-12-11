import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule, MatExpansionModule, MatFormFieldModule, MatGridListModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { OfficialAccountComponent } from './official-account/official-account.component';
import { HeaderComponent } from './header/header.component';
import localeZh from '@angular/common/locales/zh-Hans';
import {registerLocaleData} from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { ConfigComponent } from './config/config.component';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localeZh, 'zh-Hans');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    OfficialAccountComponent,
    HeaderComponent,
    PaymentComponent,
    ConfigComponent
  ],
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
