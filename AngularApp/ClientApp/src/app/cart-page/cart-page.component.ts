import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cart} from '../shared/interfaces/Cart';
import {Subscription} from 'rxjs';
import {CartService} from '../shared/services/cart.service';
import {AlertService} from '../shared/services/alert.service';
import {Product} from '../shared/interfaces/Product';

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

  remove(cart: Cart): void {
    let amount = cart.price * cart.quantity;

    this.dSub = this.cartService.remove(cart.id).subscribe(() => {
      this.carts = this.carts.filter(c => c.id !== cart.id);
      this.cartService.updateTotal();
      this.loaded = true;
      this.alert.danger(`Продукт на сумму ${amount} был удален из корзины`);
    })
  }

  ngOnDestroy(): void {
    this.pSub.unsubscribe();
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }
}

