import { Injectable } from '@angular/core';
import {HttpClientModule,Headers} from '@angular/common/http';
import { RequestOptions } from 'https';
@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  constructor(private http:HttpClientModule) { }

  getHeaders(){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
  getRequestOption():RequestOptions {
    const options = new RequestOptions();
    options.headers = this.getHeaders();

    return options;
  }
  get(url:string){
    return this.http.get(url, this.getRequestOption());
  }
  post(url:string, data:any){
    return this.http.get(url,data,this.getRequestOption());
  }
}
