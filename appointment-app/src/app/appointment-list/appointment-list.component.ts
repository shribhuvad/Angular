import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {


  newAppointmentTitle: string = '';
  newAppointmenetDate: Date = new Date();

  appointments: Appointment[] = []

  ngOnInit(): void {

    let saveAppointments=localStorage.getItem("appointments");
    this.appointments=saveAppointments ? JSON.parse(saveAppointments):[];
  }

  addAppointment() {
    if (this.newAppointmentTitle.trim().length > 0) {

      let newAppointment: Appointment = {

        id: Date.now(),
        date: this.newAppointmenetDate,
        title: this.newAppointmentTitle
      }
      this.appointments.push(newAppointment);
      this.newAppointmentTitle = '';
      this.newAppointmenetDate = new Date;
      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    }


  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1)
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }



}
