import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../interfaces/Product';
import {CartService} from '../../services/cart.service';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product
  @Input() showAddCart: boolean

  constructor(
      private alert: AlertService,
      private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product.id);
    this.alert.success(`Продукт ${product.name} был добавлен в корзину`)
  }
}
