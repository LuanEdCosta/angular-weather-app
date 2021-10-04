import { Component, Input } from '@angular/core';

type ValueFormat = 'percentage' | 'celsius' | 'km/h' | 'none';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss'],
})
export class WeatherDataComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() format: ValueFormat = 'none';

  constructor() {}

  getFormattedLabel(): string {
    if (this.format === 'celsius') return `${this.value} ºC`;
    else if (this.format === 'percentage') return `${this.value}%`;
    else if (this.format === 'km/h') return `${this.value} km/h`;
    return this.value;
  }
}
