import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../shared/services/order.service';
import {Order} from '../shared/interfaces/Order';
import {CartService} from '../shared/services/cart.service';
import {Alert, AlertService} from '../shared/services/alert.service';

@Component({
  selector: 'order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  form: FormGroup
  submitted: boolean =  false

  constructor(
      public auth: AuthService,
      public alert: AlertService,
      private router: Router,
      private route: ActivatedRoute,
      private orderService: OrderService,
      private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(`${this.auth.user}`, [
        Validators.required
      ]),
      surname: new FormControl(null, [
        Validators.required
      ]),
      address: new FormControl(null, [
        Validators.required
      ]),
      email: new FormControl(`${this.auth.email}`, [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl(null, [
        Validators.required
      ]),
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true;

    const order: Order = {
      name: this.form.value.name,
      surname: this.form.value.surname,
      email: this.form.value.email,
      address: this.form.value.address,
      phone: this.form.value.phone
    }

    this.orderService.create(order).subscribe(() => {
      this.form.reset;
      this.router.navigate(['/'])
      this.submitted = false;
      this.cartService.updateTotal();
      this.alert.success(`${this.auth.user}, Ваш заказ успешно оформлен.`)
    }, () => {
      this.submitted = false
    });
  }
}
