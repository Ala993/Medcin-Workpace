import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointements',
  templateUrl: './appointements.component.html',
  styleUrls: ['./appointements.component.css']
})
export class AppointementsComponent implements OnInit {
  days = [{dayNumber:"29",day: "Lundi"},{dayNumber:"30", day: "Mardi"},{dayNumber: "31", day: "Mercredi"}]
  selected = "Lundi"
  constructor() { }

  ngOnInit(): void {
  }
  loadAppointments(index){
    console.log(index);
    
  }
}
