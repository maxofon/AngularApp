import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../admin/shared/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MyValidators} from '../shared/my.validators';

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
      private route: ActivatedRoute
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
        Validators.minLength(6)
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

    // const user: User = {
    //   email: this.form.value.email,
    //   password: this.form.value.password
    // }

    // this.auth.login(user).subscribe(() => {
    //   this.form.reset;
    //   this.router.navigate(['/admin','dashboard'])
    //   this.submitted = false;
    // }, () => {
    //   this.submitted = false
    // });

    this.form.reset;
    this.router.navigate(['/admin','dashboard'])
    this.submitted = false;

  }

}
