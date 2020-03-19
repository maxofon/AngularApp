import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AlertService} from '../../../shared/services/alert.service';
import {Order} from '../../../shared/interfaces/Order';
import {OrderService} from '../../../shared/services/order.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Params, Route} from '@angular/router';

@Component({
  selector: 'dashboard-page',
  templateUrl: './orders-dashboard-page.component.html',
  styleUrls: ['./orders-dashboard-page.component.scss']
})
export class OrdersDashboardPageComponent implements OnInit, OnDestroy {
  orders: Order[] = []
  pSub: Subscription
  dSub: Subscription

  constructor(
      private alert: AlertService,
      private orderService: OrderService,
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pSub = this.route.params
                .pipe(switchMap((params: Params) => {
                  return this.orderService.getByUsername(params['userName'])
                }))
                .subscribe((orders: Order[]) => {
                  this.orders = orders
                })
  }

  remove(id: string): void {
    this.dSub = this.orderService.remove(id).subscribe(() => {
      this.orders = this.orders.filter(product => product.id !== id);
      this.alert.danger('Заказ был удален');
    })
  }

  ngOnDestroy(): void {
    this.pSub.unsubscribe();
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }
}
