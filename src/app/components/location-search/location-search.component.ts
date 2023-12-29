import { Component, OnInit } from '@angular/core';
import { GetDataFromServerService } from '../../services/get-data-from-server.service';
import { weatherData } from 'src/types';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css'],
})
export class LocationSearchComponent implements OnInit {
  private valueInputSearch: string = '';
  public weatherData: weatherData[] = [];
  private city: string = '';

  constructor(public getDataFromServerService: GetDataFromServerService, public locationService: LocationService) {}
  ngOnInit(): void {
    let infoLo = this.locationService.getCurrentLocation().then(()=>{
      this.valueInputSearch = String(infoLo)
    });
  }
  onInput(e: any) {
    this.valueInputSearch = e.target.value;
  }

  onSearch() {
    this.getDataFromServerService.fetchWeatherData(this.valueInputSearch);
  }
}
