import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : String = 'client';
  private _httpService : HttpService;
  public planets : any;

  constructor(_httpService : HttpService) {
    this._httpService = _httpService;
    console.log("hello from the constructor");
    const observable : Observable<any> = this._httpService.getPlanets();
    observable.subscribe( res => {
      this.planets = res;
    });
  }

}
