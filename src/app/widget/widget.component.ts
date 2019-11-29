import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})

export class WidgetComponent implements OnInit {
  constructor(private _api: ApiService) { }
  
  travelInfo: Object;
  travellingFromIsOpened: boolean = false
  travellingToIsOpened: boolean = false
  userCitizenship: string = '';
  userDestination: string = '';

  ngOnInit () {}

  getVisas = () => {
    this._api.getVisaInfo(this.userCitizenship, this.userDestination).subscribe(data => {
      this.travelInfo = data;
    });
  }

  citizenshipInput(citizenship){
    this.userCitizenship = citizenship;
    this.citizenshipToggleHandler();
  }

  destinationInput(destination){
    this.userDestination = destination;
    this.destinationToggleHandler();
  }

  citizenshipToggleHandler = ():void => {
    this.travellingFromIsOpened = !this.travellingFromIsOpened
  }

  destinationToggleHandler = ():void => {
    this.travellingToIsOpened = !this.travellingToIsOpened
  }
}
