import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../../shared/interfaces/Product';
import {User} from '../../shared/interfaces/User';

@Pipe({
  name: 'searchName'
})

export class SearchNamePipe implements PipeTransform{
  transform(products: any, search = ''): Product[] | User[] {
    if (!search.trim()) {
      return products
    }

    return products.filter((product: any) => {
      return product.name.toLowerCase().includes(search.toLowerCase())
    })
  }

}
