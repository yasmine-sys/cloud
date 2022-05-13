import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from '../Models/events';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  readonly API_URL = 'http://localhost:8087/SpringMVC/event';
  constructor(private http: HttpClient) {}

  getAllEvents() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/retrieveallevents`);
  }
  addEvent(event: Events) {
    return this.http.post(`${this.API_URL}/addEvent`, event);
  }
  editEvent(event: any) {
    return this.http.put(`${this.API_URL}/modifyRes`, event);
  }
  deleteEvent(idEvent: any) {
    return this.http.delete(`${this.API_URL}/deleteEventById/${idEvent}`);
  }
  addEventbyUser(e: any, user: any) {
    return this.http.post(`${this.API_URL}/addEventbyUser/${user}`, e);
  }
  addRatingEvent(evnt: number, rate: number) {
    return this.http.post(
      `http://localhost:8087/SpringMVC/rating/AddRating/` + evnt + `/` + rate,
      null
    );
  }
}
