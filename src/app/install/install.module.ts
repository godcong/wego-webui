import {NgModule} from '@angular/core';
// import {CommonModule} from '@angular/common';
import {InstallComponent} from './install.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [InstallComponent],
  imports: [
    // CommonModule,
    MatCardModule,
  ]
})
export class InstallModule {
}
