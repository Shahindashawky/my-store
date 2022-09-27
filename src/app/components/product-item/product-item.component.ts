import { ProductModule } from './../../product/product.module';
import { Component, OnInit,Input ,Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ServiceService } from 'src/app/services/service.service';
ServiceService
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() products:any;
  options = [1,2,3,4,5,6,7,8,9,10];
  @Output() changequantity = new EventEmitter();
  newvalue:any;
  ngSelect = 1;
  constructor(private cartService: CartServiceService,private router: Router,private product:ProductModule,private service:ServiceService) { 
    this.products=this.product;
    this.newvalue=1
  }
 
 
  
  ngOnInit(): void {

  }

  addToCart(product: any) {
    product.value=this.newvalue;
    this.cartService.addToCart(product);
  }
  moreDetails(id:number){
    this.router.navigateByUrl('details/'+id);

  }

  onSelected(value:string,product: any): void {
    this.changequantity.emit(value);
		product.value=value;
    this.newvalue=value;
    this.service.updateproduct(product)

	}

}
