import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PaymentComponent} from './payment/payment.component';
import {OfficialAccountComponent} from './official-account/official-account.component';
import {MiniProgramComponent} from './mini-program/mini-program.component';
import {StandardComponent} from './standard/standard.component';

const routes: Routes = [
  {path: 'payment', component: PaymentComponent},
  {path: 'officialAccount', component: OfficialAccountComponent},
  {path: 'miniProgram', component: MiniProgramComponent},
  {path: 'standard', component: StandardComponent},
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: false})
  ]
})
export class AppRoutingModule {
}
