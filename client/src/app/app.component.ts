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
  public newPlanet: any = {};
  public errors: any = {};
  public error2s: any = {};
  public isUpdating: Boolean = false;
  public onePlanet : any = {};

  constructor(_httpService : HttpService) {
    this._httpService = _httpService;
    this.fetchPlanets();
  }

  fetchPlanets() {
    const observable : Observable<any> = this._httpService.getPlanets();
    observable.subscribe( res => {
      this.planets = res.reverse();
    });
  }

  addPlanet() {
    console.log(this.newPlanet);
    let planetObservable : Observable<any> = this._httpService.createPlanet(this.newPlanet);
    planetObservable.subscribe( res => {
      if(res.errors) {
        console.log(res.errors);
        this.errors = res.errors;
      } else {
        this.newPlanet = {};
        this.fetchPlanets();
      }
    });
    return false;
  }

  edit(_id) {
    let observable = this._httpService.getOnePlanet(_id);
    observable.subscribe( res => {
      this.onePlanet = res;
      this.isUpdating = true;
    });
  }

  updatePlanet(_id) {
    let observable = this._httpService.updatePlanet(_id, this.onePlanet);
    observable.subscribe( res => {
      console.log(res);
      if(res['errors']) {
        this.error2s = res['errors'];
      } else {
        this.isUpdating = false;
        this.fetchPlanets();
      }
    });
  }

  cancel() {
    this.isUpdating = false;
  }

}
