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
    { name: 'Angular 9 Bootcamp 2020', instructor: 'David Beckam', lesson: 12, joined: 10, cost: '250', uptime: '2020-06-03', mark: 3, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
