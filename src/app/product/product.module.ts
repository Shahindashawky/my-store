import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule { 
  private id: string;
  private name: string;
  private price: string;
  private url: string;
  private description: string;
  private value: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.price = '';
    this.url = '';
    this.description = '';
    this.value=''
  }
}
