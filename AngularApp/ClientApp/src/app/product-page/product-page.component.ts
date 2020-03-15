import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductsService} from '../shared/products.service';
import {Product} from '../shared/interfaces/Product';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product$: Observable<Product>

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
      
  }

    ngOnInit(): void {        
        console.log('init ProductPageComponent');
        this.product$ = this.route.params
          .pipe(switchMap((params: Params) => {
            return this.productsService.getById(params['id'])
          }))
  }

}
