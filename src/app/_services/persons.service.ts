import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from '@/_models';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<any> {
    return this.http.get<Person[]>('./assets/json/persons.json');
  }

}
