import { Component } from '@angular/core';
import { weatherData } from 'src/types';
import { GetDataFromServerService } from '../../services/get-data-from-server.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(public getDataFromServerService: GetDataFromServerService) {}
  public weatherData: weatherData[] = [];
  public data = '';
}
