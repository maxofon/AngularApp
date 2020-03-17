import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../interfaces/Product';
import {AlertService} from '../../../admin/shared/services/alert.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product

  constructor(
      private alert: AlertService,
      private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addToCart(id: string) {
    this.cartService.addToCart(id);
    this.alert.success('Продукт был добавлен в корзину')
  }
}
