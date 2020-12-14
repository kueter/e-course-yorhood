import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  shoppingCartItems = [];
  total;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    // this.service.getItems().subscribe((_ )=> {
    //   this.shoppingCartItems = _;
    //   console.log(_);
    // });

    this.shoppingCartItems.push( { name: 'Marketing online', instructor: 'Maitre Gims', lesson: 20, joined: 211, cost: '150', uptime: '2019-09-01', mark: 4, status: 'Available', remise: '', preload: '../../assets/img/preload.png', category: 'Business Study', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur in at molestias accusantium officiis facere dolorem placeat nemo veritatis.'},);

    this.service.getTotalAmount().subscribe(_ => this.total = _);
  }

}
