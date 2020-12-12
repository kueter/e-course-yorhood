import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  shoppingCartItems;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.getItems().subscribe((_ )=> {
      this.shoppingCartItems = _;
      console.log(_);
    });


  }

}
