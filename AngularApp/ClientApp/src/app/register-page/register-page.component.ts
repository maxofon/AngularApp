import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../admin/shared/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MyValidators} from '../shared/my.validators';
import {User} from '../shared/interfaces/User';
import {CartService} from '../shared/services/cart.service';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup
  submitted: boolean =  false;
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
      name: new FormControl(null, [
        Validators.required
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,

      ]),
      confirmPassword: new FormControl(null, [
        Validators.required
      ])
    },[MyValidators.confirmPassword])
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true;

    const user: User = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.register(user).subscribe(() => {
      this.form.reset;
      this.router.navigate(['/'])
      this.submitted = false;
      this.cartService.updateTotal();
    }, () => {
      this.submitted = false
    });
  }

}
