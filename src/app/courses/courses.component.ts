import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  topics = [
    {name: 'Web development'},
    {name: 'Computer Science'},
    {name: 'Data Science'},
    {name: 'Engineering'},
    {name: 'Architecture'},
    {name: 'Art & Design'},
    {name: 'Business Study'},
    {name: 'Medecine'},

  ];

  courses = [
    { name: 'Angular 9 Bootcamp 2020', instructor: 'David Beckam', description: '', cost: '250', uptime: '2020-06-03', mark: 3, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
