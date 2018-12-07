import { Component, OnInit } from '@angular/core';
import { Stylist } from '../../server/models/stylistmodel';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-appointment-maker',
  templateUrl: './appointment-maker.component.html',
  styleUrls: ['./appointment-maker.component.css']
})
export class AppointmentMakerComponent implements OnInit {

  public stylistdata: Stylist;
  constructor(private apiService: ApiService) {

  }
  ngOnInit() {
    this.apiService.getAllData('stylists').subscribe(
      data => this.stylistdata = data,
      err => console.log(err),
      () => console.log("completed")
    );
  }
}
