import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  private getBaseUrl(): string {
    return 'https://wttr.in';
  }

  getCityWeather(city: string) {
    const formattedCity = city.replace(/ /g, '+').toLowerCase();
    return this.http.get(`${this.getBaseUrl()}/${formattedCity}?format=j1`);
  }
}
