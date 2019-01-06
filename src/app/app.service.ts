import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  private http: HttpClient;

  isInstalled(): boolean {
    return true;
    this.http.get('v0/inited').subscribe(function (data: any) {
      if (data != null && data['Code'] == 0) {
        console.log(data);
        return true;
      }
    });
    return false;
  }

  constructor(http: HttpClient) {
    this.http = http;
  }


}
