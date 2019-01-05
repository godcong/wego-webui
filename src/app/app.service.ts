import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  // private http: HttpClient;

  static isInstalled(): boolean {
    return true;
  }

  constructor() {
    // this.http = http;
  }


}
