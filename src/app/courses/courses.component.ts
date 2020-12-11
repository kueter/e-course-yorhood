import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  topics = [
    {name: 'test'},
    {name: 'test'},
    {name: 'test'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
