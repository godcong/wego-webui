import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InstallComponent} from './install.component';

const routes: Routes = [
  {path: '', component: InstallComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstallRoutingModule {
}
