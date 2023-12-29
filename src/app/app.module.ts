import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationSearchComponent } from './components/location-search/location-search.component';
import { MainComponent } from './components/main/main.component';
import { GetDataFromServerService } from './services/get-data-from-server.service';
import { NowWeatherComponent } from './components/now-weather/now-weather.component';
import { WeekForecastComponent } from './components/week-forecast/week-forecast.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { AirConditionComponent } from './components/air-condition/air-condition.component';
import { LocationService } from './services/location.service';

@NgModule({
  declarations: [
    AppComponent,
    LocationSearchComponent,
    MainComponent,
    NowWeatherComponent,
    WeekForecastComponent,
    AsideMenuComponent,
    AirConditionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [GetDataFromServerService, LocationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
