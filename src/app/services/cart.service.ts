import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartInterface, CartItemInterface } from '../models/cart.model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<CartInterface>({ items: [] });

  constructor(private _snackbar: MatSnackBar) {}

  addToCart(item: CartItemInterface) {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackbar.open('1 item added to cart.', 'Ok', { duration: 3000 });
    console.log(this.cart.value);
  }
}