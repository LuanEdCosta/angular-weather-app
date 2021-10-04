import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

type WeatherData = {
  temperatureCelsius: string;
  feelsLikeCelsius: string;
  cloudCoverPercentage: string;
  humidityPercentage: string;
  windSpeedKmh: string;
  country?: string;
};

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  city: string = '';
  weatherData: WeatherData | undefined;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  getWeatherData(city: string) {
    this.weatherService.getCityWeather(city).subscribe((data: any) => {
      const [currentCondition] = data.current_condition;
      if (!currentCondition) return;

      const [nearestArea] = data.nearest_area || [];
      const [firstCountryData] = nearestArea?.country || [];
      const country = firstCountryData?.value;

      this.weatherData = {
        temperatureCelsius: currentCondition.temp_C,
        feelsLikeCelsius: currentCondition.FeelsLikeC,
        cloudCoverPercentage: currentCondition.cloudcover,
        humidityPercentage: currentCondition.humidity,
        windSpeedKmh: currentCondition.windspeedKmph,
        country,
      };
    });
  }

  reload() {
    this.getWeatherData(this.city);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.city = params['city'];
      this.getWeatherData(this.city);
    });
  }
}
