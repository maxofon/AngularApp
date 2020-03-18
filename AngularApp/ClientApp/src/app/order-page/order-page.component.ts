import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CartService} from '../shared/services/cart.service';

@Component({
  selector: 'order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  form: FormGroup
  submitted: boolean =  false
  message: string

  constructor(
      public auth: AuthService,
      private router: Router,
      private route: ActivatedRoute,
      private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      surname: new FormControl(null, [
        Validators.required
      ]),
      address: new FormControl(null, [
        Validators.required
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl(null, [
        Validators.required
      ]),
    })
  }

  submit() {

  }
}
