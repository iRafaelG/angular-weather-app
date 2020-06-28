import { Component, OnInit } from '@angular/core';

import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  weather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {

  }

  getWeather(city: string, country: string) {
    this.weatherService.getWeather(city, country)
    .subscribe(
      res => {console.log(res); this.weather = res},
      err => console.log(err)
    );
  }

  submitLocation(city: HTMLInputElement, country: HTMLInputElement) {
    if(city.value && country.value) {
      this.getWeather(city.value, country.value);
      city.value = '';
      country.value = '';
      
    } else {
      alert('Please, insert any values');
    }
    city.focus();
    return false;
  }
}
