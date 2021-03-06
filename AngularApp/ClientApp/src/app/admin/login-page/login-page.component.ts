import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../../shared/interfaces/User';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup
  submitted: boolean =  false;
  message: string

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.auth.isAuthenticated() && this.auth.isAdmin()) {
      this.router.navigate(['/admin','dashboard'])
    }

    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Пожалуйста, введите данные.';
      } else if (params['authFailed']) {
        this.message = 'Сессия истекла. Введите данные заново.';
      }
    })

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

    this.auth.loginAsAdmin(user).subscribe(() => {
      this.form.reset;
      this.router.navigate(['/admin','dashboard'])
      this.submitted = false;
    }, () => {
      this.submitted = false
    });

    // this.form.reset;
    // this.router.navigate(['/admin','dashboard'])
    // this.submitted = false;

  }
}
