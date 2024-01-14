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
  @Input() product: ProductInterface | undefined;

  // add event emitter
  @Output() addToCart = new EventEmitter();

  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
