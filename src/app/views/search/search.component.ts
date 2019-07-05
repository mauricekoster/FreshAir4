import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {CustomValidators} from 'ngx-custom-validators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    const d = moment().add(14, 'days');

    this.searchForm = this.formBuilder.group({
      departureCity: ['', Validators.required],
      destinationCity: ['', Validators.required],
      ret: ['NO', Validators.required],
      departureDate: ['', CustomValidators.minDate(d.format('YYYY-MM-DD'))],
      returningDate: [''],
      adt: [1, Validators.required],
      chd: [0],
      inf: [0],
      faretype: ['BESTPRICE', Validators.required]
      // password: ['', Validators.required]
    });
  }

  get departureCity() {
    return this.searchForm.get('departureCity');
  }

  onSubmit() {
    const d = moment().add(14, 'days');
    if (this.searchForm.invalid) {
      console.log('form is invalid');
      return;
    }
    console.log('submitted' + d.calendar());
  }
}
