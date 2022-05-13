import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservations } from '../Models/reservations';
@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  readonly API_URL = 'http://localhost:8087/SpringMVC/reservation';
  constructor(private http: HttpClient) {}
  getAllEvents() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/retrieveallRes`);
  }
  addReservation(reservation: Reservations, idenf: number, idevent: number) {
    return this.http.post(
      `${this.API_URL}/addReservation/` + idenf + '/' + idevent,
      reservation
    );
  }
  pdf(reservation: any) {
    return this.http.get(`${this.API_URL}/pdf`, reservation);
  }
  addEventbyUser(e: any, user: any) {
    return this.http.post(`${this.API_URL}/addReservation/${user}`, e);
  }
}
