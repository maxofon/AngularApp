import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cart} from '../shared/interfaces/Cart';
import {AlertService} from '../admin/shared/services/alert.service';
import {Subscription} from 'rxjs';
import {CartService} from '../shared/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit, OnDestroy {
  carts: Cart[] = []
  pSub: Subscription
  dSub: Subscription
  loaded: boolean

  constructor(
      private alert: AlertService,
      private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.pSub = this.cartService.getAll().subscribe(carts => {
      this.carts = carts
      this.loaded = true;
    })
  }

  remove(id: string): void {
    this.dSub = this.cartService.remove(id).subscribe(() => {
      this.carts = this.carts.filter(cart => cart.id !== id);
      this.cartService.updateTotal();
      this.loaded = true;
      this.alert.danger('Продукт был удален из корзины');
    })
  }

  ngOnDestroy(): void {
    this.pSub.unsubscribe();
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }
}

