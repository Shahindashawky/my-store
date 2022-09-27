import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-checkoutform',
  templateUrl: './checkoutform.component.html',
  styleUrls: ['./checkoutform.component.css']
})
export class CheckoutformComponent implements OnInit {
  name:any;
  price:any;
  constructor(private cartService: CartServiceService) { }


  ngOnInit(): void {
    this.name=this.cartService.getname();
    this.price=this.cartService.getprice();
  }

}
