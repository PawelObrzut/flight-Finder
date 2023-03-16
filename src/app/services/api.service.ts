import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api/flights/';
  private userUrl = 'http://localhost:8080/users/';

  registerHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getFlightsBetweenDestinations(departureDestination: string, arrivalDestination: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}from/${departureDestination}/to/${arrivalDestination}/`);
  }

  getFlightsAtGivenTime(departureAt: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/leave-at/${departureAt}`)
  }

  getAllFlights(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`)
  }

  getUser(): Observable<any> {
    return this.http.get<any>('whatever');
  }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(
      `${this.userUrl}register`, 
      { 
        name: user.signUpName,
        lastname: user.signUpLastName,
        email: user.signUpEmail,
        password: user.signUpPassword
      }, 
      this.registerHttpOptions
      );
  }
}
