import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    @Inject('URL_API') private urlApi: string,
    private http: HttpClient
  ) { }

  SendData(data:any) {
    return this.http.post(this.urlApi, data)
  }
}
