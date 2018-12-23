import {NgModule} from '@angular/core';
// import {CommonModule} from '@angular/common';
import {InstallComponent} from './install.component';
import {MatCardModule, MatStepperModule} from '@angular/material';

@NgModule({
  declarations: [InstallComponent],
  imports: [
    // CommonModule,
    MatCardModule,
    MatStepperModule
  ]
})
export class InstallModule {
}
