import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private dataService: DataService
  ) {}

  departureDestination: string = '';
  arrivalDestination: string = '';
  departureAt!: string;
  arrivalAt!: string;
  
  async onSubmit(): Promise<void> {

    try {
      const flightsTime = await this.apiService.getFlightsAtGivenTime(this.departureAt).toPromise();
      const flightsDestination = await this.apiService.getFlightsBetweenDestinations(this.departureDestination, this.arrivalDestination).toPromise();
      
      this.dataService.sharedData = flightsDestination.filter((flightDest: any) => {
        return flightsTime.some((flightTime: any) => flightTime.flight_id == flightDest.flight_id);
      });

      this.router.navigate(['/results']);
    } catch (error) {
      console.log(error);
    }
  }
}
