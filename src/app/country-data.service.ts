import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryDataService {

  constructor(private http: Http) { }

	getCountries(){
		return this.http.get('http://api.geonames.org/countryInfoJSON?formatted=true&username=jmeier&style=full')  // '/greeting/'
					.map(getResponse => getResponse.json());
	}
}
