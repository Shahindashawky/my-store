import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute } from '@angular/router';
import { ProductModule } from './../../product/product.module';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
 data:any;
 id:any;
 options = [1,2,3,4,5,6,7,8,9,10];
 ngSelect:any=1;
 newvalue:any;

  constructor(  private route: ActivatedRoute,private product:ProductModule,
    private cardService: CartServiceService,private Service: ServiceService) { 
      this.data = this.product      
     
    }
    ngOnInit(): void {
    this.getdata();
    
  }
  addToCart(product: any) {
    product.value=this.newvalue;
    this.cardService.addToCart(product);
  }
  onSelected(value:string,product:any): void {
    
    this.cardService.setquantity(value);  //set your status.
    this.data.value=value;
    this.newvalue=value;
    this.Service.updateproduct(product)

	}

  getdata() {
    this.route.params.subscribe((params) => {
       this.id = parseInt(params['id']);
});

    this.Service.getProduct().subscribe((d:any) =>
      this.data = d.filter((i:any) => i.id === this.id)[0]
      
       )
       this.ngSelect = parseInt(this.cardService.getquantity());
       this.data.value=this.ngSelect;
   
  }
    }

