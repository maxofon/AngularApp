import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../admin/shared/services/auth.service';
import {CartService} from '../../services/cart.service';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  totalAmount: string
  cartSub: Subscription

  constructor(
      public auth: AuthService,
      private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.updateTotal();
    this.cartSub = this.cartService.totalAmount$.subscribe((value) => {
      this.totalAmount = value
    })
  }

  ngOnDestroy(): void {
    if (this.cartSub) {
      this.cartSub.unsubscribe()
    }
  }

}
