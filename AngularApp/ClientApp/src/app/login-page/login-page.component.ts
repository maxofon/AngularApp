import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../shared/interfaces/User';
import {CartService} from '../shared/services/cart.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
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
    // this.route.queryParams.subscribe((params: Params) => {
    //   if (params['loginAgain']) {
    //     this.message = 'Пожалуйста, введите данные.';
    //   } else if (params['authFailed']) {
    //     this.message = 'Сессия истекла. Введите данные заново.';
    //   }
    // })

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5)
      ])
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true;

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.login(user).subscribe(() => {
      this.form.reset;
      this.router.navigate(['/'])
      this.submitted = false;
      this.cartService.updateTotal();
    }, () => {
      this.submitted = false
    });
  }
}
