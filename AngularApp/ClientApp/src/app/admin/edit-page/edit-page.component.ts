import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsService} from '../../shared/products.service';
import {switchMap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {AlertService} from "../shared/services/alert.service";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {
  form: FormGroup
  product: Product
  submitted: boolean = false
  uSub: Subscription

  constructor(
    private alert: AlertService,
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.productsService.getById(params['id'])
      }))
      .subscribe((product: Product) => {
        this.product = product
        this.form = new FormGroup({
          name: new FormControl(product.name, Validators.required),
          company: new FormControl(product.company, Validators.required)
        })
      })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true

    this.uSub = this.productsService.update({
      ...this.product,
      name: this.form.value.name,
      company: this.form.value.company
    }).subscribe(() => {
      this.submitted = false
      this.alert.success('Продукт был обновлен')
    })
  }

  ngOnDestroy(): void {
    if (this.uSub) {
      this.uSub.unsubscribe()
    }
  }
}
