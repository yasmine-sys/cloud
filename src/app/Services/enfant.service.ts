import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {
  readonly API_URL = 'http://localhost:8087/SpringMVC/enfant'
  constructor(private http : HttpClient) { }
  getAllEnfants(){
    //return this.http.get<Events[]>('')
    return this.http.get(`${this.API_URL}/retrieveallchildren`)
  }
  addEnfant(enfant : any){
    return this.http.post(`${this.API_URL}/addchild`, enfant)
  }
  editEnfant(enfant : any){
    return this.http.put(`${this.API_URL}/modifychild`, enfant)
  }
  deleteEnfant(idEnfant : any){
    return this.http.delete(`${this.API_URL}/removechild/${idEnfant}`)
  }
  addEnfantbyUser(e: any,user: any){
    return this.http.post(`${this.API_URL}/addEnfantbyUser/${user}`, e)
  }
}
