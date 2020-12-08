import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yorhood';

  topics = [
    { name: 'Computer Science', img: '../assets/img/', course: 102 },
    { name: 'Web Development', img: '../assets/img/', course: 100 },
    { name: 'Data Science', img: '../assets/img/', course: 298 },
    { name: 'Engineering', img: '../assets/img/', course: 120 },
    { name: 'Architecture', img: '../assets/img/', course: 12 },
    { name: 'Art & Design', img: '../assets/img/', course: 202 },
    { name: 'Business Study', img: '../assets/img/', course: 103 },
    { name: 'Medicine', img: '../assets/img/', course: 90 }
  ];

}
