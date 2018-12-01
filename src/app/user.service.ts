import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private user = 'godcong';
  private account = 'account info';

  getUser() {
    return this.user;
  }

  getAccount() {
    return this.account;
  }

  constructor() {
  }
}
