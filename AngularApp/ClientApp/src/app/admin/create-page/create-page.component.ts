import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../shared/interfaces/Product";
import {ProductsService} from "../../shared/services/products.service";
import {AlertService} from "../shared/services/alert.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;

  constructor(
    private alert: AlertService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    const product: Product = {
      name: this.form.value.name,
      company: this.form.value.company,
      price: this.form.value.price
    }

    this.productsService.create(product).subscribe(() => {
      this.form.reset()
      this.alert.success('Создан новый пост')
    })

    console.log('new product', product);
  }
}
