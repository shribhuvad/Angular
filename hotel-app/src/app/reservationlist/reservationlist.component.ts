import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservatio/reservation.service';
@Component({
  selector: 'app-reservationlist',
  templateUrl: './reservationlist.component.html',
  styleUrls: ['./reservationlist.component.css']
})
export class ReservationlistComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {

  }


  ngOnInit(): void {

    this.reservations = this.reservationService.getReservations();

  }
  
  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id);

  }




}
