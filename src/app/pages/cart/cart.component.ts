import { Component, OnInit, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CartInterface, CartItemInterface } from '../../models/cart.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {

  cartService = inject(CartService);

  cart: CartInterface = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'Nike Shoes',
        price: 25,
        quantity: 3,
        id: '1',
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'Nike Shoes',
        price: 30,
        quantity: 4,
        id: '1',
      },
    ],
  };

  dataSource: CartItemInterface[] = [];
  // dataSource_: Array<CartItemInterface> = []

  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItemInterface>): number {
    return this.cartService.getTotal(items);
  }
}
