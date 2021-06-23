import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
   apiUrl = environment.apiUrl;
   constructor(private http: HttpClient) {
   }

   getData(): Observable<any> {
      return this.http.get<any>(this.apiUrl, {});
   }

   postData(obj): Observable<any> {
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('mode', obj.mode);
      return this.http.post<any>(this.apiUrl + '?mode=' + obj.mode, {});
   }

}