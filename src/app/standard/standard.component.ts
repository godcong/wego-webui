import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent implements OnInit {

  databases = ['Mysql', 'Sqlite', 'Postgre'];

  constructor() {
  }

  ngOnInit() {
  }

}
