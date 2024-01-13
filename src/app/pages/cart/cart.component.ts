import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { CartInterface, CartItemInterface } from '../../models/cart.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    CommonModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cart: CartInterface = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'Nike Shoes',
        price: 25,
        quantity: 3,
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
}
