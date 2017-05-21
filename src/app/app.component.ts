import { Component } from '@angular/core';
import { GreetingComponent } from 'app/greeting/greeting.component'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', providers: [GreetingComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'app works!';

}
