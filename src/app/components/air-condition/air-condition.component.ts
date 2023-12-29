import { Component } from '@angular/core';
import { weatherData } from 'src/types';
import { GetDataFromServerService } from '../../services/get-data-from-server.service';

@Component({
  selector: 'app-air-condition',
  templateUrl: './air-condition.component.html',
  styleUrls: ['./air-condition.component.css'],
})
export class AirConditionComponent {
  weatherData: weatherData | null = null;
  public humidity: string = '--';
  public presure: string = '--';
  public wind: string = '--';
  public visibility: string = '--';

  constructor(private weatherDataService: GetDataFromServerService) {}

  ngOnInit() {
    this.weatherDataService
      .getWeatherData()
      .subscribe((data: weatherData | null) => {
        if (data) {
          this.weatherData = data;
          this.humidity = String(data.current_observation.atmosphere.humidity);
          this.presure = String(data.current_observation.atmosphere.pressure);
          this.wind = String(data.current_observation.wind.speed);
          this.visibility = String(data.current_observation.atmosphere.visibility);
        } else{
        }
      });
  }
}
