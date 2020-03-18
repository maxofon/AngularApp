import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {CartService} from '../../services/cart.service';
import {Subject, Subscription} from 'rxjs';
import {Router} from '@angular/router';

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
      private cartService: CartService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.cartSub = this.cartService.totalAmount$.subscribe((value) => {
      this.totalAmount = value
    })

    this.cartService.updateTotal();
  }

  ngOnDestroy(): void {
    if (this.cartSub) {
      this.cartSub.unsubscribe()
    }
  }

  logout($event: MouseEvent) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/login'])
  }
}
