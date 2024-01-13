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

  // add items to cart
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
  }

  // get total price of cart items
  getTotal(items: CartItemInterface[]): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  clearCart() {
    this.cart.next({ items: [] });
    this._snackbar.open('Cart is emptied.', 'Ok', { duration: 3000 });
  }
}
