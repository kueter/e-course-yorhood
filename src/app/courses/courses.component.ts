import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

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

  category = this.topics[0].name;

  courses = [
    { name: 'Angular 9 Bootcamp 2020', instructor: 'David Beckam', lesson: 12, joined: 10, cost: '250', uptime: '2020-06-03', mark: 3, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Django CRUD from scratch', instructor: 'Jeff Bezos', lesson: 10, joined: 11, cost: '250', uptime: '2020-06-03', mark: 2, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Vue.js from scratch', instructor: 'Macki Sall', lesson: 10, joined: 11, cost: '250', uptime: '2020-06-03', mark: 2, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Laravel 8 bootcamp ', instructor: 'Samuel Etoo', lesson: 20, joined: 80, cost: '250', uptime: '2020-06-03', mark: 2, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Javascript Es6 for Beginners', instructor: 'Jeff Bezos', lesson: 30, joined: 34, cost: '250', uptime: '2020-06-03', mark: 2, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'React.js Advanced', instructor: 'Mark zukerberg', lesson: 9, joined: 21, cost: '250', uptime: '2020-06-03', mark: 4, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Desktop App with Electron.js', instructor: 'Bill Gates', lesson: 13, joined: 111, cost: '250', uptime: '2020-06-03', mark: 5, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'UI/UX Mobile App with Flutter', instructor: 'John Cena', lesson: 20, joined: 211, cost: '250', uptime: '2020-06-03', mark: 3, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[0].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Window 10 for Beginners', instructor: 'Barack Obama', lesson: 20, joined: 211, cost: '150', uptime: '2020-07-01', mark: 3, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[1].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Linux for Beginners', instructor: 'Linus Tovard', lesson: 20, joined: 211, cost: '150', uptime: '2020-07-01', mark: 3, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[1].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Administration Fedora Advanced 2020', instructor: 'Linus Tovard', lesson: 20, joined: 211, cost: '150', uptime: '2020-07-01', mark: 3, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[1].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Debian 9 complete course', instructor: 'Linus Tovard', lesson: 20, joined: 211, cost: '150', uptime: '2020-07-01', mark: 3, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[1].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Mac Os user Guide', instructor: 'Steve Jobs', lesson: 20, joined: 211, cost: '150', uptime: '2020-07-01', mark: 3, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[1].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Business Intelligence PowerBI from scratch', instructor: 'Steve Jobs', lesson: 20, joined: 211, cost: '150', uptime: '2019-09-01', mark: 4, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[2].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Pentaho 8.0 for Beginners', instructor: 'Steve Jobs', lesson: 20, joined: 211, cost: '150', uptime: '2019-09-01', mark: 4, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[2].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Python machine learning', instructor: 'Steve Jobs', lesson: 20, joined: 211, cost: '150', uptime: '2019-09-01', mark: 4, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[2].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'AutoDesk Ardunio', instructor: 'Steve Jobs', lesson: 20, joined: 211, cost: '150', uptime: '2019-09-01', mark: 4, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[3].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Draw Plan 3D with CAD', instructor: 'Steve Jobs', lesson: 20, joined: 211, cost: '150', uptime: '2019-09-01', mark: 4, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[4].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Adobe Illustrator Advanced', instructor: 'Maitre Gims', lesson: 20, joined: 211, cost: '150', uptime: '2019-09-01', mark: 4, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[5].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Adobe Gimp 2.10 for beginner', instructor: 'Maitre Gims', lesson: 20, joined: 211, cost: '150', uptime: '2019-09-01', mark: 4, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[5].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Blender 2.9 2D/3D animation ', instructor: 'Maitre Gims', lesson: 20, joined: 211, cost: '150', uptime: '2019-09-01', mark: 4, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[5].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Adobe CS6 draw logo 3D', instructor: 'Maitre Gims', lesson: 20, joined: 211, cost: '150', uptime: '2019-09-01', mark: 4, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[5].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Blockchain crypto currencies', instructor: 'Maitre Gims', lesson: 20, joined: 211, cost: '150', uptime: '2019-09-01', mark: 4, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[6].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Metatrder 4 to 5 Advanced reveals', instructor: 'Maitre Gims', lesson: 20, joined: 211, cost: '150', uptime: '2019-09-01', mark: 4, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[6].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},
    { name: 'Marketing online', instructor: 'Maitre Gims', lesson: 20, joined: 211, cost: '150', uptime: '2019-09-01', mark: 4, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: this.topics[6].name, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},

  ];

  p: number = 1;
  shoppingCartItems: any[];

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.getItems().subscribe(_ => this.shoppingCartItems = _);
  }


  addCart(item: any) {
    const distinct = this.shoppingCartItems.filter((e) => e._id === item._id);

    if (distinct.length === 0) {
      this.service.addToCart(item);
      // this.notifier.notify('info', 'This Product is added');
    }
    if (distinct.length > 0) {
      // this.notifier.notify('info', 'This Product is already added');
    }
  }

}
