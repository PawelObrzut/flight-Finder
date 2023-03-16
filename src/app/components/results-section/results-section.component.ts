import { Component } from '@angular/core';
import { getFormattedTime, getFlightDuration } from '../../utils/date-utils';
import { DataService } from 'src/app/services/data.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-results-section',
  templateUrl: './results-section.component.html',
  styleUrls: ['./results-section.component.css']
})
export class ResultsSectionComponent {
  flights: any;
  adults = 1;
  children = 0;

  constructor(private dataService: DataService, private apiService: ApiService) {}

  ngOnInit() {
    this.flights = this.dataService.sharedData;
  }
  
  getFormattedTime = getFormattedTime;
  getFlightDuration = getFlightDuration;

  bookFlight(flightId: string) {
    this.apiService.addFlight(flightId, this.adults, this.children).subscribe(response => console.log(response))
  }
}
