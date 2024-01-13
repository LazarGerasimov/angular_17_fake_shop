import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductInterface } from '../../../../models/product.model';

@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule],
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.scss',
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;

  dummyProduct: ProductInterface | undefined = {
    id: 1,
    title: 'test title',
    price: 75,
    category: 'shoes',
    description: 'test description',
    image: 'https://via.placeholder.com/150',
  };

  // add event emitter
  @Output() addToCart = new EventEmitter();

  onAddToCart() {
    this.addToCart.emit(this.dummyProduct);
  }
}
