import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-productsContent',
  templateUrl: './productsContent.component.html',
  styleUrls: ['./productsContent.component.scss']
})
export class ProductsContentComponent implements OnInit {
  public id:number=-1;
  constructor(private route:ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }

}
