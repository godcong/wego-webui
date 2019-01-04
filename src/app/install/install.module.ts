import {NgModule} from '@angular/core';
import {InstallComponent} from './install.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule, MatListModule,
  MatStepperModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {InstallRoutingModule} from './install-routing.module';


@NgModule({
  declarations: [InstallComponent],

  imports: [
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule,
    InstallRoutingModule
  ]
})
export class InstallModule {
}
