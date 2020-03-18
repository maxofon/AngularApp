import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../shared/services/products.service';
import {Observable} from 'rxjs';
import {Product} from '../shared/interfaces/Product';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    products$: Observable<Product[]>;
    //products: Product[]

  constructor(
    private productsService: ProductsService,
    private auth: AuthService
  ) { }

    ngOnInit(): void {
        //this.products = [];
      this.products$ = this.productsService.getAll()
  }

}
