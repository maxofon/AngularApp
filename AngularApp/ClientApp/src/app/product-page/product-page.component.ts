import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductsService} from '../shared/services/products.service';
import {Product} from '../shared/interfaces/Product';
import {switchMap} from 'rxjs/operators';
import {CartService} from '../shared/services/cart.service';
import {AlertService} from '../shared/services/alert.service';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  product$: Observable<Product>

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService,
    private alert: AlertService
  ) {
      
  }

    ngOnInit(): void {        
        console.log('init ProductPageComponent');
        this.product$ = this.route.params
          .pipe(switchMap((params: Params) => {
            return this.productsService.getById(params['id'])
          }))
  }

    addToCart(id: string) {
        this.cartService.addToCart(id);
        this.alert.success('Продукт был добавлен в корзину')
    }
}
