import {LOCALE_ID, NgModule} from '@angular/core';
import {InstallComponent} from './install.component';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatStepperModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {InstallRoutingModule} from './install-routing.module';
import {APP_BASE_HREF, registerLocaleData} from '@angular/common';
import localeZh from '@angular/common/locales/zh-Hans';

registerLocaleData(localeZh, 'zh-Hans');

@NgModule({
  declarations: [InstallComponent],
  providers: [
    {provide: LOCALE_ID, useValue: 'zh-Hans'},
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
  imports: [
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    InstallRoutingModule
  ]
})
export class InstallModule {
}
