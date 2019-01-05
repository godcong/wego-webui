import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
// import {PaymentComponent} from './payment/payment.component';
// import {OfficialAccountComponent} from './official-account/official-account.component';
// import {MiniProgramComponent} from './mini-program/mini-program.component';
// import {StandardComponent} from './standard/standard.component';
// import {InstallComponent} from './install/install.component';

const routes: Routes = [
  {path: 'install', loadChildren: './install/install.module#InstallModule'},
  {path: 'pages', loadChildren: './pages/pages.module#PagesModule'},
  {path: '', redirectTo: 'pages', pathMatch: 'full'},
  // {path: 'install', component: InstallComponent},
  // {path: 'payment', component: PaymentComponent},
  // {path: 'officialAccount', component: OfficialAccountComponent},
  // {path: 'miniProgram', component: MiniProgramComponent},
  // {path: 'standard', component: StandardComponent},
];

const config: ExtraOptions = {
  useHash: true,
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
