import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yorhood';

  topics = [
    { name: 'Computer Science', img: '../assets/img/computer.png', course: 102 },
    { name: 'Web Development', img: '../assets/img/web-programming.png', course: 100 },
    { name: 'Data Science', img: '../assets/img/data-science.png', course: 298 },
    { name: 'Engineering', img: '../assets/img/engineering.png', course: 120 },
    { name: 'Architecture', img: '../assets/img/sketch.png', course: 12 },
    { name: 'Art & Design', img: '../assets/img/art.png', course: 202 },
    { name: 'Business Study', img: '../assets/img/money.png', course: 103 },
    { name: 'Medicine', img: '../assets/img/laboratory.png', course: 90 }
  ];

}
