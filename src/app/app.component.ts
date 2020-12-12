import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('x-x0', [
      state('left', style({ transform: 'translateX(0%)' })),
      state('right', style({ transform: 'translateX(235%)' })),
      transition('left => right', animate('1s ease-in-out', keyframes([
        style({ transform: 'translateX(235%)' })
      ]))),
      transition('right => left', animate('1s ease-in-out', keyframes([
        style({ transform: 'translateX(0%)' })
      ])))
    ]),

    trigger('x-y0', [
      state('right', style({ transform: 'translateX(0%)' })),
      state('left', style({ transform: 'translateX(-42%)' })),
      transition('right => left', animate('1s ease-in-out', keyframes([
        style({ transform: 'translateX(-42%)' })
      ]))),
      transition('left => right', animate('1s ease-in-out', keyframes([
        style({ transform: 'translateX(0%)' })
      ])))
    ])
  ]
})
export class AppComponent implements OnInit {

  title = 'yorhood';

  boot = false;

  state = false;
  fixed = false;


  ngOnInit(): void {
    setTimeout(() => {
      this.boot = true;
    }, 500);
  }

  getStmt(event: any) {
    this.state = event;
    console.log(this.state);
  }


  @HostListener('window:scroll', [])
  onScroll() {
    if (document.documentElement.scrollTop >= 47) {
      this.fixed = true;
    }

    if (document.documentElement.scrollTop < 47) {
      this.fixed = false;
    }
  }

  opbasket() {
    $(".basket").fadeIn()
      .css({ top: 0, position: 'fixed' })
      .animate({ height: '600px' }, 800);
  }

  clbasket() {
    $(".basket").fadeIn()
    .css({ top: 0, position: 'fixed' })
    .animate({ height: '600px' }, 800);
  }


}
