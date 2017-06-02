import { 
	Component,
	EventEmitter,
	Input,
	Output
} from '@angular/core';
import { Country } from '../country.model';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {

	@Input() countryList: Country[];

	@Output() onCountrySelected: EventEmitter<Country>;

	private currentCountry: Country;

	constructor() { 
		this.onCountrySelected = new EventEmitter(); 
		this.countryList = [
			new Country("code","name",123),
			new Country("code2","name2",456)
		];
		this.currentCountry = new Country("none","none",0);
	}

	clicked(country: Country): void {
		this.currentCountry = country;
		this.onCountrySelected.emit(country);
	}

	isSelected(country: Country): boolean {
		if(!country || !this.currentCountry){
			return false;
		}
		return country.code == this.currentCountry.code;
	}
}
