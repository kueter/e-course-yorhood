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
    { name: 'Angular 9 Bootcamp 2020', instructor: 'David Beckam', lesson: 12, joined: 10, cost: '250', uptime: '2020-06-03', mark: 3, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Django CRUD from scratch', instructor: 'Jeff Bezos', lesson: 10, joined: 11, cost: '250', uptime: '2020-06-03', mark: 2, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Vue.js from scratch', instructor: 'Macki Sall', lesson: 10, joined: 11, cost: '250', uptime: '2020-06-03', mark: 2, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Laravel 8 bootcamp ', instructor: 'Samuel Etoo', lesson: 20, joined: 80, cost: '250', uptime: '2020-06-03', mark: 2, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Javascript Es6 for Beginners', instructor: 'Jeff Bezos', lesson: 30, joined: 34, cost: '250', uptime: '2020-06-03', mark: 2, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'React.js Advanced', instructor: 'Mark zukerberg', lesson: 9, joined: 21, cost: '250', uptime: '2020-06-03', mark: 2, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Desktop App with Electron.js', instructor: 'Bill Gates', lesson: 13, joined: 111, cost: '250', uptime: '2020-06-03', mark: 2, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'UI/UX Mobile App with Flutter', instructor: 'John Cena', lesson: 20, joined: 211, cost: '250', uptime: '2020-06-03', mark: 2, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
