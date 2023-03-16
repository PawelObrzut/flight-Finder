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
  formStyle: string = '';
  formInputs: string = '';
  selectCity: string = '';
  selectDate: string = '';
  formSubmitBtn: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    if (this.router.url === '/') {
      this.formStyle = 'flex items-center w-11/12 mx-auto';
      this.formInputs = 'bg-[#3C96C8] rounded-sm ml-5 w-[80%]';
      this.selectCity = 'p-4 m-3 rounded-lg w-1/5';
      this.selectDate = 'p-[0.825rem] m-3 rounded-lg w-1/4';
      this.formSubmitBtn = 'cursor-pointer text-white text-lg bg-gradient-to-br from-pink-700 to-purple-800 hover:opacity-80 rounded-full ml-4 p-14';
    } 
    if (this.router.url === '/results') {
      this.formStyle = 'bg-[rgb(18,3,37)] px-20 py-8 flex';
      this.formInputs = 'rounded-sm w-[80%]';
      this.selectCity = 'p-4 mr-4 rounded-lg w-1/5';
      this.selectDate = 'p-[0.825rem] m-3 rounded-lg w-1/4';
      this.formSubmitBtn = 'cursor-pointer bg-white text-black rounded-lg py-[0.825rem] hover:opacity-80 px-5 self-center';
    }
  }

  departureDestination: string = '';
  arrivalDestination: string = '';
  departureAt!: string;
  arrivalAt!: string;
  
  async onSubmit(): Promise<void> {

    try {
      const flightsTime = await this.apiService.getFlightsAtGivenTime(this.departureAt).toPromise();
      const flightsDestination = await this.apiService.getFlightsBetweenDestinations(this.departureDestination, this.arrivalDestination).toPromise();
      
      this.dataService.sharedData = flightsDestination.filter((flightDest: any) => {
        return flightsTime.some((flightTime: any) => flightTime.route_id == flightDest.route_id);
      });

      this.router.navigate(['/results']);
    } catch (error) {
      console.log(error);
    }
  }
}
