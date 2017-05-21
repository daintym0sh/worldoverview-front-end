import { Component, OnInit } from '@angular/core';
import { CountryDataService } from 'app/country-data.service'

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html', providers: [CountryDataService],
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

	greeting: String;

	constructor(private countryDataService: CountryDataService){
	this.countryDataService.getGreeting().subscribe(
		greetingMessage => {this.greeting = greetingMessage.id + "  " + greetingMessage.content;}
		);
}

  ngOnInit() {
  }

}
