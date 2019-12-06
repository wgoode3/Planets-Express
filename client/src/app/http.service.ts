import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _http : HttpClient;

  constructor(_http : HttpClient) {
    this._http = _http;
  }

  getPlanets() : Observable<any> {
    return this._http.get("/planets");
  }

}
