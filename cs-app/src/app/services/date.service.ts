import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DateService {

  constructor(public http: Http) { 
  }

  getTags(id, start, end) {
  	let url = 'http://cs-mock-timeseries-api.azurewebsites.net/api/DataPoint/' + id + '?startTS=' + start + '&endTS=' + end;
  	return this.http.get(url)
  		.map(res => res.json());
  }

}