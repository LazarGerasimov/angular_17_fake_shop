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

  removeItemFromCart(
    item: CartItemInterface,
    updateUser = true
  ): CartItemInterface[] {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );

    if (updateUser) {
      // update state
      this.cart.next({ items: filteredItems });
      this._snackbar.open('Item removed from cart', 'Ok', { duration: 3000 });
    }

    return filteredItems;
  }

  reduceQuantity(item: CartItemInterface) {
    let itemForRemoval: CartItemInterface | undefined;
    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }

      return _item;
    });

    if (itemForRemoval) {
      filteredItems = this.removeItemFromCart(itemForRemoval, false);
    }

    this.cart.next({ items: filteredItems });
    this._snackbar.open('1 item removed from cart', 'Ok', { duration: 3000 });
  }
}
