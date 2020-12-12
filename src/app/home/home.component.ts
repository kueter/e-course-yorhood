import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  slides = [
    {user:'Gustave', img: "../../assets/img/AM1.png", grade: 'Ingenieur Telecom'},
    {user:'Roland', img: "../../assets/img/AM3.png", grade: 'Founder ATI corp'},
    {user:'Nadege', img: "../../assets/img/AF4.png", grade: 'Devops chez ATOS'},
    {user:'Ralph', img: "../../assets/img/AM2.png", grade: 'Instructor Cisco'}
  ];

  slideConfig = {"slidesToShow": 3, "slidesToScroll": 3};

  constructor() { }

  ngOnInit(): void {
  }

}
