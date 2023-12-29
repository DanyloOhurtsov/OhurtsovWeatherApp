import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { weatherData } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class GetDataFromServerService {
  private API_KEY = 'af449a7165msh26c8a90e68f3efcp1505c4jsn582a1c8fe085';
  private url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=';
  private options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': this.API_KEY,
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
    },
  };
  private weatherDataSubject: BehaviorSubject<weatherData | null> =
    new BehaviorSubject<weatherData | null>(null);
  public weather: weatherData[] = [];
  constructor() {}

  public async fetchWeatherData(location: string) {
    try {
      const response = await fetch(
        this.url + `${location}&format=json&u=f`,
        this.options
      );
      const result = await response.json();
      this.weather = await result;
      const weatherDataNew: weatherData = await result;
      this.setWeatherData(weatherDataNew);
    } catch (error) {
      console.error(error);
    }
  }

  setWeatherData(data: weatherData) {
    this.weatherDataSubject.next(data);
  }

  getWeatherData(): Observable<weatherData | null> {
    return this.weatherDataSubject.asObservable();
  }
}
