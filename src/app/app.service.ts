import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  // private http: HttpClient;

  isInstalled(): boolean {
    return false;
  }

  constructor() {
    // this.http = http;
  }


}
