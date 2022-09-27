import { Component,  OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products:object[]=[];
  selectedTeam = '';

  constructor(private httpserv:ServiceService,private cartservice:CartServiceService) { }

  ngOnInit(): void {
    this.cartservice.selectedTeam=1;
    this.httpserv.getProduct().subscribe(data=>{
      this.products =data;
    }
    
      )
      
  }

show(quantity:any){
  this.selectedTeam=quantity;
  this.cartservice.setquantity(quantity);  //set your status.
  this.cartservice.getquantity();  //get your status.

}

}
