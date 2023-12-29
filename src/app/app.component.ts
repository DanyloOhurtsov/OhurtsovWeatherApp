import { Component } from '@angular/core';
import { GetDataFromServerService } from './services/get-data-from-server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (public getDataFromServerService: GetDataFromServerService){}

}
