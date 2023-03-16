import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api/flights/';
  private userUrl = 'http://localhost:8080/users/';
  private bookUrl = 'http://localhost:8080/api/bookings/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true
  };

  bookFlightHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.cookieService.get('accessToken')}`
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getFlightsBetweenDestinations(departureDestination: string, arrivalDestination: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}from/${departureDestination}/to/${arrivalDestination}/`);
  }

  getFlightsAtGivenTime(departureAt: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/leave-at/${departureAt}`)
  }

  getAllFlights(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`)
  }

  getUser(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.userUrl}login`, { email: credentials.loginEmail, password: credentials.loginPassword}, this.httpOptions);
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
      this.httpOptions
      );
  }

  addFlight(flightId: string, adultsNo: number, childrenNo?: number) {
    return this.http.post<any>(
      `${this.bookUrl}`, 
      {
        flight_id: flightId,
        adults: adultsNo,
        children: childrenNo
      },
      this.bookFlightHttpOptions)
  }
}
