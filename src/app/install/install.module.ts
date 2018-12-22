import {NgModule} from '@angular/core';
import {InstallComponent} from './install.component';
import {InstallRoutingModule} from './install-routing.module';

@NgModule({
  declarations: [InstallComponent],
  imports: [
    InstallRoutingModule
  ]
})
export class InstallModule {
}
