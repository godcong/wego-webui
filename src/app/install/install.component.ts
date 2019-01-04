import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

interface Database {
  Type: string;
  Host: string;
  User: string;
  Password: string;
  Name: string;
}

interface Administrator {
  UserName: string;
  Password: string;
  Email: string
}

export class PasswordValidation {
  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
    if (password != confirmPassword) {
      console.log('false');
      AC.get('confirmPassword').setErrors({MatchPassword: true});
    } else {
      console.log('true');
      return null;
    }
  }
}

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class InstallComponent implements OnInit {
  db: Database;
  admin: Administrator;
  db_host: string = '127.0.0.1:3306';
  db_user: string = 'root';
  db_passwd: string = '';
  db_name: string = 'wego';
  Types = ['MySQL', 'PostgreSQL', 'MSSQL', 'SQLite3'];
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.db = {
      Type: this.Types[0],
      Host: this.db_host,
      User: this.db_user,
      Password: this.db_passwd,
      Name: this.db_name,
    };
    this.admin = {
      UserName: '',
      Password: '',
      Email: '',
    };
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      ValidatorsType: ['', Validators.required],
      ValidatorsHost: ['', Validators.required],
      ValidatorsUser: ['', Validators.required],
      ValidatorsPassword: ['', Validators.required],
      ValidatorsName: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      ValidatorsAdminUser: ['', Validators.required],
      ValidatorsAdminEmail: ['', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: PasswordValidation.MatchPassword,
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  log() {
    console.log(this.db);
  }

}
