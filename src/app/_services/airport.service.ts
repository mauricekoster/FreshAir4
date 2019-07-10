import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Airport} from "@/_models/airport";

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<any> {
    return this.http.get<Airport[]>('./assets/json/airports.json');
  }
}
