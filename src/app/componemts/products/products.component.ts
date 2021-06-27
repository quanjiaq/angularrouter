import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public arr = [1,2,3,4,5,6];
  handleclick(item:number){
    this.router.navigate(['productsContent'],{queryParams:{id:item}});
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
