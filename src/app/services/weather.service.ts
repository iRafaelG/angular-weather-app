import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  OWAPI_KEY: string = 'your api key'
  URI: string = '';

  constructor(private httpClient: HttpClient) {
    this.URI = `http://api.openweathermap.org/data/2.5/weather?APPID=${this.OWAPI_KEY}&units=metric&q=`
  }

  getWeather(cityName: string, countryCode: string) {
    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`)
  }
}
