import { Component } from '@angular/core';
import { Calendar } from '../models/calendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 

export class AppComponent {
  calendar: Calendar = new Calendar(new Date(2018, 7, 23), 30, '');
  
  title: String = 'calendar';
}
