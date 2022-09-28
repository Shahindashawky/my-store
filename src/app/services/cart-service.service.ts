import { Injectable, EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items: object[]=[];
name="";
price=0;
arr1:any=[];
newitem:any;
quantitychange: EventEmitter<any> = new EventEmitter();
selectedTeam: any=1;
  constructor() { }

  addToCart(product: any) {
    const arr = this.items.filter((i:any) => i.id == product.id)
    if(arr.length==0){
    this.items.push(product);
    window.alert('Your product has been added to the cart!');
  
    }
    else{
this.updateitem(product);
    }
  }
  updateitem(product: any){
this.items=this.items.filter((i:any) => i.id !== product.id

)
this.items.push(product);


window.alert('Your product has been updated to the cart!');

  }
  getquantity(): any {
    return this.selectedTeam;
  }
  setquantity(val: any) {
    this.selectedTeam = val;
    this.quantitychange.emit(val);

  }
  getItems() {
    return this.items;
  }
  clearCart(id:any) {
 this.items=this.items.filter((a:any) => a.id !== id)
    return this.items;

  }

  settotalprice(price:any){
    this.price= price;
      }
  setname(name:any){
    this.name= name;
          }
  getname(){
    return this.name
                  }
  getprice(){
    return this.price
                  }
}
