import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AlertService} from '../../../shared/services/alert.service';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {OrderItem} from '../../../shared/interfaces/OrderItem';
import {OrderItemsService} from '../../../shared/services/order-items.service';

@Component({
  selector: 'order-items-dashboard-page',
  templateUrl: './order-items-dashboard-page.component.html',
  styleUrls: ['./order-items-dashboard-page.component.scss']
})
export class OrderItemsDashboardPageComponent implements OnInit, OnDestroy {

  orderItems: OrderItem[] = []
  pSub: Subscription
  dSub: Subscription
  loaded: boolean = false

  constructor(
      private alert: AlertService,
      private orderItemsService: OrderItemsService,
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pSub = this.route.params
        .pipe(switchMap((params: Params) => {
          return this.orderItemsService.getByOrderId(params['orderId'])
        }))
        .subscribe((orderItems:OrderItem[]) => {
          this.orderItems = orderItems
          this.loaded = true
        })
  }

  remove(id: string): void {
    this.dSub = this.orderItemsService.remove(id).subscribe(() => {
      this.orderItems = this.orderItems.filter(orderItem => orderItem.id !== id);
      this.alert.danger('Строка заказа была удалена');
    })
  }

  ngOnDestroy(): void {
    this.pSub.unsubscribe();
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }

}
