import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yorhood';

  topics = [
    { name: '', img: '', course: '' },
    { name: '', img: '', course: '' },
    { name: '', img: '', course: '' },
    { name: '', img: '', course: '' }
  ];

}
