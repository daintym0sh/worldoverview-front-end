import { Component, OnInit } from '@angular/core';
import { Country } from '../country.model';
import { CountryDataService } from 'app/country-data.service'
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [CountryDataService]
})
export class MapComponent implements OnInit {

	private countryList: Country[] = []
	private latlngBounds 

	private currentCountry: Country;


	constructor(private countryDataService: CountryDataService, private mapsAPILoader: MapsAPILoader) { 
			
		this.countryDataService.getCountries().subscribe(
			countries => {countries.geonames.forEach(
				country => this.countryList.push(new Country(country.countryName, country.north, country.south, country.east, country.west)));}
		)
			
		this.currentCountry = new Country("none",42.65604389629997,42.42849259876837,1.7865427778319827,1.4071867141112762)
	    	this.mapsAPILoader.load().then(() => {
            this.latlngBounds = new window['google'].maps.LatLngBounds(
            	new window['google'].maps.LatLng(42.42849259876837, 1.4071867141112762),
            	new window['google'].maps.LatLng(42.65604389629997, 1.7865427778319827))}
        )
	}

	ngOnInit() {
	}

	private change(value: any): void{
		var north = this.currentCountry.getNorth()
		var south = this.currentCountry.getSouth()
		var east = this.currentCountry.getEast()
		var west = this.currentCountry.getWest()

    	this.mapsAPILoader.load().then(() => {
            this.latlngBounds = new window['google'].maps.LatLngBounds(
            	new window['google'].maps.LatLng(south, west),
            	new window['google'].maps.LatLng(north, east))}
        )
	}
}
