import { Injectable } from '@angular/core';
import { GetDataFromServerService } from './get-data-from-server.service';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private getData: GetDataFromServerService) {}

  getCurrentLocation() {
    let API_KEY_LOCATION = '9fa3946b5e6a48fa8017010fe79a9577';
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            if (position) {
              const lat = position.coords.latitude;
              const lng = position.coords.longitude;
              const location = {
                lat,
                lng,
              };
              try {
                const response = await fetch(
                  `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${API_KEY_LOCATION}`
                );
                const result = await response.json();
                const city = result.results[0].components.city;
                this.getData.fetchWeatherData(city)
                resolve(location);
              } catch (error) {
                // console.error(error);
                // resolve(location);
              }
            }
          },
          (error) => {
            if(error.message === 'User denied Geolocation'){
              alert(`Error: ${error.message}\n\nPlease allow geolocation for your browser or type city into Search bar`)

            }
            // reject(error)
          }
        );
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }
}
