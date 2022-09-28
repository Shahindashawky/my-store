import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ProductModule } from './../../product/product.module';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ServiceService } from 'src/app/services/service.service';
import { Validators } from '@angular/forms';

ServiceService
@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {


  @Input() items:any;
  total=0;
  name:string="";
  address:string="";
  Credit:string="";
  unamePattern = "[a-zA-Z]*";
  crpattern ="^[0-9]*$";

  constructor(
    private cartService: CartServiceService,private product:ProductModule,private router:Router
  ) { 
    this.items = this.product

  }


  ngOnInit(): void {
      this.items = this.cartService.getItems();

     this.items.map((a:any) =>
      this.total += a.price*a.value
     );


  
  }

  
confirm(){
  this.router.navigateByUrl('checkout');
this.cartService.settotalprice(this.total)
}
change(value:any,i:any){
  this.total=0;
  const newitem =this.items.filter((a:any) => a.id === i.id)[0];
  newitem.value=value;
 this.items.map((a:any) =>
 this.total += a.price*a.value
);
  if(value==0){
    this.items=this.cartService.clearCart(newitem.id);
    setTimeout(() => {
    window.alert('Your product has been deleted from the cart!')
  }, 200)
  }
}
changename(name:any){
  this.cartService.setname(name)

}
}
