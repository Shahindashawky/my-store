import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

allproduct:any;
data:any;

  constructor(private http :HttpClient) { 

    this.data=[];
    this.allproduct=[]
  }



  getProduct(): Observable<[]>{
    return this.http.get<[]>('./assets/data.json')
    
 
  }
updateproduct(product:any){
  this.allproduct=this.getProduct().subscribe((i:any) =>{

  this.data=i.filter((d:any) => d.id !== product.id);
  this.data.push(product)
  this.setnewdata(this.data)
})
}
setnewdata(newdata:any){
  this.allproduct=newdata;
}
getnewproducts(){
  return this.allproduct
}


}
