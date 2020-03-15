import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../../shared/services/products.service';
import {Product} from '../../shared/interfaces/Product';
import {Subscription} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  products: Product[] = []
  pSub: Subscription
  dSub: Subscription
  searchStr = '';

  constructor(
    private alert: AlertService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.pSub = this.productsService.getAll().subscribe(products => {
      this.products = products
      // console.log('Products: ',this.products);
    })

  }

  ngOnDestroy(): void {
    this.pSub.unsubscribe();
    if (this.dSub) {
      this.dSub.unsubscribe();
    }

  }

  remove(id: string): void {
    this.dSub = this.productsService.remove(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
      this.alert.danger('Продукт был удален');
    })
  }
}
