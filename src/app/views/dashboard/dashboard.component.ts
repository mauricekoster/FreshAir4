import {Component, OnInit} from '@angular/core';
import {PersonsService} from '@/_services/persons.service';
import {Person} from '@/_models';
import {AirportService} from "@/_services/airport.service";
import {Airport} from "@/_models/airport";

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  persons: Person[];
  airports: Airport[];

  constructor(private personsService: PersonsService, private airportService: AirportService) {
  }

  ngOnInit(): void {
    this.personsService.getJSON().subscribe(data => {
      this.persons = data;
    });
    this.airportService.getJSON().subscribe(data => {
      this.airports = data;
    });
  }
}
