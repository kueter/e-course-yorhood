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
      ]),
      trigger(
        'inOutAnimation',[
          transition(':enter',[
              style({ height: 0, opacity: 0 }), animate('.6s ease-out',style({ opacity: 1 }))
          ]),
          transition(':leave',[
              style({ opacity: 1 }), animate('.3s ease-in', style({ height: 0, opacity: 0 }))
          ])
        ]
      )
  ]
})
export class AppComponent {
  title = 'yorhood';

  state = false;

  switchTo() {
    this.state = !this.state;
  }



}
