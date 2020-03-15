import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../shared/services/products.service';
import {Observable} from 'rxjs';
import {Product} from '../shared/interfaces/Product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    products$: Observable<Product[]>;
    //products: Product[]

  constructor(
    private productsService: ProductsService
  ) { }

    ngOnInit(): void {
        //this.products = [];
      this.products$ = this.productsService.getAll()
  }

}
