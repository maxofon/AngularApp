import {Product} from './Product';
import {User} from './User';

export interface Cart {
    id: string,
    quantity: number,
    product: Product,
    price: number,
    user: User
}
