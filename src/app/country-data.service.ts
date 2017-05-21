import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryDataService {

  constructor(private http: Http) { }

	getGreeting(){
		return this.http.get('/greeting/')
					.map(res => res.json());
	}
}
