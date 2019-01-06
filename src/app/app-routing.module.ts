import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {InstallComponent} from './install/install.component';
import {PagesComponent} from './pages/pages.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
// import {PaymentComponent} from './payment/payment.component';
// import {OfficialAccountComponent} from './official-account/official-account.component';
// import {MiniProgramComponent} from './mini-program/mini-program.component';
// import {StandardComponent} from './standard/standard.component';
// import {InstallComponent} from './install/install.component';

const routes: Routes = [
  {
    path: 'webui',
    component: AppComponent,
    children: [{
      path: 'install',
      component: InstallComponent,
    }, {
      path: 'pages',
      component: PagesComponent,
    },]
  },
  {path: '', redirectTo: 'webui/install', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: true,
};

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, config)
  ]
})
export class AppRoutingModule {
}
