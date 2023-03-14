import { Component } from '@angular/core';
import { FlightsService } from '../../services/flights.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  constructor(private flightService: FlightsService) {}

  departureDestination!: string;
  arrivalDestination!: string;

  onSubmit() {
    this.flightService.getFlightsBetweenDestinations(this.departureDestination, this.arrivalDestination).subscribe((flights: any) => {
      console.log('flights ', flights);
    });
  }
}
