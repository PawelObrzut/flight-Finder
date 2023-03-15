import { Component } from '@angular/core';
import { getFormattedTime, getFlightDuration } from '../../utils/date-utils';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-results-section',
  templateUrl: './results-section.component.html',
  styleUrls: ['./results-section.component.css']
})
export class ResultsSectionComponent {
  flights: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.flights = this.dataService.sharedData;
  }
  
  getFormattedTime = getFormattedTime;
  getFlightDuration = getFlightDuration;
}
