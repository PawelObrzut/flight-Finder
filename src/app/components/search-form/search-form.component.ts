import { Component } from '@angular/core';
import { FlightsService } from '../../services/flights.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  constructor(private flightService: FlightsService) {}

  departureDestination: string = '';
  arrivalDestination: string = '';
  departureAt!: string;
  arrivalAt!: string;

  async onSubmit(): Promise<void> {

    try {
      const flightsTime = await this.flightService.getFlightsAtGivenTime(this.departureAt).toPromise();
      const flightsDestination = await this.flightService.getFlightsBetweenDestinations(this.departureDestination, this.arrivalDestination).toPromise();

      const result = flightsDestination.filter((flightDest: any) => {
        return flightsTime.some((flightTime: any) => flightTime.flight_id == flightDest.flight_id);
      });

      console.log('filtered! :: ', result);

    } catch (error) {
      console.log(error);
    }
  }
}