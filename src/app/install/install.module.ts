import {NgModule} from '@angular/core';
import {InstallComponent} from './install.component';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatStepperModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {InstallRoutingModule} from './install-routing.module';

@NgModule({
  declarations: [InstallComponent],
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
