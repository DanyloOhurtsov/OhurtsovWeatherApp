import { Component, OnInit } from '@angular/core';
import { weatherData } from 'src/types';
import { GetDataFromServerService } from '../../services/get-data-from-server.service';

@Component({
  selector: 'app-now-weather',
  templateUrl: './now-weather.component.html',
  styleUrls: ['./now-weather.component.css'],
})
export class NowWeatherComponent implements OnInit {
  capitalName: string = '';
  temperture: string = '';

  constructor(private weatherDataService: GetDataFromServerService) {}

  ngOnInit() {
    this.weatherDataService
      .getWeatherData()
      .subscribe((data: weatherData | null) => {
        if (data) {
          // INPUT DATA TO HTML
          this.capitalName = data.location.city;
          this.temperture =
            (
              (data.current_observation.condition.temperature - 32) /
              1.8
            ).toFixed(1) + '°';
          // IMAGE
          let infoText = data.current_observation.condition.text;
          if (
            infoText === 'Sunny' ||
            infoText === 'Fair' ||
            infoText === 'Clear' ||
            infoText === 'Mostly Sunny'
          ) {
            this.imgURL = this.image_Sunny_Fair_Clear_MostlySunny;
          } else if (infoText === 'Rain' || infoText === 'Showers') {
            this.imgURL = this.image_Rain;
          } else if (infoText === 'Snow') {
            this.imgURL = this.image_Snow;
          } else if (infoText === 'Foggy') {
            this.imgURL = this.image_Foggy;
          } else if (
            infoText === 'PartlyCloudy' ||
            infoText === 'MostlyCloudy'
          ) {
            this.imgURL = this.image_PartlyCloudy_MostlyCloudy;
          } else if (infoText === 'Thunderstorms') {
            this.imgURL = this.image_Thunderstorm;
          } else if (infoText === 'Cloudy') {
            this.imgURL = this.image_Cloudy;
          } else {
            console.log(infoText);
          }
        } else {
        }
      });
  }
  // IMAGES LINKS
  imgURL: string = '';
  image_Rain: string = 'assets/img/Rain.png';
  image_Snow: string = 'assets/img/Snow.png';
  image_Foggy: string = 'assets/img/Foggy.png';
  image_Cloudy: string = 'assets/img/Cloudy.png';
  image_Sunny_Fair_Clear_MostlySunny: string = 'assets/img/SunnyFairClear.png';
  image_PartlyCloudy_MostlyCloudy: string = 'assets/img/PartlyMostlyCloudy.png';
  image_Thunderstorm: string = 'assets/img/Thunderstorm.png';
}
