import {NgModule} from '@angular/core';
import {InstallComponent} from './install.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule, MatListModule, MatOptionModule, MatSelectModule,
  MatStepperModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {InstallRoutingModule} from './install-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [InstallComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    ReactiveFormsModule,
    InstallRoutingModule
  ]
})
export class InstallModule {
}
