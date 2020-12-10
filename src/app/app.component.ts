import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
      trigger('x-x0', [
        state('left', style({  transform: 'translateX(0%)'})),
        state('right', style({ transform: 'translateX(235%)'})),
        transition('left => right', animate('1s ease-in-out', keyframes([
          style({ transform: 'translateX(235%)'})
        ]))),
        transition('right => left', animate('1s ease-in-out', keyframes([
          style({ transform: 'translateX(0%)'})
        ])))
      ])
  ]
})
export class AppComponent {
  title = 'yorhood';

  state = false;

  switchTo() {
    this.state = !this.state;
  }

}
