import { Component } from '@angular/core';
import { weatherData } from 'src/types';
import { GetDataFromServerService } from '../../services/get-data-from-server.service';

@Component({
  selector: 'app-week-forecast',
  templateUrl: './week-forecast.component.html',
  styleUrls: ['./week-forecast.component.css'],
})
export class WeekForecastComponent {
  public forecastData: any = null;

  constructor(private weatherDataService: GetDataFromServerService) {}

  ngOnInit() {
    this.weatherDataService.getWeatherData().subscribe((data) => {
      if (data) {
        this.forecastData = data.forecasts;
      } else {
      }
    });
  }
}
