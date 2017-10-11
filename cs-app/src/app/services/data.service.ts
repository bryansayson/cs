import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) { 
  }

  getTags() {
  	return this.http.get('http://cs-mock-timeseries-api.azurewebsites.net/api/Tag')
  		.map(res => res.json());
  }

}